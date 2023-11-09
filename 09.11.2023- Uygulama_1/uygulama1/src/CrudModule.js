import { useState } from "react";

function CrudModule() {
    const [header, setHeader] = useState("");
    const [text, setText] = useState("");
    const [imageList, setImageList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [image, setImage] = useState("");
    const [mode, setMode] = useState("Görsel Ekle");
    const [buttonClass, setButtonClass] = useState("btn btn-success d-flex");
    const [boxClass, setBoxClass] = useState("list-group-item border border-black");


    const ImageFunction = () => {
        if (header && text && image) {
            if (editIndex !== null) {
                const updatedImage = [...imageList];
                updatedImage[editIndex] = { header, text, image };
                setImageList(updatedImage);
                setEditIndex(null);
            } else {
                setImageList([...imageList, { header, text, image }]);
            }
            setHeader("");
            setText("");
            setMode("Görsel Ekle");
            setButtonClass("btn btn-success d-flex")
            setImage("");
            setBoxClass("list-group-item border border-black");

        }
    };
    const EditFunction = (index) => {
        setEditIndex(index);
        const imageToEdit = imageList[index];
        setHeader(imageToEdit.header);
        setText(imageToEdit.text);
        setImage(imageToEdit.image);
        setBoxClass(imageToEdit);
        setMode("Görsel Güncelle");
        setButtonClass("btn btn-primary ms-2");
        //üzerinde çalışılıyor
        setBoxClass("list-group-item border border-warning");
    };

    return (
        <div className="crud">
            <h3>Fotoğraf Ekle:</h3>
            <div className="input-group mb-3 border border-black p-5">
                <input
                    type="text"
                    value={header}
                    className="form-control"
                    placeholder="Görsel Başlığı"
                    onChange={(e) => setHeader(e.target.value)}
                />
                <input
                    type="text"
                    value={text}
                    className="form-control"
                    placeholder="Görsel Açıklaması"
                    onChange={(e) => setText(e.target.value)}
                />

                <input type="file" className="form-control ms2" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />



                <a
                    href="#"
                    onClick={ImageFunction}
                    className={buttonClass}
                    type="button"
                >
                    {mode}
                </a>



            </div>
            <h2>Fotoğraflar: </h2>
            <ul className="list list-group">
                {imageList.map((img, index) => (
                    <li className={boxClass} key={index}>
                        <div className=" align-items-center d-flex justify-content-center" style={{ width: "100%" }}>
                            <div style={{ height: "200px", width: "200px" }}>
                                <img style={{ height: "100%", width: "100%", objectFit: "contain" }} src={img.image} />
                            </div>
                        </div>

                        <h5>{img.header}</h5>
                        <p>{img.text}</p>

                        <a
                            href="#"
                            onClick={() => EditFunction(index)}
                            className="btn btn-warning ms-2"
                            type="button"
                        >
                            Görsel Düzenle 
                        </a>
                        <a
                            href="#"
                            onClick={() =>
                                setImageList(imageList.filter((item) => item !== img))
                            }
                            className="btn btn-danger ms-2"
                            type="button"
                        >
                            Görsel Sil
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CrudModule;
