//
//  App.js
//  react-zustand-whitelabel-todo
//
//  Created by Sergey Smetannikov on 28.01.2025
//

import React from "react";
import { Button } from "./components/Buttons/Button";
import { BrandProvider } from "./components/BrandProvider";
import { TodoList } from "./components/TodoList";
import { useBrandStore } from "./stores/useBrandStore";

export const App: React.FC = () => {
  // Get the function in order to set the desired Brand
  const { setBrand, getBrandConfig } = useBrandStore();
  // Getting the function in order to get brand configuration
  const brandConfig = getBrandConfig(); // Current brand configuration

  return (
    <BrandProvider>
      <div className="flex flex-col max-w-sm">
        <h1 className="font-bold text-3xl mb-3">{brandConfig.title}</h1>
        <div className="flex flex-row gap-2">
          <Button title="Brand A" func={() => setBrand("a")} />
          <Button title="Brand B" func={() => setBrand("b")} />
          <Button title="Brand C" func={() => setBrand("c")} />
          <Button title="Default" func={() => setBrand("default")} />
        </div>
        <TodoList />
      </div>
    </BrandProvider>
  );
};
