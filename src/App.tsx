import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {Button} from "./components/Button";
import {Tablo} from "./components/tablo/Tablo";
import {Input} from "./components/input/Input";
import {Error} from "./components/Error";

function App() {
    let [minNum, setMinNum] = useState<number>(0)
    let [maxNum, setMaxNum] = useState<number>(0)

    let [num, setNum] = useState<number>(0)
    let [error, setError] = useState<boolean>(false)

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

    useEffect(()=> {
        let minNumAsString = localStorage.getItem('minValue');
        if (minNumAsString) {
            let minNumAsNumber = JSON.parse(minNumAsString);
            setMinNum(minNumAsNumber)
        }
    }, [])
    useEffect(()=> {
        localStorage.setItem('minValue', JSON.stringify(minNum))
    }, [minNum])

    useEffect(()=> {
        let maxNumAsString = localStorage.getItem('minValue');
        if (maxNumAsString) {
            let maxNumAsNumber = JSON.parse(maxNumAsString);
            setMaxNum(maxNumAsNumber)
        }
    }, [])
    useEffect(()=> {
        localStorage.setItem('maxValue', JSON.stringify(maxNum))
    }, [maxNum])

    const setValue = () => {
        if(minNum<maxNum && minNum>0 && maxNum>0) {
            setError(false)
            setNum(minNum);
        } else {
            setError(true)
        }
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
        if(+e.currentTarget.value<0){
            setError(!error)
        } else if(+e.currentTarget.value>0){
            setMaxNum(+e.currentTarget.value)
        }
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        if(+e.currentTarget.value<0){
            setError(!error)
        } else if(+e.currentTarget.value>0){
            setMinNum(+e.currentTarget.value)
        }
    }

    return (
        <div className={s.App}>
            <div className={s.container}>
                <div className={s.input_block}>
                    <div className={s.text_input}>Max Value</div>
                    <Input num={maxNum} onChangeCallback={onChangeMaxValue}/>
                </div>
                <div className={s.input_block}>
                    <div className={s.text_input}>Min Value</div>
                    <Input num={minNum} onChangeCallback={onChangeMinValue}/>
                </div>
                <div className={s.cont_button}>
                    <div className={s.cont_inc_reset}>
                        <Button name={'Set'} callback={setValue} disabled={minNum < 0}/>
                    </div>
                </div>
            </div>
            <div className={s.container}>
                {error
                    ? 'Incorrect values'
                    : <Tablo num={num} maxNum={maxNum}/>
                }
                <div className={s.cont_button}>
                    <div className={s.cont_inc_reset}>
                        <Button name={'Inc'} callback={addNum} disabled={num===maxNum}/>
                        <Button name={'Reset'} callback={resetNum} disabled={num < minNum || num < 0} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;