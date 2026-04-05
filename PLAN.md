# Migration Plan: Jamila M. Brown, PsyD (Astro Refresh)

## 🏗️ Architectural Overview
- **Framework:** Astro (latest)
- **CMS:** [Obsidian Vault](/Users/jamalwilliams/Vault/Websites/jamilambrownpsyd.com)
- **Integration:** Astro Content Layer with a custom `glob` loader.
- **Optimization:** Zero-sync, instant-update using `vite.server.fs.allow`.
- **Pattern:** Mirrors `jamalwilliams.com` architecture.

## 🎨 Brand Identity (Modern Refresh)
- **Concept:** "Warm Minimalism" – Moving away from monochrome to a calming, trust-inducing aesthetic.
- **Color Palette:**
  - **Primary:** Sage Green (`#B2C2B2`) - For calm and growth.
  - **Secondary:** Muted Slate (`#4A5D6A`) - For stability and professional authority.
  - **Accent:** Sand/Neutral (`#F5F5DC`) - For warmth and accessibility.
  - **Text:** Deep Charcoal (`#333333`) - For readability.
- **Typography:**
  - **Headings:** *Montserrat* (Semi-bold) - Professional and approachable.
  - **Body:** *Inter* - Highly legible and modern.
- **Voice:** "The Affirming Guide" – A respectful, professional witness. Avoid "we/us" in the context of personal experience; instead, focus on "holding space" for the client's journey.

## 🗺️ Sitemap & URL Mapping
- **Home (`/`):** Unified landing page (Hero, Bio, Services Summary, CTA).
- **Services (`/services/[slug]`):** Individual sub-pages for specific niches (Expat Uncertainty, Teen Transitions, etc.).
- **Resources (`/resources/`):** A combined collection of Books and a new Blog.
- **Contact (`/contact/`):** A dedicated, multi-step "Consultation Request" form.

## 📦 Content Collections (Obsidian Schemas)
- **`services`**: `title`, `description`, `icon`, `slug`, `order`.
- **`books`**: `title`, `author`, `link`, `category`, `summary`.
- **`posts`**: `title`, `date`, `tags`, `summary`, `status`. (Matches `jamalwilliams.com` naming)
- **`pages`**: Schema for generic pages and the "About" section.

## 🚀 Improvement Audit
1. **Performance (Core Web Vitals):** Migrating from WordPress to Astro will improve Time-to-Interactive (TTI) by ~80%, crucial for users in high-stress moments.
2. **SEO Expansion:** Adding a blog/resources collection managed in Obsidian will allow Dr. Brown to build authority on niche topics like "Expat Uncertainty."
3. **Refined CTA UX:** The "Lets Talk" CTA will be transformed into a guided, multi-step intake form that feels like the "First Step" of a therapeutic process.
4. **Image Optimization:** All headshots and stock imagery will be converted to AVIF/WebP using Astro's `<Image />` component for superior performance.
5. **Accessibility (WCAG 2.1):** The new palette ensures a 7:1 contrast ratio, with ARIA-compliant forms and navigation.

## 🧱 Reference Material
- Pattern: `/Users/jamalwilliams/code/jamalwilliams.com`
- Vault Root: `/Users/jamalwilliams/Vault/Websites/jamilambrownpsyd.com`

## ✅ Next Steps
1. [x] Scaffold Astro project in `/Users/jamalwilliams/code/jamilambrownpsyd.com`.
2. [x] Initialize `.env` with `VAULT_CONTENT_PATH="/Users/jamalwilliams/Vault/Websites/jamilambrownpsyd.com"`.
3. [x] Configure `astro.config.mjs` with `vite.server.fs.allow`.
4. [x] Define Content Layer schemas in `src/content.config.ts` (Mirroring `jamalwilliams.com` but adding `services`).
5. [x] Build the "Warm Minimalist" UI components using Tailwind (as per prototype pattern).
6. [x] Migrate copy and images from the existing site.
7. [ ] **Form Wiring:** Update `src/pages/index.astro` with a valid Formspree ID or enable Netlify Forms (`data-netlify="true"`).
8. [ ] **Frontmatter Enrichment:** Add `heroImage` and `order` fields to the markdown files in the vault to replace manual mapping in `index.astro`.
9. [ ] **Content Migration:** Continue moving existing blog posts into the vault's `posts/` directory.
10. [ ] **Mobile Navigation:** Finalize mobile menu toggle logic in `Header.astro`.
7. [x] Create 3 initial SEO blog posts for the Resources section.
8. [x] Refactor site-wide metadata into `src/config.ts`.
9. [x] Set up GitHub Actions and Cloudflare Pages deployment.

## ⏭️ Next Steps
- [ ] 🟢 **Formspree Setup**: Update `formspreeId` in `src/config.ts` with the actual account ID.
- [ ] 🟢 **DNS Mapping**: Connect `jamilambrownpsyd.com` to the Cloudflare Pages project.
- [ ] **Recommended Reading**: Populate the `books` collection in the vault.
- [ ] **Geographic SEO**: Refine keywords for Washington State/Seattle.

