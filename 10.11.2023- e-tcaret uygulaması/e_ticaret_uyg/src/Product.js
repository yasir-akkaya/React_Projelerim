import React from 'react'
import { Row } from 'reactstrap';

export default function Product({ products, addToCart }) {
    return (
        <Row>
            {products.map((product) => (
                <div key={product.id} className='col-4 border p-3'>
                    <h2>Ürün</h2>
                    <p>Ürün Adı: {product.name}</p>
                    <p>Fiyat: {product.price}</p>
                    <button onClick={() => addToCart(product)}>Sepete Ekle</button>
                </div>
            ))}
        </Row>
    )
}
