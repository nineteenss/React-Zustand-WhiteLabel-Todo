//
//    TodoList.tsx
//    react-zustand-whitelabel-todo
//
//    Created by Sergey Smetannikov on 28.01.2025
//

import React, { useState } from "react";
import { useTodoStore } from "../stores/useTodoStore";
import { TodoItem } from "../components/TodoItem";
import { InputInline } from "./Inputs/InputInline";
import { Button } from "./Buttons/Button";

export const TodoList: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();
  const [newTodoText, setNewTodoText] = useState(""); // State for a new text

  const handleAddTodo = () => {
    if (newTodoText?.trim()) {
      addTodo(newTodoText); // Adding new "To-do" with text content
      setNewTodoText(""); // Reset input text field after completion
    }
  };

  const handleEnterAddTodo = (event: { key: string }) => {
    // On key press "Enter" send "To-do" item to an array
    if (event.key === "Enter") {
      // Call for Add new "To-do" handler
      handleAddTodo();
    }
  };

  return (
    <div>
      <div className="mt-2 flex flex-row gap-x-2 justify-between">
        <InputInline
          value={newTodoText}
          func={(e) => setNewTodoText(e.target.value)}
          funcB={handleEnterAddTodo}
          placeholder="Enter your task for today"
        />
        <Button title="Add" func={handleAddTodo} color="bg-yellow-500" />
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};
