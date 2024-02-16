import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    root: './public',
    build:{ 
        outDir: '../frontend/dist',
        rollupOptions: {
            input: './src/index.tsx',
        },
        },
    plugins: [react(), tsconfigPaths()],
    esbuild: {
    jsxInject: `import React from 'react'`,
},
})
