

import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import {
  TodoState,
  Todo,
} from "@/types";

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",

  initialState,

  reducers: {
    setTodos: (
      state,
      action: PayloadAction<Todo[]>
    ) => {
      state.todos = action.payload;
    },

    addTodo: (
      state,
      action: PayloadAction<Todo>
    ) => {
      state.todos.unshift(action.payload);
    },

    updateTodo: (
      state,
      action: PayloadAction<Todo>
    ) => {
      state.todos = state.todos.map(
        (todo) =>
          todo.id === action.payload.id
            ? action.payload
            : todo
      );
    },

    deleteTodo: (
      state,
      action: PayloadAction<number>
    ) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    setLoading: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.loading = action.payload;
    },

    setError: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.error = action.payload;
    },
  },
});

export const {
  setTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  setLoading,
  setError,
} = todoSlice.actions;

export default todoSlice.reducer;