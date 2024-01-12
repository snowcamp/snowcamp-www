export interface SponsorType {
  title: string;
  price: string;
  number: number;
  booth_area?: string;
  kakemono: boolean;
  places: {
    conferences: number;
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
