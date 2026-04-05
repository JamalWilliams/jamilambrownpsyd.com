import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import 'dotenv/config';
import path from 'node:path';

const vaultPath = process.env.VAULT_CONTENT_PATH || '';

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: path.join(vaultPath, 'posts') }),
	schema: z.object({
		title: z.string(),
		summary: z.string().optional(),
    description: z.string().optional(),
		date: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
    status: z.string().optional(),
    tags: z.array(z.string()).optional(),
	}),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: path.join(vaultPath, 'pages') }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
    heroHeadline: z.string().optional(),
    heroSubheadline: z.string().optional(),
    heroImage: z.string().optional(),
    teletherapyImage: z.string().optional(),
    headshotImage: z.string().optional(),
    // Settings fields
    name: z.string().optional(),
    professionalTitle: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    license: z.string().optional(),
    address: z.string().optional(),
    formspreeId: z.string().optional(),
    socials: z.array(z.object({
      label: z.string(),
      href: z.string(),
      shortLabel: z.string(),
    })).optional(),
	}),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: path.join(vaultPath, 'services') }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		icon: z.string().optional(),
    heroImage: z.string().optional(),
    slug: z.string().optional(),
    order: z.number().optional(),
	}),
});

const books = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: path.join(vaultPath, 'books') }),
	schema: z.object({
		title: z.string(),
		author: z.string(),
		link: z.string().optional(),
    category: z.string().optional(),
    summary: z.string().optional(),
	}),
});

export const collections = { posts, pages, services, books };
