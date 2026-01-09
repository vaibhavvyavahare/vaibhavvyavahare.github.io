import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        date: z.string(),
        category: z.string(),
        author: z.string().default('Admin'),
        image: z.string().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};
