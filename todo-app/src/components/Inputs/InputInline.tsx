//
//    InputInline.tsx
//    react-zustand-whitelabel-todo
//
//    Created by Sergey Smetannikov on 28.01.2025
//

import React from "react";

interface InputDefaults {
  value?: string;
  placeholder?: string;
  func: (e: any) => void;
  funcB?: (event: { key: string }) => void;
}

export const InputInline: React.FC<InputDefaults> = (props) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.func}
      onKeyUp={props.funcB}
      placeholder={props.placeholder}
      className="bg-white px-3 py-1 w-full rounded-md"
    />
  );
};
