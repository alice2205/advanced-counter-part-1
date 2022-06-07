import React from "react";
import s from './Button.module.css'

type ButtonType = {
    name: string
    disabled?:boolean
    callback: () => void
}

export const Button = (props: ButtonType) => {
    const callbackHandler = () => {
        props.callback()
    }

    return(
        <button onClick={callbackHandler} className={s.button} disabled={props.disabled}>{props.name}</button>
    )
}
