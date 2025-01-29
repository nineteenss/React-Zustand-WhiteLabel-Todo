//
//    TodoItem.tsx
//    react-zustand-whitelabel-todo
//
//    Created by Sergey Smetannikov on 28.01.2025
//

import React from "react";
import { Todo } from "../stores/useTodoStore";
import { Button } from "./Buttons/Button";
import { IconCheckMarkToggle } from "./Icons/IconCheckMarkToggle";

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
    <li className="flex flex-row border-t mt-2 pt-2 justify-between">
      <div
        className={`mr-2 min-w-[193px] max-w-[193px] line-clamp-3 ${todo.completed ? "line-through opacity-50" : ""}`}
      >
        {todo.text}
      </div>
      <Button
        title={
          todo.completed ? (
            <IconCheckMarkToggle isToggled={false} />
          ) : (
            <IconCheckMarkToggle isToggled={true} />
          )
        }
        color="bg-transparent"
        func={() => onToggle(todo.id)}
      />
      <Button
        title="Delete"
        color="bg-red-400"
        func={() => onDelete(todo.id)}
      />
    </li>
  );
};
