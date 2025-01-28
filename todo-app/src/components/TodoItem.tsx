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
    <li className="flex flex-row border-t mt-2 pt-2">
      <div
        className={`mr-2 max-w-[193px] line-clamp-3 ${todo.completed ? "line-through opacity-50" : ""}`}
      >
        {todo.text}
      </div>
      <Button title="Toggle" func={() => onToggle(todo.id)} />
      <Button title="Delete" func={() => onDelete(todo.id)} />
    </li>
  );
};
