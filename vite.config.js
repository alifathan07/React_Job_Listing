import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Port for the development server
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Backend server
        changeOrigin: true, // Change the origin to match the target server
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' prefix before sending request to backend
      },
    },
  },
});
