import {
    resolve
} from 'path'
import {
    defineConfig
} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve("./", 'index.html'),
                quiz: resolve("./", 'quiz/index.html')
            }
        }
    }
})
