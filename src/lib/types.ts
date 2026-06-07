export type Language = "fr" | "en";
export type Translation = Record<Language, string>;
export type TranslationFn<T extends unknown[]> = (...args: T) => string;
export type LangFn<T extends unknown[]> = Record<Language, TranslationFn<T>>;
