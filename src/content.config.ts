import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    languages: z.string().optional(),
    order: z.number().default(99),
    core: z.boolean().default(true),
    photo: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const assignments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/assignments' }),
  schema: z.object({
    title: z.string(),
    client: z.enum([
      'AfDB', 'AsDB', 'GEF', 'GPE', 'IDB', 'IsDB', 'OECD / MOPAN',
      'World Bank Group', 'UN agency',
    ]),
    office: z.string().optional(),
    type: z.enum(['Corporate', 'Thematic', 'Systems', 'Country']).optional(),
    start: z.number().optional(),
    end: z.number().optional(),
    region: z.string().optional(),
    partners: z.string().optional(),
    report: z.string().url().optional(),
    team: z.array(reference('people')).default([]),
    published: z.boolean().default(true),
  }),
});

export const collections = { people, assignments };
