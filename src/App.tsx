import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Button} from "./components/Button";
import {Tablo} from "./components/tablo/Tablo";

function App() {
    const MAX_VALUE = 5
    const START_VALUE = 0
    const [num, setNum] = useState<number>(START_VALUE)

    useEffect(()=> {
        let valueAsString = localStorage.getItem('counterValue');
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString);
            setNum(valueAsNumber)
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem('counterValue', JSON.stringify(num));
    }, [num])



    const addNum = () => {
        if (num < MAX_VALUE) {
            setNum(num + 1)
        }
    }
    const resetNum = () => {
        setNum(START_VALUE)
    }

    return (
        <div className={s.App}>
            <div className={s.container}>
                <Tablo num={num}/>
                <div className={s.cont_button}>
                    <div className={s.cont_inc_reset}>
                        <Button name={'Inc'} callback={addNum} disabled={num === MAX_VALUE}/>
                        <Button name={'Reset'} callback={resetNum} disabled={num === START_VALUE}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;