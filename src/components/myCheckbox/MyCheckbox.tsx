import { AiOutlineCheck } from "react-icons/ai";
import "./mycheckbox.css";
import { useState } from "react";
import { updateTodoStatus } from "../../store/noteSlice";
import { useAppDispatch } from "../../store/hooks";

type CheckboxProps = {
    id: number | string;
    complited: boolean;
};

const MyCheckbox = ({ id, complited }: CheckboxProps) => {
    const [checked, setChecked] = useState<boolean>(complited);
    const dispatch = useAppDispatch();
    return (
        <div
            className={`checkbox__container ${checked ? "checked" : ""}`}
            onClick={() => {
                setChecked(!checked);
                dispatch(updateTodoStatus(id));
            }}
        >
            <AiOutlineCheck
                color={checked ? "green" : "white"}
                visibility={checked ? 1 : 0}
            />
        </div>
    );
};

export default MyCheckbox;
