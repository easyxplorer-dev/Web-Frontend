export type Hotel = {
  id: number;
  name: string;
  description: string;
  nights: number;
  city: string;
  included: string[];
};

export type Package = {
  id: number;
  images: string[];
  name: string;
  price: string;
  description: string;
  category: string;
  stars: number[];
  days: number;
  hotels: Hotel[];
  payPolicy: string[];
  cancelPolicy: string[];
  included: string[];
  notIncluded: string[];
  notes: string[] | undefined;
};
