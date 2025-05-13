import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Explicitly set the port for the admin app
    host: true, // Listen on all network interfaces (recommended for Docker)
  },
});