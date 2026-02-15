import type { YearlyAwards, AwardProduct, AwardType, ProductCategory } from "@/types/award";
import awards2025 from "@/data/awards/2025.json";

const allAwards: YearlyAwards[] = [
  awards2025 as YearlyAwards,
];

export function getAvailableYears(): number[] {
  return allAwards.map((a) => a.year).sort((a, b) => b - a);
}

export function getAwardsByYear(year: number): YearlyAwards | undefined {
  return allAwards.find((a) => a.year === year);
}

export function getLatestAwards(): YearlyAwards {
  return allAwards[0];
}

export function filterByAwardType(
  products: AwardProduct[],
  type: AwardType
): AwardProduct[] {
  return products.filter((p) => p.awardType === type);
}

export function filterByCategory(
  products: AwardProduct[],
  category: ProductCategory
): AwardProduct[] {
  return products.filter((p) => p.category === category);
}

export function getUniqueAwardTypes(products: AwardProduct[]): AwardType[] {
  return [...new Set(products.map((p) => p.awardType))];
}

export function getUniqueCategories(products: AwardProduct[]): ProductCategory[] {
  return [...new Set(products.map((p) => p.category))];
}
