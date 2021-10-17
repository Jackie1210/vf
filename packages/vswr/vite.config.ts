import path from 'path'
import { defineConfig } from 'vite'

const resolve = (url: string) => path.resolve(__dirname, './src', url)

export default defineConfig({
  build: {
    lib: {
      entry: resolve('index.ts'),
      name: 'vswr',
      fileName: (format) => `vswr.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
