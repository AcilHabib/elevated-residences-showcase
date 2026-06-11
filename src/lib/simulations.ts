export type SimulationImage = {
  src: string;
  alt: string;
  title?: string;
};

export const simulationImages: SimulationImage[] = [
  {
    src: "/images/simulations/01.jpg",
    alt: "Vue nocturne de la résidence P.B.A à Béjaïa",
    title: "Vue nocturne",
  },
  {
    src: "/images/simulations/02.jpg",
    alt: "Résidence illuminée sous un ciel étoilé",
    title: "Ciel étoilé",
  },
  {
    src: "/images/simulations/03.jpg",
    alt: "Façade de la résidence en journée",
    title: "Façade principale",
  },
  {
    src: "/images/simulations/04.jpg",
    alt: "Vue aérienne du complexe résidentiel",
    title: "Vue aérienne",
  },
  {
    src: "/images/simulations/05.jpg",
    alt: "Résidence avec commerces de proximité",
    title: "Commerces intégrés",
  },
  {
    src: "/images/simulations/06.jpg",
    alt: "Entrée paysagée de la résidence",
    title: "Entrée paysagère",
  },
  {
    src: "/images/simulations/07.jpg",
    alt: "Architecture contemporaine de la résidence",
    title: "Architecture",
  },
  {
    src: "/images/simulations/08.jpg",
    alt: "Vue d'ensemble avec piscines et espaces verts",
    title: "Espaces communs",
  },
  {
    src: "/images/simulations/09.jpg",
    alt: "Complexe résidentiel au crépuscule",
    title: "Crépuscule",
  },
  {
    src: "/images/simulations/10.jpg",
    alt: "Portail et entrée sécurisée de la résidence",
    title: "Entrée sécurisée",
  },
  {
    src: "/images/simulations/11.jpg",
    alt: "Piscines et terrasses face à la mer",
    title: "Piscines & mer",
  },
  {
    src: "/images/simulations/12.jpg",
    alt: "Aménagements extérieurs et aires de jeux",
    title: "Aménagements",
  },
  {
    src: "/images/simulations/13.jpg",
    alt: "Vue panoramique du quartier résidentiel",
    title: "Panorama",
  },
  {
    src: "/images/simulations/14.jpg",
    alt: "Perspective de rue de la résidence",
    title: "Perspective urbaine",
  },
];

/** Curated subsets for inner pages */
export const residenceGallery = simulationImages.filter((_, i) =>
  [0, 2, 3, 6, 7, 8, 12].includes(i),
);
export const locationGallery = simulationImages.filter((_, i) => [3, 4, 8, 11, 13].includes(i));
