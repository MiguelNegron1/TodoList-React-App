import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    root: './public',
    build:{ 
        outDir: './build',
        // rollupOptions: {
        //     input: './src/index.tsx',
        // },
    },
    publicDir: './public',
    server:{
        port: 3001,
    },
    plugins: [react(), tsconfigPaths()],
    esbuild: {
    jsxInject: `import React from 'react'`,
},
})
