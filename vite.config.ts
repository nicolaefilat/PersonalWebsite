import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import yaml from '@rollup/plugin-yaml'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), yaml()],
    // Empty string makes paths relative, allowing deployment to any subdirectory
    base: '',
    build: {
        outDir: 'docs',
    },
    resolve: {
        alias: {
            '@config': '/config',
        },
    },
})
