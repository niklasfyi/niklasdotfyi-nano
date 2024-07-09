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
  type: "data",
  schema: z.object({
    type: z.string(),
    published: z.coerce.date(),
    syndication: z.array(z.string().optional()),
    checkin: z.object({
      type: z.string(),
      name: z.string(),
      url: z.union([z.string(), z.array(z.string())]),
      tel: z.string().optional(),
      latitude: z.number().optional(),
      longitude: z.number().optional(),
      "street-address": z.string().optional(),
      locality: z.string().optional(),
      region: z.string().optional(),
      "country-name": z.string().optional(),
      "postal-code": z.string().optional(),
    }),
    location: z.object({
      type: z.string().optional(),
      latitude: z.number().optional(),
      longitude: z.number().optional(),
      "street-address": z.string().optional(),
      locality: z.string().optional(),
      region: z.string().optional(),
      "country-name": z.string().optional(),
      "postal-code": z.string().optional(),
    }),
    slug: z.string(),
    url: z.string(),
    "post-status": z.string(),
  }),
});

export const collections = { notes, articles, checkins };
