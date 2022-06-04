import React, {useState} from 'react';
import s from './App.module.css';
import {Button} from "./components/Button";
import {Tablo} from "./components/tablo/Tablo";

function App() {
    const MAX_VALUE = 5
    const START_VALUE = 0
    const [num, setNum] = useState<number>(START_VALUE)

    const addNum = () => {
        if (num < MAX_VALUE) {
            setNum(num + 1)
        }
    }
    const resetNum = () => {
        setNum(START_VALUE)
    }

    const SetToLocalStorage = () => {
        localStorage.setItem('counterValue', JSON.stringify(num))
    }

    const GetFromLocalStorage = () => {
        let valueAsString = localStorage.getItem('counterValue');
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString);
            setNum(valueAsNumber)
        }
    }

    const ClearLocalStorage = () => {
        localStorage.clear();
        setNum(0)
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

                    <Button name={'Set to local storage'} callback={SetToLocalStorage}/>
                    <Button name={'Get from local storage'} callback={GetFromLocalStorage}/>
                    <Button name={'Clear local storage'} callback={ClearLocalStorage}/>
                </div>
            </div>
        </div>
    );
}

export default App;