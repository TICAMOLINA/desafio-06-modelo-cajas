import { resolve } from 'path'

export default {
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                buy_mario: resolve(__dirname, 'pages/buy_mario/index.html')
          }
      }
  }
}