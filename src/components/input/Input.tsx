import React, {ChangeEvent} from "react";
import s from './Input.module.css'

type InputType = {
    onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
    num: number
}

export const Input = (props: InputType) => {
    return (
        <input type={"number"} className={s.input} onChange={props.onChangeCallback} value={props.num} ></input>
    );
}