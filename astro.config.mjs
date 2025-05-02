import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://Ipambe.github.io',
  server: {
    port: 3000,
    host: true
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
