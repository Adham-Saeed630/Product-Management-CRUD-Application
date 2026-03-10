import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Product-Management-CRUD-Application/', // Change 'crud-app' to your actual repo name
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: 'Product-Management-CRUD-Application',
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
    },
  },
})
