import React from "react";

function Categories({ categories }) {
    return (
        <div>
            <h2>Kategoriler:</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <p>{category.name}</p>
                    </li>
                ))}
            </ul>
        </div>)

}

export default Categories;
