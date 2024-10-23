import "./todo.css";
import MyCheckbox from "../myCheckbox/MyCheckbox";
export type TodoProps = {
    id: number | string;
    body: string;
    complited: boolean;
};

const Todo = ({ id, body, complited }: TodoProps) => {
    return (
        <div className="todo__container">
            <MyCheckbox id={id} complited={complited} />
            <div className={`todo__text ${complited ? "complited" : ""}`}>
                {body}
            </div>
        </div>
    );
};

export default Todo;
