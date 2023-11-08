import logo from './logo.svg';
import './App.css';
import { React, useState } from "react";


function AddProduct() {
    const [headerInput, setHeaderInput] = useState("");
    const [textInput, setTextInput] = useState("");
    const [productList, setProductList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);



    const ProductFunction = () => {
        if (headerInput && textInput) {
            if (editIndex !== null) {
                const updatedTasks = [...productList];
                updatedTasks[editIndex] = { headerInput, textInput };
                setProductList(updatedTasks);
                setEditIndex(null);
            }

            else {
                setProductList([...productList, { headerInput, textInput }]);

            }
            setHeaderInput("");
            setTextInput("");

        }
    };
    const EditFunction = (index) => {
        setEditIndex(index);
        const taskToEdit = productList[index];
        setHeaderInput(taskToEdit.headerInput);
        setTextInput(taskToEdit.textInput);
    };







    return (
        <div className="tdl">
            <h3>Ürün Listesi: </h3>
            <div className="input-group mb-3">
                <input type="text" value={headerInput} className="form-control" placeholder="Ürün Başlığı" onChange={(e) => setHeaderInput(e.target.value)} />
                <input type="text" value={textInput} className="form-control" placeholder="Ürün Açıklaması" onChange={(e) => setTextInput(e.target.value)} />
                <a href='#' onClick={ProductFunction} className="btn btn-success" type="button">Ürün Ekle</a>
            </div>
            <div>
                <ul className="list list-group">
                    {productList.map((product, index) => (
                        <li className='list-group-item' key={index}>
                            <h5>{product.headerInput}</h5>
                            <p>{product.textInput}</p>
                            <a href='#' onClick={() => EditFunction(index)} className="btn btn-warning ms-2" type="button">Ürün Düzenle</a>
                            <a href='#' onClick={() => setProductList(productList.filter((item) => item != product))} className="btn btn-danger ms-2" type="button">Ürün Sil</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}


export default AddProduct;
