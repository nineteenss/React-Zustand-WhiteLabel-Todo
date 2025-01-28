//
//    useBrandStore.ts
//    react-zustand-whitelabel-todo
//
//    Created by Sergey Smetannikov on 28.01.2025
//

import { create } from "zustand";
import { brands, BrandKey } from "../config/brands";

// Declaring Brand Store interface
interface BrandStore {
  currentBrand: BrandKey; // Currently picked brand
  setBrand: (brand: BrandKey) => void; // Branding change function
  getBrandConfig: () => (typeof brands)[BrandKey]; // Current brand configuration getting function
}

// Creating Zustand store
export const useBrandStore = create<BrandStore>((set, get) => ({
  currentBrand: "default", // Using "default" brand type by default
  setBrand: (brand) => set({
    currentBrand: brand, // Setting current brand
  }),
  getBrandConfig: () => brands[get().currentBrand], // Return current brand configuration
}));
