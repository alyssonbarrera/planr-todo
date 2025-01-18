import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    silent: false,
    globals: true,
    clearMocks: true,
    exclude: ['**/node_modules/**', '**/dist/**'],
    setupFiles: ['src/tests/setup-tests.ts'],
    environment: 'jsdom',
    coverage: {
      exclude: [
        'src/app/**',
        '**/.next/**',
        'src/tests/**',
        'src/infra/**',
        'src/@types/**',
        'src/**/dtos/**',
        'src/core/lib/**',
        'src/core/i18n/**',
        'src/**/index.ts',
        '**/node_modules/**',
        'src/**/*.stories.tsx',
        'src/core/components/ui/**',
        'src/core/components/layout/**',
      ],
      include: ['src/**'],
      reporter: ['text', 'text-summary', 'html'],
    },
  },
})
