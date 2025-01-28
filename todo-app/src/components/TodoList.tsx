//
//    TodoList.tsx
//    react-zustand-whitelabel-todo
//
//    Created by Sergey Smetannikov on 28.01.2025
//

import React, { useState } from "react";
import { useTodoStore } from "../stores/useTodoStore";
import { TodoItem } from "../components/TodoItem";

export const TodoList: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();
  const [newTodoText, setNewTodoText] = useState(""); // State for a new text

  const handleAddTodo = () => {
    if (newTodoText?.trim()) {
      addTodo(newTodoText); // Adding new "To-do" with text content
      setNewTodoText(""); // Reset input text field after completion
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add new task..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      {/* Todo's current list */}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
        <li></li>
      </ul>
    </div>
  );
};
