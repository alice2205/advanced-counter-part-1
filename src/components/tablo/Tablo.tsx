import React from "react";
import s from './Tablo.module.css'

type TabloType = {
    num: number
    maxNum: number
}

export const Tablo = (props: TabloType) => {
    return (
        <div className={s.window}>
            <div className={props.num===props.maxNum? s.stop : ''}>
                {props.num}
            </div>
        </div>

    );
}