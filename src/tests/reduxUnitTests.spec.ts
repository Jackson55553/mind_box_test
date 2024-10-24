// import { useAppDispatch, useAppStore } from "../store/hooks";
import {
  addTodo,
  deleteComplitedTodos,
  updateTodoStatus,
} from "../store/noteSlice";
import { store } from "../store/notesStore";

test("create store and init", () => {
  const state = store.getState().todos.todos;
  expect(state.length).toBe(3);
});
test("add todo", () => {
  const beforeState = store.getState().todos.todos;
  store.dispatch(addTodo("todo 4"));
  const afterState = store.getState().todos.todos;
  expect(afterState.length - beforeState.length).toBe(1);
});
test("update todo status", () => {
  const beforeState = store.getState().todos.todos;
  store.dispatch(updateTodoStatus(beforeState[0].id));
  const afterState = store.getState().todos.todos;
  expect(afterState[0].complited).toBe(!beforeState[0].complited);
});
test("delete complited todos", () => {
  store.dispatch(deleteComplitedTodos());
  const afterState = store.getState().todos.todos;
  expect(afterState.length).toBe(2);
});
