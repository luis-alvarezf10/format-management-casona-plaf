import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base : './',
  server: {
    host: true, // Permite acceder desde otra máquina de la misma red
    port: 5173, // Puedes dejar el puerto por defecto o cambiarlo
  },
})
