import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {Button} from "./components/Button";
import {Tablo} from "./components/tablo/Tablo";
import {Input} from "./components/input/Input";

function App() {
    let [minNum, setMinNum] = useState<number>(0)
    let [maxNum, setMaxNum] = useState<number>(0)

    let [num, setNum] = useState<number>(0)

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

    const setValue = () => {
        num = minNum;
        setNum(num);
        setMaxNum(maxNum)
        console.log(maxNum)
        console.log(num)
    }

    const addNum = () => {
        if (num < maxNum) {
            setNum(num + 1)
        }
    }

    const resetNum = () => {
        setNum(minNum)
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxNum(+e.currentTarget.value)
    }

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinNum(+e.currentTarget.value)
    }

    return (
        <div className={s.App}>
            <div className={s.container}>
                <div className={s.input_block}>
                    <div className={s.text_input}>Max Value</div>
                    <Input onChangeCallback={onChangeMaxValue}/>
                </div>
                <div className={s.input_block}>
                    <div className={s.text_input}>Min Value</div>
                    <Input onChangeCallback={onChangeMinValue}/>
                </div>
                <div className={s.cont_button}>
                    <div className={s.cont_inc_reset}>
                        <Button name={'Set'} callback={setValue} disabled={minNum === 0}/>
                    </div>
                </div>
            </div>
            <div className={s.container}>
                <Tablo num={num}/>
                <div className={s.cont_button}>
                    <div className={s.cont_inc_reset}>
                        <Button name={'Inc'} callback={addNum}/>
                        <Button name={'Reset'} callback={resetNum} disabled={num === maxNum} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;