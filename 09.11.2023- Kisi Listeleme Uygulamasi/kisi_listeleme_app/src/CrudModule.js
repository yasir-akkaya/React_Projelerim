import React, { useState } from "react";

function CrudModule() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mail, setMail] = useState("");
    const [age, setAge] = useState(null);
    const [tel, setTel] = useState("");
    const [job, setJob] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [personList, setPersonList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [image, setImage] = useState("");
    const [mode, setMode] = useState("Kişi Ekle");
    const [id, setId]= useState(1)
    const [modeInput, setModeInput] = useState("form-control mb-2 shadow-lg");
    const [buttonClass, setButtonClass] = useState("btn btn-success d-flex text-center");


    const PersonFunction = () => {
        if (name && surname && tel && image && mail && (18<=age && age<=100)) {
            if (editIndex !== null) {
                const updatedPerson = [...personList];
                updatedPerson[editIndex] = { name, surname, image, mail, age, tel, job, address, city, country, id };
                setPersonList(updatedPerson);
                setEditIndex(null);
            } else {
                setPersonList([...personList, { name, surname, image, mail, age, tel, job, address, city, country, id }]);
            }
            setName("");
            setSurname("");
            setMail("");
            setAge("");
            setTel("");
            setJob("");
            setAddress("");
            setCity("");
            setCountry("");
            setMode("Kişi Ekle");
            setModeInput("form-control mb-2 shadow-lg");
            setButtonClass("btn btn-success d-flex");
            setId(id+1);
            setImage(null);
        }
    };
    const EditFunction = (index) => {
        setEditIndex(index);
        const personToEdit = personList[index];
        setName(personToEdit.name);
        setSurname(personToEdit.surname);
        setMail(personToEdit.mail);
        setAge(personToEdit.age);
        setTel(personToEdit.tel);
        setJob(personToEdit.job);
        setAddress(personToEdit.address);
        setCity(personToEdit.city);
        setCountry(personToEdit.country);
        setImage(personToEdit.image);
        setId(personToEdit.id);
        setMode("Kişi Güncelle");
        setModeInput("form-control mb-2 border-primary shadow-lg");
        setButtonClass("btn btn-primary ms-2");
    };

    return (
        <div className="container text-center">
            <div className="row" style={{ width: "100%" }}>

                <div className="col-4 border border-black" style={{ flexDirection: 'column' }}>
                    <h2>Kişi Ekle:</h2>
                    <input
                        type="text"
                        value={name}
                        className={modeInput}
                        placeholder="Ad"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        value={surname}
                        className={modeInput}
                        placeholder="Soyad"
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <input
                        type="email"
                        value={mail}
                        className={modeInput}
                        placeholder="E-posta"
                        onChange={(e) => setMail(e.target.value)}
                    />
                    <input
                        type="number"
                        value={age}
                        className={modeInput}
                        placeholder="Yaş"
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                        type="tel"
                        value={tel}
                        className={modeInput}
                        placeholder="Telefon"
                        onChange={(e) => setTel(e.target.value)}
                    />
                    <input
                        type="text"
                        value={job}
                        className={modeInput}
                        placeholder="Meslek"
                        onChange={(e) => setJob(e.target.value)}
                    />
                    <input
                        value={address}
                        className={modeInput}
                        placeholder="Adres"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                        type="text"
                        value={city}
                        className={modeInput}
                        placeholder="Şehir"
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <input
                        type="text"
                        value={country}
                        className={modeInput}
                        placeholder="Ülke"
                        onChange={(e) => setCountry(e.target.value)}
                    />

                    <input type="file" className="form-control mb-2 " onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />

                    <a
                        href="#"
                        onClick={PersonFunction}
                        className={buttonClass}
                        type="button"
                    >
                        {mode}
                    </a>

                </div>
                <div className="col-8 border border-black p-5">
                    <h2>Kişiler: </h2>
                    <ul className="list list-group pb-5">
                        {personList.map((person, index) => (
                            <li className="list-group-item border border-black" key={index} style={{ position: "relative" }}>
                                <div className="align-items-center d-flex justify-content-center" style={{ width: "100%" }}>
                                    <div style={{ height: "100px", width: "100px", position: "absolute", top: 0, left: 0 }}>
                                        <img className="border border-black" style={{ height: "100%", width: "100%", objectFit: "contain" }} src={person.image} />
                                    </div>
                                </div>

                                <h6>Ad Soyad: <span className="fw-normal"> {person.name} {person.surname}</span></h6>
                                <h6>Id: <span className="fw-normal">{person.id}</span></h6>
                                <h6>E-Posta: <span className="fw-normal">{person.mail}</span></h6>
                                <h6>Yaş: <span className="fw-normal">{person.age}</span></h6>
                                <h6>Telefon: <span className="fw-normal">{person.tel}</span></h6>
                                <h6>Meslek: <span className="fw-normal">{person.job}</span></h6>
                                <h6>Adres: <span className="fw-normal">{person.address}</span></h6>
                                <h6>Şehir: <span className="fw-normal">{person.city}</span></h6>
                                <h6>Ülke: <span className="fw-normal">{person.country}</span></h6>

                                <a
                                    href="#"
                                    onClick={() => EditFunction(index)}
                                    className="btn btn-warning ms-2 mt-2"
                                    type="button"
                                >
                                    Kişi Düzenle
                                </a>
                                <a
                                    href="#"
                                    onClick={() =>
                                        setPersonList(personList.filter((item) => item !== person))
                                    }
                                    className="btn btn-danger ms-2 mt-2"
                                    type="button"
                                >
                                    Kişi Sil
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>

    );
}

export default CrudModule;
