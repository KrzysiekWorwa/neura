// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://krzysiekworwa.github.io',
  base: '/neura/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    markdoc(),
  ]
});
