import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Works
  // optimizeDeps: { include: ["prismjs/components/prism-csharp"] },
  plugins: [vue()]
})
