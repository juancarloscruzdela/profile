import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // GitHub Pages serves the production site from /profile/. Local Vite
  // development stays at / so `npm run dev` works at localhost:5173.
  base: command === 'build' ? '/profile/' : '/',
  plugins: [react(), tailwindcss()],
}))
