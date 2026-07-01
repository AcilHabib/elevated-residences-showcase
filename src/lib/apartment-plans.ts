export type ApartmentCategory = "f2" | "f3" | "f4";

export type ApartmentPlanVariant = {
  type: number;
  pdf: string;
  image3d?: string;
  sourceFile: string;
  image3dSourceFile?: string;
};

export type ApartmentPlanCategory = {
  id: ApartmentCategory;
  label: string;
  variants: ApartmentPlanVariant[];
};

/** Plan files live under /public/plans — 2D (pdf field) and optional /plans/3d/ image */
export const apartmentPlanCategories: ApartmentPlanCategory[] = [
  {
    id: "f2",
    label: "F2",
    variants: [
      {
        type: 1,
        pdf: "/plans/f2-type-1.jpeg",
        image3d: "/plans/3d/f2-type-1.jpeg",
        sourceFile: "f2-type-1.jpeg",
        image3dSourceFile: "f2-3",
      },
      {
        type: 2,
        pdf: "/plans/f2-type-2.jpeg",
        image3d: "/plans/3d/f2-type-2.jpeg",
        sourceFile: "f2-type-2.jpeg",
        image3dSourceFile: "F2-1",
      },
      {
        type: 3,
        pdf: "/plans/f2-type-3.jpeg",
        image3d: "/plans/3d/f2-type-3.jpeg",
        sourceFile: "f2-type-3.jpeg",
        image3dSourceFile: "f2-2",
      },
      {
        type: 4,
        pdf: "/plans/f2-type-4.jpeg",
        image3d: "/plans/3d/f2-type-4.jpeg",
        sourceFile: "f2-type-4.jpeg",
      },
    ],
  },
  {
    id: "f3",
    label: "F3",
    variants: [
      {
        type: 1,
        pdf: "/plans/f3-type-1.jpeg",
        image3d: "/plans/3d/f3-type-1.png",
        sourceFile: "f3-type-1.jpeg",
        image3dSourceFile: "f3_entre_sol_3",
      },
      {
        type: 2,
        pdf: "/plans/f3-type-2.jpeg",
        image3d: "/plans/3d/f3-type-2.png",
        sourceFile: "f3-type-2.jpeg",
        image3dSourceFile: "f3_entre_sol_2_et_entre_sol_31__rdc___etage_1",
      },
      {
        type: 3,
        pdf: "/plans/f3-type-3.jpeg",
        image3d: "/plans/3d/f3-type-3.png",
        sourceFile: "f3-type-3.jpeg",
        image3dSourceFile: "RDC_F3-3",
      },
      {
        type: 4,
        pdf: "/plans/f3-type-4.jpg",
        image3d: "/plans/3d/f3-type-4.jpg",
        sourceFile: "f3-type-4.jpg",
      },
      {
        type: 5,
        pdf: "/plans/f3-type-5.jpg",
        image3d: "/plans/3d/f3-type-5.png",
        sourceFile: "f3-type-5.jpg",
        image3dSourceFile: "Rdc_F3-4",
      },
      {
        type: 6,
        pdf: "/plans/f3-type-6.jpeg",
        image3d: "/plans/3d/f3-type-6.jpg",
        sourceFile: "f3-type-6.jpeg",
        image3dSourceFile: "f3_entre_sol_2_et_entre_sol_31__rdc___etage_1",
      },
      {
        type: 7,
        pdf: "/plans/f3-type-7.jpeg",
        image3d: "/plans/3d/f3-type-7.png",
        sourceFile: "f3-type-7.jpeg",
        image3dSourceFile: "E_tage_courant_bloc_D",
      },
    ],
  },
  {
    id: "f4",
    label: "F4",
    variants: [
      {
        type: 1,
        pdf: "/plans/f4-type-1.jpeg",
        image3d: "/plans/3d/f4-type-1.jpeg",
        sourceFile: "f4-type-1.jpeg",
      },
    ],
  },
];

export function isPlanImageFile(path: string) {
  return /\.(jpe?g|png|webp)$/i.test(path);
}

export function getApartmentCategory(id: string): ApartmentPlanCategory | undefined {
  return apartmentPlanCategories.find((c) => c.id === id);
}

export function getPlanVariant(
  categoryId: ApartmentCategory,
  type: number,
): ApartmentPlanVariant | undefined {
  return getApartmentCategory(categoryId)?.variants.find((v) => v.type === type);
}
