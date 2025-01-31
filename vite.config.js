import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src/lib/pages"), 
      "@components": path.resolve(__dirname, "src/lib/components"), 
      "@shared": path.resolve(__dirname, "src/lib/pages/shared"),
    },
  },
})
