// Cleanup for the old Gatsby site, which installed an offline service worker
// (gatsby-plugin-offline) at this path. Browsers that still have it keep
// serving the old cached site. When they check for an update they fetch this
// file instead: it clears every cache, unregisters itself, and reloads open
// tabs so they load the current site. Safe to keep indefinitely.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const tabs = await self.clients.matchAll({ type: 'window' });
      tabs.forEach((tab) => tab.navigate(tab.url));
    })()
  );
});
