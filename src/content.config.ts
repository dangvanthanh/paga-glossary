import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const glossary = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/glossary' }),
	schema: z.object({
		title: z.string(),
		alphabet: z.string(),
		tags: z.array(z.string()),
	}),
})

export const collections = { glossary }
