// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Replace with the firm's domain once DNS is on Cloudflare.
  site: 'https://www.example.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
