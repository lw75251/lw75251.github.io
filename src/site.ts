import { getCollection } from 'astro:content';
import { FORECASTS } from './data/forecasts';

export const SITE = {
  name: 'Leon Wu',
  title: 'Leon Wu · Staff Data Scientist, Early Replit',
  description:
    'Leon Wu rebuilt and scaled Oracle, Replit’s internal analytics agent. Staff data scientist on Replit’s founding data team, owning growth, monetization and revenue analytics and the data stack underneath. Previously Indeed.',
  email: 'lw75251@gmail.com',
  github: 'https://github.com/lw75251',
  linkedin: 'https://www.linkedin.com/in/aleonwu/',
};

export const RESUME_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Resume request')}`;

/** Published writing, newest first. Drafts are included only in `astro dev`. */
export async function getWriting() {
  const all = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** True once at least one essay is published; Writing stays out of the nav until then. */
export async function hasPublishedWriting() {
  return (await getCollection('writing', ({ data }) => !data.draft)).length > 0;
}

/** Real forecasts only; examples show up in `astro dev` so the page can be previewed. */
export function getForecasts() {
  return FORECASTS.filter((f) => import.meta.env.DEV || !f.example);
}

export function hasForecasts() {
  return FORECASTS.some((f) => !f.example);
}

export function formatDate(d: Date, style: 'short' | 'long' = 'short') {
  return d.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: style === 'short' ? 'short' : 'long',
    ...(style === 'long' ? { day: 'numeric' } : {}),
  });
}

export function readingTime(body = '') {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}
