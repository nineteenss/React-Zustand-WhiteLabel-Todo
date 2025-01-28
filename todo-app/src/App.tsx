//
//  App.js
//  react-zustand-whitelabel-todo
//
//  Created by Sergey Smetannikov on 28.01.2025
//

import React from "react";
import { BrandProvider } from "./components/BrandProvider";
import { TodoList } from "./components/TodoList";
import { useBrandStore } from "./stores/useBrandStore";

export const App: React.FC = () => {
  // Get the function in order to set the desired Brand
  const { setBrand } = useBrandStore();

  return (
    <BrandProvider>
      <div>
        <div>
          <button onClick={() => setBrand("a")}>Brand A</button>
          <button onClick={() => setBrand("b")}>Brand B</button>
          <button onClick={() => setBrand("c")}>Brand C</button>
          <button onClick={() => setBrand("default")}>Default</button>
        </div>
        <TodoList />
      </div>
    </BrandProvider>
  );
};
