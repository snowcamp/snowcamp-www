import { defineConfig } from 'astro/config';
import { i18n } from "astro-i18n-aut/integration";

export const defaultLocale = "fr";
export const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  fr: "fr-FR",
};

export default defineConfig({
  site: 'https://snowcamp.io',
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    i18n({ locales, defaultLocale })
  ]
});