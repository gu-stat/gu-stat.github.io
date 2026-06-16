import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` if you switch between the apex domain and www.
export default defineConfig({
  site: 'https://www.ogustavo.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});
