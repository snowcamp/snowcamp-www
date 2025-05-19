export interface SponsorType {
  title: string;
  title_key?: string
  price: string;
  number: number;
  booth_area?: string;
  kakemono: boolean;
  description?: string;
  places: {
    conferences?: number;
    booth?: number;
    speakers_dinner?: number;
  }
}
export interface Sponsor {
  name: string;
  logo: string;
  url: {
    fr: string;
    en: string;
  },
  description: {
    fr: string;
    en: string;
  }
}
