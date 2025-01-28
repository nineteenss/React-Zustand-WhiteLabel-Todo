//
//    brands.ts
//    react-zustand-whitelabel-todo
//
//    Created by Sergey Smetannikov on 28.01.2025
//

// Default branding config
// Three different configurations - including default one
// if none were picked.

// As for the basic setup changing only colors and titles
export const brands = {
  a: {
    title: "Brand A", // Brand title
    primaryColor: "bg-gray-500", // Brand main color
  },
  b: {
    title: "Brand B",
    primaryColor: "bg-green-500",
  },
  c: {
    title: "Brand C",
    primaryColor: "bg-cyan-400",
  },
  default: {
    title: "Default Brand App",
    primaryColor: "bg-indigo-400",
  },
};

// Type for the brands keys i.e. "a", "b", "c", "default"
export type BrandKey = keyof typeof brands;
