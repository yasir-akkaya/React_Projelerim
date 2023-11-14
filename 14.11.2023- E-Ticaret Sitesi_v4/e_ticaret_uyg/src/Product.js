import React from 'react'
import { Button, Row } from 'reactstrap';

export default function Product({ products, addToCart }) {
    return (
        <Row>
            {products.map((product) => (
                <div style={{backgroundColor:"RGB(154, 154, 154)"}} key={product.id} className='col-4 border border-white p-3 rounded mb-2'>

                    <div className=" border rounded border-white align-items-center d-flex justify-content-center" style={{ width: "100%" }}>
                        <div style={{ height: "200px", width: "200px" }}>
                            <img style={{ height: "100%", width: "100%", objectFit: "contain" }} src={product.image} alt="product_image" />
                        </div>
                    </div>
                    <hr/>
                    <p>Ürün Adı: <span style={{fontWeight:"bold"}}>{product.name}</span></p>
                    <p>Fiyat: {product.price} ₺</p>
                    <Button color='success' onClick={() => addToCart(product)}>Sepete Ekle</Button>
                </div>
            ))}
        </Row>
    )
}
