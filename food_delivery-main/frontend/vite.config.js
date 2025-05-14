// vite.config.js (in your ./frontend directory)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Explicitly set the port for the frontend app
    host: true, // Listen on all network interfaces (recommended for Docker)
  },
});