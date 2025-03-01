import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

/* eslint-disable no-template-curly-in-string */
export default defineConfig(() => ({
  server: {
    port: 3000,
    proxy: {
      '/api/socket': 'ws://localhost:8082',
      '/api': 'http://localhost:8082',
    },
    allowedHosts: ['localhost', '127.0.0.1', 'enroute-app-production.up.railway.app'],
  },
  build: {
    outDir: 'build',
  },
  plugins: [react(), tsconfigPaths()],
}))
