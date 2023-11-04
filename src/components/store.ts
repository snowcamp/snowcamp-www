export type StoreStatus = "not_open" | "open" | "closed" | "deactivated";
export interface StoreType {
    title: string;
    price_conf: number;
    price_univ: number;
    status: string; 
    open_date: {
        fr: string;
        en: string;
    }
}
  