import { glossarySchema } from './_schema'
import { defineCollection, z } from 'astro:content'

const glossaryCollection = defineCollection({
	type: 'content',
	schema: glossarySchema,
})

export const collection = {
	glossary: glossaryCollection,
}
