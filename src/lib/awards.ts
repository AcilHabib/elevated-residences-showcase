export type AwardImage = {
  src: string;
  alt: string;
  caption?: string;
};

export const awardImages: AwardImage[] = [
  {
    src: "/images/awards/trophy.jpg",
    alt: "Trophée 3ème Meilleur Stand — Salon du Promoteur Immobilier à Béjaïa, 8ème édition",
    caption: "Trophée officiel",
  },
  {
    src: "/images/awards/certificate.jpg",
    alt: "Attestation de participation — 8ème édition du Salon du Promoteur Immobilier à Béjaïa",
    caption: "Attestation officielle",
  },
  {
    src: "/images/awards/team-award.jpg",
    alt: "L'équipe Promotion Benchallal A. Halim recevant la récompense",
    caption: "Remise du prix",
  },
  {
    src: "/images/awards/stand.jpg",
    alt: "Stand P.B.A au Salon du Promoteur Immobilier à Béjaïa",
    caption: "Notre stand au salon",
  },
];
