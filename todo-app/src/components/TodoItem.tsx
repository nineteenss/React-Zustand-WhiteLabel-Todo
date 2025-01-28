//
//    TodoItem.tsx
//    react-zustand-whitelabel-todo
//
//    Created by Sergey Smetannikov on 28.01.2025
//

import React from "react";
import { Todo } from "../stores/useTodoStore";
import { Button } from "./Buttons/Button";

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
    <li className="flex flex-row">
      <span>{todo.text}</span>
      <Button title="Toggle" func={() => onToggle(todo.id)} />
      <Button title="Delete" func={() => onDelete(todo.id)} />
    </li>
  );
};
