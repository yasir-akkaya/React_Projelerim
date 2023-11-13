import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';



function Categories({ categoriesList }) {
    return (
        <div className="border-right border-white " style={{ color: "RGB(221, 221, 221)", backgroundColor: "RGB(119, 119, 119)" }}>
            <h2 className="text-white">Kategoriler:</h2>
            <hr />
            <ListGroup style={{ listStyleType: "none" }}>
                <ListGroupItem tag="a" color="success" href="#">
                    Hepsi
                </ListGroupItem>
                {categoriesList.map((category, index) => (
                    <ListGroupItem tag="a"  href="#" key={index} className="mt-3">
                        {category}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>)

}

export default Categories;
