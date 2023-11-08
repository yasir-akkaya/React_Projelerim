import logo from './logo.svg';
import './App.css';
import { React, useState } from "react";


function ToDoList() {
    const [input, setInput] = useState("");
    const [toDoList, setTodoList] = useState([]);



    const addToDo = () => {
        if (input) {
            setTodoList([...toDoList, input]);
            setInput("");
        }
    };


    return (
        <div className="tdl">
            <h3>Görev Listesi: </h3>
            <div className="input-group mb-3">
                <input type="text" value={input} className="form-control" placeholder="Yeni Görev Ekle" onChange={(e) => setInput(e.target.value)} />
                <a href='#' onClick={addToDo} className="btn btn-primary" type="button">Ekle</a>
            </div>
            <div>
                <ul  className="list list-group">
                    {toDoList.map((item)=>(
                    <li className='list-group-item'>
                        {item}
                    </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}


export default ToDoList;