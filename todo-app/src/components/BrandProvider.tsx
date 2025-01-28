//
//    BrandProvider.tsx
//    react-zustand-whitelabel-todo
//
//    Created by Sergey Smetannikov on 28.01.2025
//

import React from "react";
import { useBrandStore } from "../stores/useBrandStore";

interface BrandProviderProps {
  children: React.ReactNode; // Component's child elements
}

export const BrandProvider: React.FC<BrandProviderProps> = ({ children }) => {
  // Getting the function in order to get brand configuration
  const { getBrandConfig } = useBrandStore();
  const brandConfig = getBrandConfig(); // Current brand configuration

  return (
    // Append current Brand styling
    <div className={`${brandConfig.primaryColor}`}>
      {/* prettier-ignore */}
      {children}
    </div>
  );
};
