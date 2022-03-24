import React, {useState} from 'react';
import s from './App.module.css';
import {Button} from "./components/Button";
import {Tablo} from "./components/tablo/Tablo";

function App() {
        const MAX_VALUE = 5
        const START_VALUE = 0
        const [num, setNum] = useState <number>(START_VALUE)

        const addNum = () => {
            if (num < MAX_VALUE) {
                setNum(num+1)
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
                <Button name={'inc'} callback={addNum} disabled={num ===  MAX_VALUE}/>
                <Button name={'reset'} callback={resetNum} disabled={num === START_VALUE}/>
            </div>
        </div>
    </div>
  );
}

export default App;
