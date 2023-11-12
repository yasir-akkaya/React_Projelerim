import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


export default function AddProduct(props) {

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [id, setId] = useState(0);

    const AddProductFunction = () => {
        if (image && name && price) {
            props.setProducts((prevstate) => [...prevstate, { image, name, price, id}])
            setImage("");
            setName("");
            setPrice(0);
            setId(id + 1);
        }
    }

    return (
        <Form>
            <h3>Ürün Ekle</h3>
            <hr />
            <Input  className='mb-3' onChange={(e) => setName(e.target.value)} placeholder='Ürün Adını Giriniz' />
            <Input className='mb-3' onChange={(e) => setPrice(Number(e.target.value))} type='number' placeholder='Ürün Fiyatını Giriniz' />

            <FormGroup>
                <Label htmlFor='productImage' for="productImage">
                    Ürün Görseli:
                </Label>
                <Input
                    id="productImage"
                    name="file"
                    type="file"
                    onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                />
            </FormGroup>
            <Button onClick={AddProductFunction} color="primary">
                Ürün Ekle
            </Button>
        </Form>
    )
}

