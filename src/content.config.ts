import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),                       // title at Centennial, or most senior prior post
    summary: z.string(),                    // one line for cards
    languages: z.string().optional(),
    education: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

const assignments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/assignments' }),
  schema: z.object({
    title: z.string(),
    client: z.enum(['AfDB', 'AsDB', 'GEF', 'IFAD', 'IsDB', 'ICA', 'OECD / MOPAN', 'World Bank Group']),
    office: z.string().optional(),          // commissioning office
    line: z.enum(['Evaluation', 'Advisory', 'Analysis']),
    start: z.number().optional(),
    end: z.number().optional(),
    ongoing: z.boolean().default(false),
    region: z.string().optional(),
    team: z.array(reference('people')).default([]),
    featured: z.boolean().default(false),   // shown on the home page
    published: z.boolean().default(true),
  }),
});

export const collections = { people, assignments };
