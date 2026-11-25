import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE, getWriting } from '../site';

export async function GET(context: APIContext) {
  const posts = (await getWriting()).filter((p) => !p.data.draft);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/writing/${p.id}/`,
    })),
  });
}
