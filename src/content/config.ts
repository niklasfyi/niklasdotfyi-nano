import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  type: "content",
  schema: z.object({
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    categories: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const articles = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    categories: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { notes, articles };
