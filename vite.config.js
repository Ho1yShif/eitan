import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served from https://ho1yshif.github.io/eitan/ — assets resolve under this base.
  base: '/eitan/',
  plugins: [react()],
})
