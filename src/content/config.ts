import { defineCollection, z } from 'astro:content'

const glossaryCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		alphabet: z.string(),
		tags: z.array(z.string()),
	}),
})

export const collection = {
	glossary: glossaryCollection,
}
