import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


export default function AddProduct(props) {

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState(0);
    const [category,setCategory] =useState("");

    const AddProductFunction = () => {
        if (image && name && price && category) {

            // Ürünleri eklerken categories'i de dahil et
            props.setProducts((prevstate) => [...prevstate,{ image, name, price, id, categories:category }]);

           //kategori listesinde eklenen kategori yoksa ekle!
            props.categoriesList.includes(category)===false && props.selectCategory(category)
            
        }

        else{
            alert("Eksik bilgi girişi yapıldı, ürün eklenemedi!")
        }
        setImage("");
        setName("");
        setPrice("");
        setId(id + 1);
        setCategory("");
    }

    return (
        <Form>
            <h3>Ürün Ekle</h3>
            <hr />
            <Input value={name} className='mb-3' onChange={(e) => setName(e.target.value)} placeholder='Ürün Adını Giriniz' />
            <Input value={price} className='mb-3' onChange={(e) => setPrice(e.target.value)}  placeholder='Ürün Fiyatını Giriniz' />

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

            <FormGroup>
            <Label for="categorySelect">
              Kategori
            </Label>
            <Input
              id="categorySelect"
              name="select"
              type="select"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option defaultValue={true}>

              </option>
              <option>
                Giyim
              </option>
              <option>
                Aksesuar
              </option>
              <option>
                Ev & Yaşam
              </option>
              <option>
                Elektronik
              </option>
              <option>
                Kozmetik
              </option>
            </Input>
          </FormGroup>

            <Button onClick={AddProductFunction} color="primary">
                Ürün Ekle
            </Button>
        </Form>
    )
}

