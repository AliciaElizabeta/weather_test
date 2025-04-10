import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/weather_test/', // <- aquí el nombre del repo
  plugins: [react()],
})
