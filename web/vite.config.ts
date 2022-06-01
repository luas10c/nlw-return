import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'

export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  }

  return defineConfig({
    plugins: [react(), tsconfigPaths(), svgrPlugin()],
    build: {
      sourcemap: true,
      minify: true,
    },
    server: {
      port: 3000
    },
    preview: {
      port: 3000
    }
  })
}