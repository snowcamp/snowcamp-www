import type { Translation } from "../lib/types";

export interface SponsorType {
  title: string;
  id: string;
  price: string;
  number: number;
  booth_area?: string;
  kakemono: boolean;
  badge_logo?: boolean;
  places: {
    conferences?: number;
    booth?: number;
    speakers_dinner?: number;
  };
}

export interface Sponsor {
  name: string;
  logo: string;
  url: Translation;
  description: Translation;
}
