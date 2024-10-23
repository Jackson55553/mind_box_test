import "./App.css";
import { MyInput } from "./components/myInput/MyInput";
import Todo, { TodoProps } from "./components/todo/Todo";
import { useAppSelector } from "./store/hooks";
import ControlMenu from "./components/ControlMenu/ControlMenu";
import { TodosCollection, TodosState } from "./store/noteSlice";

const getTodos = ({ todos, todosCollection: todosColection }: TodosState) => {
    switch (todosColection) {
        case TodosCollection.ALL:
            return todos.map((todo: TodoProps) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    body={todo.body}
                    complited={todo.complited}
                />
            ));
        case TodosCollection.ACTIVE:
            return todos.map((todo: TodoProps) => {
                if (!todo.complited) {
                    return (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            body={todo.body}
                            complited={todo.complited}
                        />
                    );
                }
            });
        case TodosCollection.COMPLITED:
            return todos.map((todo: TodoProps) => {
                if (todo.complited) {
                    return (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            body={todo.body}
                            complited={todo.complited}
                        />
                    );
                }
            });

        default:
            break;
    }
};

function App() {
    const todos = useAppSelector((state) => state.todos);
    return (
        <>
            <div className="container">
                <h1>{"todos"}</h1>
                <MyInput />
                {getTodos(todos)}
                <ControlMenu />
            </div>
        </>
    );
}

export default App;
