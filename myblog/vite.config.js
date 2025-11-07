import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This is crucial for Docker to map ports correctly
    strictPort: true,
    port: 5173, // Or your preferred port
  },

})
