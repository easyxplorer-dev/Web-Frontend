import { Package } from "src/types/Package";

export const Data: Package[] = [
  {
    id: 1,
    images: [
      "/img/destinations/SouthAfrica1.webp",
      "/img/destinations/Paris2.webp",
      "/img/destinations/SaoPaulo5.webp",
      "/img/destinations/Roma4.webp",
      "/img/destinations/SouthAfrica1.webp",
    ],
    name: "Package 1",
    price: "5",
    description: "Lorem ipsum ipsumipsum ipsumipsum ipsum ipsumipsumipsumipsum",
    category: "Montañas",
    stars: Array(5).fill(1),
  },
  {
    id: 2,
    images: [
      "/img/destinations/Roma4.webp",
      "/img/destinations/SaoPaulo5.webp",
    ],
    name: "Package 1",
    price: "400.00",
    description: "Lorem ipsum",
    category: "Playa",
    stars: Array(4).fill(1),
  },
  {
    id: 3,
    images: [
      "/img/destinations/SaoPaulo5.webp",
      "/img/destinations/SouthAfrica1.webp",
    ],
    name: "Package 3",
    price: "500.19",
    description: "Lorem ipsum",
    category: "Ríos",
    stars: Array(3).fill(1),
  },
  {
    id: 4,
    images: ["/img/destinations/Paris2.webp", "/img/destinations/Cancun3.webp"],
    name: "Package 4",
    price: "600.80",
    description: "Lorem ipsum",
    category: "Valle",
    stars: Array(2).fill(1),
  },
  {
    id: 5,
    images: ["/img/destinations/Roma4.webp"],
    name: "Package 5",
    price: "1000.99",
    description: "Lorem ipsum",
    category: "Montañas",
    stars: Array(1).fill(1),
  },
];
