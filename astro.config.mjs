import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site:
    import.meta.env.NODE_ENV === 'production'
      ? 'https://inajika.com'
      : 'https://develop.my-homepage-4sx.pages.dev',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
