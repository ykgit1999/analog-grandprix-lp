export type AwardType =
  | "gold"
  | "grandprix"
  | "best-cp"
  | "special-development"
  | "accessory";

export type ProductCategory =
  | "turntable"
  | "cartridge"
  | "tonearm"
  | "phono-stage"
  | "tube-amp"
  | "accessory";

export interface AwardProduct {
  id: string;
  productName: string;
  manufacturer: string;
  awardType: AwardType;
  category: ProductCategory;
  categoryLabel: string;
  description?: string;
  descriptionEn?: string;
  descriptionZh?: string;
  price?: string;
  imageUrl?: string;
}

export interface YearlyAwards {
  year: number;
  announcedDate: string;
  products: AwardProduct[];
}

export interface Judge {
  id: string;
  name: string;
  nameEn?: string;
  role: "chair" | "member";
  bio: string;
  bioEn?: string;
  bioZh?: string;
  imageUrl?: string;
}

export interface Category {
  id: ProductCategory;
  nameJa: string;
  nameEn: string;
  nameZh: string;
  description: string;
  descriptionEn: string;
  descriptionZh: string;
}

export interface HistoryMilestone {
  year: number;
  title: string;
  titleEn: string;
  titleZh: string;
  description: string;
  descriptionEn: string;
  descriptionZh: string;
}
