import logo from './logo.svg';
import './App.css';
import { React, useState } from "react";


function CrudListing() {
    const [titleInput, setTitleInput] = useState("");
    const [textInput, setTextInput] = useState("");
    const [blogList, setBlogList] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const ProductFunction = () => {
        //Title ve Text boş değilse koşulu
        if (titleInput && textInput) {
            //edit işlemindeki durumu belirtir
            if (editingIndex !== null) {
                const updatedTasks = [...blogList];
                updatedTasks[editingIndex] = { titleInput, textInput };
                setBlogList(updatedTasks);
                setEditingIndex(null);
            }

            //normal ekleme işlemi yapılır
            else {
                setBlogList([...blogList, { titleInput, textInput }]);

            }
            setTitleInput("");
            setTextInput("");

        }
    };
    //edit fonksiyonu:
    const EditFunction = (index) => {
        setEditingIndex(index);
        const taskToEdit = blogList[index];
        setTitleInput(taskToEdit.titleInput);
        setTextInput(taskToEdit.textInput);
    };
    
    return (
        <div className="blogs">
            <h3>Blog Listesi: </h3>
            <div className="form-group mx-sm-2 p-3 border border-dark rounded">
                <input type="text" value={titleInput} className="form-control mb-3" placeholder="Blog Başlığı" onChange={(e) => setTitleInput(e.target.value)} />
                <textarea value={textInput} className="form-control mb-3" placeholder="Blog Yazısı" rows="8" onChange={(e) => setTextInput(e.target.value)} />
                <a href='#' onClick={ProductFunction} className="btn btn-success" type="button">Blog Yazısı Ekle</a>
            </div>
            <div className='rounded mt-3'>
                <ul className="list list-group">
                    {blogList.map((blog, index) => (
                        <li className='list-group-item' key={index}>
                            <h3>{blog.titleInput}</h3>
                            <p>{blog.textInput}</p>
                            <a href='#' onClick={() => EditFunction(index)} className="btn btn-warning ms-2" type="button">Blog Düzenle</a>
                            <a href='#' onClick={() => setBlogList(blogList.filter((item) => item != blog))} className="btn btn-danger ms-2" type="button">Blog Sil</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}


export default CrudListing;