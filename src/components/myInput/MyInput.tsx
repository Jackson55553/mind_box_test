import React, { useRef, useState } from "react";
import "./myInput.css";
import { IoIosArrowDown } from "react-icons/io";
import { useAppDispatch } from "../../store/hooks";
import { addTodo } from "../../store/noteSlice";

export const MyInput = () => {
    const [value, setValue] = useState("");
    const timeout: React.MutableRefObject<number | undefined> =
        useRef<number>();
    const dispatch = useAppDispatch();

    const onchage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        timeout.current = setTimeout(() => {
            console.log(e.target.value);
        }, 500);
        setValue(e.target.value);
    };

    const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value) {
            dispatch(addTodo(value));
            setValue("");
        }
    };

    return (
        <form className="myInput__container" onSubmit={(e) => onsubmit(e)}>
            <IoIosArrowDown />
            <input
                className="myInput"
                placeholder="What needs to be done?"
                value={value}
                onChange={(e) => onchage(e)}
                type="text"
            />
        </form>
    );
};
