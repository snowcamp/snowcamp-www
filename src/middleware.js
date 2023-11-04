import { sequence } from "astro/middleware";
import { i18nMiddleware } from "astro-i18n-aut";
import { initConfig, i18nconfig } from "./i18n/i18n";
/** Inject static data into in Astro.locals */
async function preI18n(context, next) {
    context.locals.lang = getLocale(context.url.pathname);
    context.locals.path = context.url.pathname;
    return next();
}

/** Inject static data into in Astro.locals */
async function postI18n({ url, locals}, next) {
    // Step 1: get lang from context
    const lang = getLocale(url.pathname);
    locals.lang = lang;

    // Step 2: load I18n values
    await initConfig(lang);

    return next();
}
function getLocale(slug = '') {
    let locale = i18nconfig.defaultLanguage;
    i18nconfig.supportedLanguages.forEach(lang => {
        if (slug.match(new RegExp('/'+lang + '/.*', "g"))) {
            locale = lang;
        }      
    });
    return locale;
  }
export const onRequest = sequence(preI18n, i18nMiddleware, postI18n);
