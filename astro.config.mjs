import { defineConfig, envField } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import node from '@astrojs/node';

export default defineConfig({
  site: 'https://Ipambe.github.io',
  server: {
    port: 3000,
    host: true
  },
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret", optional: false })
    }
  }
})