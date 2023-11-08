import logo from './logo.svg';
import './App.css';
import { React, useState } from "react";



function Counter() {
    const [count, setCounter] = useState(0);
    const increase = () => {
        setCounter(count + 1);
    };
    const decrease = () => {
        setCounter(count - 1);
    };
    if (count<0) {
        setCounter(0);
    };
    if (count>10) {
        setCounter(10);
    };
    return (
        <div className="cnt">
            <h3>Count: <span>{count}</span></h3>
            <a href="#" className="btn btn-primary ms-2" onClick={increase}>Arttır</a>
            <a href="#" className="btn btn-danger ms-2" onClick={decrease}>Azalt</a>
        </div>
    );
}


export default Counter;
