import React from "react";
import s from './Button.module.css'

type ButtonType = {
    name: string
    disabled:boolean
    callback: ()=>void
}

export const Button = (props: ButtonType) => {

    return (
        <div>
            <button
               className={s.button} onClick={props.callback} disabled={props.disabled}> {props.name}</button>
        </div>
    );
}
