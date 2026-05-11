// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://FajarPramudika.github.io',
  base: '/Circle-Of-Life-Labs/',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    })
  ],
});