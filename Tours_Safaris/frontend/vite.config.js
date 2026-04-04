//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

//export default defineConfig({
//  plugins: [react()],
//  server: {
//    port: 3000,
//    open: true
//  }
//})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/static/',  // must match Django's STATIC_URL
  build: {
    chunkSizeWarningLimit: 1000, // Warning only if chunk > 1 MB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // all external libraries go into vendor.js
          }
        },
      },
    },
  },
});