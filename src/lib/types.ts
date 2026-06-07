export type Language = "fr" | "en";
export type Translation = { fr: string; en: string };
export type LangFn<T extends unknown[]> = {
  fr: (...args: T) => string;
  en: (...args: T) => string;
};
