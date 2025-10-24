import { defineConfig } from 'vite'

export default defineConfig({
  base: '/demo-clase-deploy/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
