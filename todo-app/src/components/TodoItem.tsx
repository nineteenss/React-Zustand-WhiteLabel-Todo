//
//    TodoItem.tsx
//    react-zustand-whitelabel-todo
//
//    Created by Sergey Smetannikov on 28.01.2025
//

import React from "react";
import { Todo } from "../stores/useTodoStore";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  return (
    <li>
      <span>Todo text item</span>
      <button onClick={() => onToggle(todo.id)}>Toggle</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};
