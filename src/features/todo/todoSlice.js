import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    deleteTodo: (state, action) => {
      const updateTodo = state.todos.filter((t) => t.id !== action.payload);
      state.todos = updateTodo;
      localStorage.setItem("todos", JSON.stringify(updateTodo));
    },
    isEdit: (state, action) => {
      const updateTodo = state.todos.map((t) => {
        if (t.id === action.payload) {
          t.isEdit = !t.isEdit;
        }
        return t;
      });
      state.todos = updateTodo;
      localStorage.setItem("todos", JSON.stringify(updateTodo));
    },
    completeTodo: (state, action) => {
      const updateTodo = state.todos.map((t) => {
        if (t.id === action.payload) {
          t.isComplete = !t.isComplete;
        }
        return t;
      });
      state.todos = updateTodo;
      localStorage.setItem("todos", JSON.stringify(updateTodo));
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const updateTodo = state.todos.map((t) => {
        if (t.id === id) {
          t.text = text;
          t.isEdit = false;
        }
        return t;
      });
      state.todos = updateTodo;
      localStorage.setItem("todos", JSON.stringify(updateTodo));
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, isEdit, completeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer