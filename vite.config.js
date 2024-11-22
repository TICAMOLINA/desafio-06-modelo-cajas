import { resolve } from 'path'

export default {
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                buy_mario: resolve(__dirname, 'pages/buy_mario/index.html'),
                buy_mortal_kombat: resolve(__dirname, 'pages/buy_mortal_kombat/index.html')
          }
      }
  }
}