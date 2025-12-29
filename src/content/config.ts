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

const aboutCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            buttons: z.array(
                z.object({
                    text: z.string(),
                    href: z.string(),
                })
            ),
            image: image(),
        }),
});

const footerCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        email: z.string().email(),
        phone: z.string(),
        address: z.string().optional(),
    }),
});

export const collections = {
    hero: heroCollection,
    about: aboutCollection,
    footer: footerCollection,
};
