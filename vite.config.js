import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../../public/assets',
    emptyOutDir: true
  },
  server: {
    port: 5173
  }
});