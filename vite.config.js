import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public',
  publicDir: false,
  server: { port: 8080, host: true, fs: { allow: ['..'] } },
  build: { outDir: '../dist', emptyOutDir: true },
});
