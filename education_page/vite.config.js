import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      external: ['/public/Images/contact_form.jpg']
    } // Change 'build' to the desired output directory name
  },
  


})
// vite.config.js

