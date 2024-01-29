import { z } from 'astro:content'

export const glossarySchema = z.object({
	title: z.string(),
	slug: z.string(),
	alphabet: z.string(),
	tags: z.array(z.string()),
})
