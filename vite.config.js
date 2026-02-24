import { defineConfig } from 'vite'

export default defineConfig({
  base: '/support-os/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})
