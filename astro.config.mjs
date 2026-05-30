// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://divyatabitch.github.io',
  base: '/uma-commerce-classes-demo',
  vite: {
    plugins: [tailwindcss()]
  }
});