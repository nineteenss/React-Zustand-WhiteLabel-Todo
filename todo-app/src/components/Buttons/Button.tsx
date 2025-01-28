//
//    Button.tsx
//    react-zustand-whitelabel-todo
//
//    Created by Sergey Smetannikov on 28.01.2025
//

import React from "react";

interface ButtonDefaults {
  title: string;
  color?: string;
  func: () => void;
}

export const Button: React.FC<ButtonDefaults> = (props) => {
  return (
    <button
      className={`
        ${props.color ? props.color : "bg-white"}
        px-3
        py-1
        rounded-md
        font-medium 
        hover:cursor-pointer 
        hover:bg-amber-200 
        self-start 
        transition-colors 
        duration-100
      `}
      onClick={props.func}
    >
      {props.title}
    </button>
  );
};
