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

/** PDF order matches source filenames: F2 → types 1–3; F3.pdf + f3.1–f3.7 → types 1–8; f4 → type 1 */
export const apartmentPlanCategories: ApartmentPlanCategory[] = [
  {
    id: "f2",
    label: "F2",
    variants: [
      {
        type: 1,
        pdf: "/plans/f2-type-1.pdf",
        image3d: "/plans/3d/f2-type-1.png",
        sourceFile: "F2.pdf",
        image3dSourceFile: "f2-3",
      },
      {
        type: 2,
        pdf: "/plans/f2-type-2.pdf",
        image3d: "/plans/3d/f2-type-2.png",
        sourceFile: "F2_1.pdf",
        image3dSourceFile: "F2-1",
      },
      {
        type: 3,
        pdf: "/plans/f2-type-3.pdf",
        image3d: "/plans/3d/f2-type-3.png",
        sourceFile: "F2_2.pdf",
        image3dSourceFile: "f2-2",
      },
    ],
  },
  {
    id: "f3",
    label: "F3",
    variants: [
      {
        type: 1,
        pdf: "/plans/f3-type-1.pdf",
        image3d: "/plans/3d/f3-type-1.png",
        sourceFile: "F3.pdf",
        image3dSourceFile: "f3_entre_sol_3",
      },
      {
        type: 2,
        pdf: "/plans/f3-type-2.pdf",
        image3d: "/plans/3d/f3-type-2.png",
        sourceFile: "f3.1.pdf",
        image3dSourceFile: "f3_entre_sol_2_et_entre_sol_31__rdc___etage_1",
      },
      {
        type: 3,
        pdf: "/plans/f3-type-3.pdf",
        image3d: "/plans/3d/f3-type-3.png",
        sourceFile: "f3.2.pdf",
        image3dSourceFile: "RDC_F3-3",
      },
      { type: 4, pdf: "/plans/f3-type-4.pdf", sourceFile: "f3.3.pdf" },
      {
        type: 5,
        pdf: "/plans/f3-type-5.pdf",
        image3d: "/plans/3d/f3-type-5.png",
        sourceFile: "f3.4.pdf",
        image3dSourceFile: "Rdc_F3-4",
      },
      {
        type: 6,
        pdf: "/plans/f3-type-6.pdf",
        image3d: "/plans/3d/f3-type-6.png",
        sourceFile: "f3.5.pdf",
        image3dSourceFile: "f3_entre_sol_2_et_entre_sol_31__rdc___etage_1",
      },
      {
        type: 7,
        pdf: "/plans/f3-type-7.pdf",
        image3d: "/plans/3d/f3-type-7.png",
        sourceFile: "f3.6.pdf",
        image3dSourceFile: "f3_entre_sol_2_et_entre_sol_31__rdc___etage_1",
      },
      {
        type: 8,
        pdf: "/plans/f3-type-8.pdf",
        image3d: "/plans/3d/f3-type-8.png",
        sourceFile: "f3.7.pdf",
        image3dSourceFile: "E_tage_courant_bloc_D",
      },
    ],
  },
  {
    id: "f4",
    label: "F4",
    variants: [{ type: 1, pdf: "/plans/f4-type-1.pdf", sourceFile: "f4.pdf" }],
  },
];

export function getApartmentCategory(id: string): ApartmentPlanCategory | undefined {
  return apartmentPlanCategories.find((c) => c.id === id);
}

export function getPlanVariant(
  categoryId: ApartmentCategory,
  type: number,
): ApartmentPlanVariant | undefined {
  return getApartmentCategory(categoryId)?.variants.find((v) => v.type === type);
}
