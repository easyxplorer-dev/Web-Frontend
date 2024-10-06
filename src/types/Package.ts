export type Hotel = {
  id: number;
  name: string;
  description: string;
  city: string;
  nights?: number;
  included?: string[];
};

export type Package = {
  id: number;
  images: string[];
  name: string;
  price: string;
  category: string;
  stars: number[];
  days: number;
  hotels: Hotel[];
  payPolicy: string[];
  cancelPolicy: string[];
  notes: string[];
  included?: string[];
  notIncluded?: string[];
};
