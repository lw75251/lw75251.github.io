import { getCollection } from 'astro:content';

export const SITE = {
  name: 'Leon Wu',
  title: 'Leon Wu',
  description:
    'Leon Wu: data, statistics and agents. Essays and notes on finding the signal and building tools so everyone can find their own.',
  email: 'lw75251@gmail.com',
  github: 'https://github.com/lw75251',
  linkedin: 'https://www.linkedin.com/in/aleonwu/',
};

/** Published writing, newest first. Drafts are included only in `astro dev`. */
export async function getWriting() {
  const all = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Titles of drafts in progress, shown on the homepage as "on the desk". */
export async function getDrafts() {
  const drafts = await getCollection('writing', ({ data }) => data.draft);
  return drafts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
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
