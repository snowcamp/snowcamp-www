import { defineConfig } from 'astro/config';
import { i18n } from "astro-i18n-aut/integration";

export const defaultLocale = "en";
export const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  fr: "fr-CA",
};

export default defineConfig({
  site: 'https://snowcamp-www.github.io',
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    i18n({ locales, defaultLocale })
  ]
});