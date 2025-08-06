import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/kinisoftwares.github.io/',  // 👈 ADD THIS LINE
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
