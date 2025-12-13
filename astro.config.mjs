import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' }
    }
  },
  typescript: {
    check: false
  }
});