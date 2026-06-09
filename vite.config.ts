import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      watch: {
        ignored: ['**/_old/**'],
      },
      proxy: {
        '/api': 'http://localhost:3001',
        '/send-email': 'http://localhost:3001',
        '/subscribe': 'http://localhost:3001',
        '/classic': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
  };
});