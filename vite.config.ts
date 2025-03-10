import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@pages": path.resolve(__dirname, "src/lib/pages"),
      "@components": path.resolve(__dirname, "src/lib/components"),
      "@shared": path.resolve(__dirname, "src/lib/pages/shared"), 
      "@services": path.resolve(__dirname, "src/lib/api/services"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  server: {
    port: 5173,
    host: 'localhost'
  },
  plugins: [react()],
});