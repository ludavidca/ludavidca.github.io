import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served from the custom domain root (set in Settings → Pages), so no `base`.
export default defineConfig({
  site: 'https://davidlu.tech',
  integrations: [sitemap()],
});
