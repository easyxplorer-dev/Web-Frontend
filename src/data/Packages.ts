import { Package } from "src/types/Package";

export const Data: Package[] = [
  {
    id: 1,
    images: [
      "/img/destinations/SouthAfrica.webp",
      "/img/destinations/Paris.webp",
      "/img/destinations/SaoPaulo.webp",
      "/img/destinations/Roma.webp",
      "/img/destinations/Caribe.webp",
    ],
    name: "Package 1",
    price: "5",
    description: "Lorem ipsum ipsumipsum ipsumipsum ipsum ipsumipsumipsumipsum",
    category: "Montañas",
    stars: Array(5).fill(1),
    days: 7,
    hotels: [
      {
        id: 1,
        name: "Hampton INN",
        description:
          "Un moderno hotel ubicado en el corazón de la ciudad de Panamá, ideal para explorar su vibrante centro, el famoso Canal de Panamá y la belleza histórica del Casco Viejo.Perfecto para viajeros de negocios y turistas, ofrece fácil acceso a la vida cosmopolita y a las maravillas naturales de los alrededores",
        nights: 3,
        city: "Panamá",
        included: [
          "Traslado aeropuerto hotel aeropuerto (compartido)",
          "3 noches de alojamiento en el hotel Seleccionado",
          "Desayunos diarios",
          "City tour + tour canal + tour de compras albrook mall (compartido)",
          "Full Day zonal libre (no opera sábados y domingos)",
        ],
      },
      {
        id: 2,
        name: "The Art Hotel",
        description:
          "Un hotel boutique artístico ubicado en la zona de El Poblado, famoso por su diseño contemporáneo y exhibiciones de arte. Ofrece una experiencia única en el corazón de Medellín, cerca de restaurantes, bares, y de las atracciones culturales más importantes de la ciudad",
        nights: 3,
        city: "Medellín",
        included: [
          "Traslado aeropuerto hotel aeropuerto (compartido)",
          "3 noches de alojamiento en el hotel Seleccionado",
          "Desayunos diarios",
          "Full Day city tour + Graffitour (compartido)",
          "Full Day embalses del Peñol y Guatapé (compartido)",
          "Impuestos hoteleros y aereos",
        ],
      },
    ],
    payPolicy: [
      "Se requiere un abono de $350 por persona para garantizar la confirmación. La diferencia debe estar pagada 30 días antes del viaje",
    ],
    cancelPolicy: [
      "Toda reserva anulada aplica PENALIDAD de acuerdo con políticas de los proveedores",
      "Pasajeros que no viajen, entran en NO SHOW y no están sujetos a reembolso",
    ],
    included: ["Boleto aéreo UIO – MDE – PTY – UIO via Copa Airlines clase T"],
    notIncluded: [
      "Maleta de equipaje de 23KG",
      "Servicios no especificados en el programa",
    ],
    notes: [
      "Tarifas sujetas a cambio sin previo aviso",
      "Compra hasta agotar stock",
      "Incluye maleta de mano de 10KG",
      "Bono de $10 USD por pasajero adulto",
      "Reservas sujetas a disponibilidad del hotel",
      "Reservas no garantizan el precio estipulado sin abono a la misma",
      "No aplica feriados ni dias festivos",
      "Niños se consideran hasta los 11 años",
    ],
  },
];
