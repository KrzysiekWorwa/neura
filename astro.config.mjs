// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://krzysiekworwa.github.io/neura/',
  base: '/neura/',
  output: 'static', // konieczne dla GitHub Pages
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    markdoc(),
    keystatic()
  ]
});
