import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://randall3475.github.io',
  base: '/recipe-page',
  integrations: [tailwind()],
})
