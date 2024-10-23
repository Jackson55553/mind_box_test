import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./notesStore";
import uuid from "react-uuid";

export interface Todo {
    id: number | string;
    body: string;
    complited: boolean;
}

export enum TodosCollection {
    ALL = "all",
    ACTIVE = "active",
    COMPLITED = "complited",
}

export interface TodosState {
    todos: Array<Todo>;
    todosCollection: TodosCollection;
}

const getInitialState = () => {
    const localStore = JSON.parse(localStorage.getItem("localTodos") || "[]");
    if (localStore.length) {
        const localTodos = localStore;
        return localTodos;
    }
    return [{ id: 1, body: "todo 1", complited: false }];
};

const initialState = {
    todos: getInitialState(),
    todosCollection: TodosCollection.ALL,
} as TodosState;

export const todosSlice = createSlice({
    name: "todosSlice",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({
                id: uuid(),
                body: action.payload,
                complited: false,
            });
            localStorage.setItem("localTodos", JSON.stringify(state.todos));
        },
        deleteTodo: (state, action: PayloadAction<Todo>) => {
            state.todos = state.todos.filter(
                (todo) => action.payload.id !== todo.id
            );
            localStorage.setItem("localTodos", JSON.stringify(state.todos));
        },
        updateTodoStatus: (state, action: PayloadAction<number | string>) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, complited: !todo.complited };
                }
                return todo;
            });
            localStorage.setItem("localTodos", JSON.stringify(state.todos));
        },
        changeCollectionTodos: (
            state,
            action: PayloadAction<TodosCollection>
        ) => {
            state.todosCollection = action.payload;
        },
        deleteComplitedTodos: (state) => {
            state.todos = state.todos.filter((todo) => !todo.complited);
            localStorage.setItem("localTodos", JSON.stringify(state.todos));
        },
    },
});

export const {
    addTodo,
    deleteTodo,
    updateTodoStatus,
    changeCollectionTodos,
    deleteComplitedTodos,
} = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todosSlice.reducer;
