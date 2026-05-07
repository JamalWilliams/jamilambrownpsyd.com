# Jamila M. Brown, PsyD - Development Context (v1.1)

## Architecture Overview
- **Framework**: Astro (latest)
- **CMS**: Repository-Local (`src/content/`)
- **Integration**: Astro Content Layer with native `glob` loader pointing to internal paths.
- **Styling**: Tailwind CSS v4 (Warm Minimalist Aesthetic)
- **Deployment**: Configured for Cloudflare Pages

## Content Implementation
- **Source of Truth**: All content (markdown, media) has been moved from the Obsidian Vault into the repository's `src/content/` directory.
- **Staging Parity**: Repository-local content ensures that staging and production builds are deterministic and do not depend on external local files.

## Folder Structure (src/content)
- `pages/`: Main site pages (Home, About).
- `services/`: Specialized niches (Expat Uncertainty, Teen Transitions, etc.).
- `posts/`: Blog content for SEO and authority.
- `media/`: Images and assets.

## Brand Identity (Warm Minimalism)
- **Concept**: Trust-inducing, professional, yet warm.
- **Voice**: "The Affirming Guide" – Professional witness, holding space.
- **Typography**: Montserrat (Headings), Inter (Body).
- **Colors**: Sage Green, Slate, Sand, Charcoal.

## Content Collections
- **`services`**: Niched offerings.
- **`books`**: Recommended reading.
- **`posts`**: Blog content.
- **`pages`**: General site pages.

## Forms
- Consultation requests are handled via Formspree.
