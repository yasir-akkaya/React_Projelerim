import React from "react";

function Categories({ categories }) {
    return (
        <div className="border-right border-white "  style={{color:"RGB(221, 221, 221)" ,backgroundColor:"RGB(119, 119, 119)"}}>
            <h2 className="text-white">Kategoriler:</h2>
            <hr />
            <ul style={{listStyleType:"none"}}>
                {categories.map((category) => (
                    <li className="mt-4" key={category.id}>
                        <p>{category.name}</p>
                    </li>
                ))}
            </ul>
        </div>)

}

export default Categories;
