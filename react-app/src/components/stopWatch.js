
import React, { useState } from "react";

export function StopWatch() {

    let [count, setCount] = useState(0);
    let [intervalId, setIntervalId] = useState(0);

    const startTimer = () => {
        if (!intervalId) {
            let intvl = setInterval(() => {
                setCount(count => count+1)
            }, 100);
            setIntervalId(intvl)
        }
    }

    const stopTimer = () => {
        if(intervalId) clearInterval(intervalId);
        setIntervalId(0);
    }

    const resetTimer= () =>{
        setCount(0);
    }



    return (
        <>
            <button onClick={startTimer} className="btn btn-success">Start</button>
            <button onClick={stopTimer} className="btn btn-danger">Stop</button>
            <button onClick={resetTimer} className="btn btn-warning">Reset</button>
            <h2>{count}</h2>
        </>
    )
}