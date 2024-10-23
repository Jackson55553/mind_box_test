import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
    changeCollectionTodos,
    deleteComplitedTodos,
    TodosCollection,
} from "../../store/noteSlice";
import "./controlMenu.css";
const ControlMenu = () => {
    const todos = useAppSelector((state) => state.todos.todos);
    const dispatch = useAppDispatch();

    return (
        <div className="controlMenu__container">
            <p className="itemsCount">{`${todos.length} items left`}</p>
            <div className="controlMenu__btn_container">
                <button
                    className="controlMenu__btn"
                    type="button"
                    onClick={() =>
                        dispatch(changeCollectionTodos(TodosCollection.ALL))
                    }
                >
                    {"All"}
                </button>
                <button
                    className="controlMenu__btn"
                    type="button"
                    onClick={() =>
                        dispatch(changeCollectionTodos(TodosCollection.ACTIVE))
                    }
                >
                    {"Active"}
                </button>
                <button
                    className="controlMenu__btn"
                    type="button"
                    onClick={() =>
                        dispatch(
                            changeCollectionTodos(TodosCollection.COMPLITED)
                        )
                    }
                >
                    {"Complited"}
                </button>
            </div>
            <button
                className="controlMenu__btn"
                type="button"
                onClick={() => {
                    dispatch(deleteComplitedTodos());
                    dispatch(changeCollectionTodos(TodosCollection.ALL));
                }}
            >
                {"Clear complited"}
            </button>
        </div>
    );
};

export default ControlMenu;
