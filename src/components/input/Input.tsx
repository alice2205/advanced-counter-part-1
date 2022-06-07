import React, {ChangeEvent} from "react";
import s from './Input.module.css'

type InputType = {
    onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputType) => {
    return (
        <input className={s.input} onChange={props.onChangeCallback} ></input>
    );
}