// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Preview address for now. Replace with the firm's domain at launch.
  site: 'https://centennial-advisory.suyash-3c6.workers.dev',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
