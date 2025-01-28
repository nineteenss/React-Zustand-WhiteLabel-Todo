//
//    useTodoStore.ts
//    react-zustand-whitelabel-todo
//
//    Created by Sergey Smetannikov on 28.01.2025
//

import { create } from "zustand";

// Declaring Todo item interface
export interface Todo {
  id: Number; // Item unique ID
  text: String; // Item content text
  completed: Boolean; // Item status
}

// Declaring Todo's Store interface
interface TodoStore {
  todos: Todo[]; // Todo's list
  addTodo: (text: String) => void; // Add "To-do"
  toggleTodo: (id: Number) => void; // "To-do" toggle, i.e. mark as completed
  deleteTodo: (id: Number) => void; // Delete "To-do"
}

// Creating "Zustand" store
export const useTodoStore = create<TodoStore>((set) => ({
  todos: [], // Empty Todo's array by default
  addTodo: (text) =>
    set((state) => ({
      // Add new "To-do" into array
      // Id generates by the current date
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      // Toggle "To-do" completion (uncompleted/completed)
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      // Delete "To-do" from the array
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
