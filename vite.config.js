import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  base: '/Mini-Project-2-React/' // Tambahkan base path sesuai dengan nama repositori Anda
})
