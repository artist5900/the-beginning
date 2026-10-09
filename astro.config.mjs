// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.URL || 'https://artist5900.github.io',
  base: process.env.NETLIFY ? '/' : (process.env.DEPLOY_TARGET === 'gh-pages' ? '/the-beginning' : '/'),
});
