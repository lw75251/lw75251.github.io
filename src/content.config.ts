import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Drafts render in `npm run dev` but are left out of the production build.
    draft: z.boolean().default(false),
    // Short notes get a lighter treatment in lists.
    kind: z.enum(['essay', 'note']).default('essay'),
  }),
});

export const collections = { writing };
