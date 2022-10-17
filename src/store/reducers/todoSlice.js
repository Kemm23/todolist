import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import storage from "../../Until/storage";

export const getTodos = createAsyncThunk("todos/todosFetch", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  return response.data;
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: state.todos.length + 1,
        title: action.payload,
        completed: false,
      });
    },
    deleteTodo(state, action) {
      state.todos.splice(action.payload, 1);
      state.todos.map((todo, index) => {
        todo.id = index + 1;
        return todo;
      });
    },
    isChecked(state, action) {
      state.todos.map((todo, index) => {
        if (index === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    editTodo(state, action) {
      state.todos.map((todo, index) => {
        if (index === action.payload.id) {
          todo.title = action.payload.newTitle;
        }
        return todo;
      });
    },
    clearCompleted(state, action) {
      let i = 0;
      while (i < state.todos.length) {
        if (state.todos[i].completed) {
          state.todos.splice(i, 1);
          continue;
        }
        i++;
      }
      state.todos.map((todo, index) => {
        todo.id = index + 1;
        return todo;
      });
    },
    markAllCompleted(state, action) {
      state.todos.map((todo) => {
        if (!todo.completed) todo.completed = true;
        return todo;
      });
    },
  },
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      console.log("dang cho");
    },
    [getTodos.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: action.payload,
      };
    },
    [getTodos.rejected]: (state, action) => {
      console.log("da faill");
    },
  },
});

const { actions, reducer } = todoSlice;
export const {
  addTodo,
  deleteTodo,
  isChecked,
  editTodo,
  clearCompleted,
  markAllCompleted,
} = actions;
const todoReducer = reducer;
export default todoReducer;
