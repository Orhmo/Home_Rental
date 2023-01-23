import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
build: {

   /** If you set esmExternals to true, this plugins assumes that
     all external dependencies are ES modules */

   commonjsOptions: {
      esmExternals: true
   }
}
