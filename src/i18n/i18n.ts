import { init as en_init } from "./en";
import { init as fr_init } from "./fr";

export const i18nconfig = {
    i18n: {} as any,
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'fr']
}
export async function initConfig(lang: string) {
    if (lang === 'en') {
        i18nconfig.i18n = en_init();
    } else if (lang === 'fr') {
        i18nconfig.i18n = fr_init();
    }
} 
export function t(key: string, ...params:any[]): any {
    const value = i18nconfig.i18n[key];
    if (typeof value === "function") {
        switch(params.length){
            case 0: return value();
            case 1: return value(params[0]);
            case 2: return value(params[0], params[1]);
            case 3: return value(params[0], params[1], params[2]);
            default: return value(params);
        }
        return value(params);
    } else {
        return value;
    }
}