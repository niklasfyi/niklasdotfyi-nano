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

const checkins = defineCollection({
  schema: {
    type: "object",
    properties: {
      type: { type: "array", items: { type: "string" } },
      properties: {
        type: "object",
        properties: {
          name: { type: "array", items: { type: "string" } },
          published: { type: "array", items: { type: "string" } },
          content: { type: "array", items: { type: "string" } },
          // Add other properties as needed
        },
        required: ["name", "published", "content"],
      },
    },
    required: ["type", "properties"],
  },
});

export const collections = { notes, articles, checkins };
