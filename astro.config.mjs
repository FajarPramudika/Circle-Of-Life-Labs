// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://FajarPramudika.github.io',
  base: '/Circle-Of-Life-Labs/',

  integrations: [
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});