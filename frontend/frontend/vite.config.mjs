import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: { outDir: 'build' },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
