import React from "react";
import s from './Tablo.module.css'

type TabloType = {
    num: number
}

export const Tablo = (props: TabloType) => {
    return (
        <div className={s.window}>
            <div className={props.num===5? s.stop : ''}>
                {props.num}
            </div>
        </div>

    );
}