import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), // 必填，保证日期正常
    updated: z.coerce.date().optional(),
    categories: z.string(),
    tags: z.array(z.union([z.string(), z.number()])).optional(),
    id: z.union([z.string(), z.number()]).optional(), // 改成可选，避免强制写 id
    cover: z.string().optional(),
    recommend: z.boolean().optional(),
    hide: z.boolean().optional(),
    top: z.boolean().optional()
  }),
});

export const collections = { blog };
