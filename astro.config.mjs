import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import yaml from "@rollup/plugin-yaml";

const defaultLocale = "fr";
const locales = ["en", "fr"];

// https://astro.build/config
export default defineConfig({
  site: "https://snowcamp.io",
  build: {
    format: "directory",
  },
  i18n: {
    defaultLocale,
    locales,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [mdx()],
  vite: {
    plugins: [yaml()],
  },
  image: {
    formats: ['avif', 'webp'],
    service: passthroughImageService(),
  },
});
