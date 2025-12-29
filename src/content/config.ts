import { defineCollection, z } from "astro:content";

const heroCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            subtitle: z.string().optional(),
            buttons: z.array(
                z.object({
                    text: z.string(),
                    href: z.string(),
                })
            ),
            image: image().optional(),
        }),
});

export const collections = {
    hero: heroCollection,
};
