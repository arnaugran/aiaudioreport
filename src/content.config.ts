import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(50).max(165),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    byline: z.string().default('Fader Report editorial team'),
    // Only ever set for an article a named human has actually read.
    reviewedBy: z.string().optional(),
    // Hard gate: an article claiming prices must declare when they were checked.
    pricesCheckedOn: z.coerce.date().optional(),
    // Every comparison must state what the analysis is based on.
    basis: z.enum(['documentation', 'documentation+published-reviews', 'analysis']),
    hasAffiliateLinks: z.boolean().default(false),
    notLegalAdvice: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    sources: z
      .array(z.object({ title: z.string(), url: z.string().url(), checked: z.coerce.date() }))
      .min(1),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
