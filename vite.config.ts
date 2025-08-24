import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    '**/*.gltf',
    '**/*.glb',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/textures/**/*',
    './public/planet/**/*'
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
});