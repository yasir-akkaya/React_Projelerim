import React, { useState } from 'react';
import Product from './Product';
import Categories from './Categories';
import Navi from './Navi';
import AddProduct from './AddProduct'
import { Col, Container, Row } from 'reactstrap';

function App() {
  //Kategoriler oluşturulur
  const categories = [
    { id: 1, name: "Kategori 1", description: "Açıklama 1" },
    { id: 2, name: "Kategori 2", description: "Açıklama 2" },
    { id: 3, name: "Kategori 3", description: "Açıklama 3" },
    { id: 4, name: "Kategori 4", description: "Açıklama 4" },
    { id: 5, name: "Kategori 5", description: "Açıklama 5" },
    { id: 6, name: "Kategori 6", description: "Açıklama 6" },
    { id: 7, name: "Kategori 7", description: "Açıklama 7" },
    { id: 8, name: "Kategori 8", description: "Açıklama 8" },
    { id: 9, name: "Kategori 9", description: "Açıklama 9" }
  ];
  //Ürünler oluşturulur
  const [products, setProducts] = useState([]);
  //Kart sayısını tutacak state
  const [cartCount, setCartCount] = useState(0);
  //Sepetim kısmınının gösterilmesini kontrol edecek state
  const [showCartLink, setShowCartLink] = useState(false);
  // sepetteki ürünleri tutacak array:
  const [cartItems, setCartItems] = useState([]);

  //Sepete eklenecek ürünleri alacak fonksiyon
  const addToCart = (product) => {
    setCartCount(cartCount + 1);
    setShowCartLink(true);
    setCartItems([...cartItems, product]);
  };
  //Sepeti temizleyecek fonksiyon
  const clearCart = () => {
    setCartCount(0);
    setShowCartLink(false);
    setCartItems([]);
  };

  return (
    <Container >
      <Row className='border-bottom border-white'>
        <Navi cartCount={cartCount} showCartLink={showCartLink} clearCart={clearCart} cartItems={cartItems} />
      </Row>

      <Row>
        <Col className='border border-light pt-2 text-white' style={{ backgroundColor: "RGB(119, 119, 119)" }} xs="3" >
          <AddProduct setProducts={setProducts} />
        </Col>

        <Col className=' border-right border border-light text-white' style={{ backgroundColor: "RGB(119, 119, 119)" }} xs="6">
          <Product products={products} addToCart={addToCart} />
        </Col>

        <Col className='pt-2 border border-light text-white' style={{ backgroundColor: "RGB(119, 119, 119)" }} xs="3" >
          <Categories categories={categories} />
        </Col>
      </Row>

    </Container>
  );
}

export default App;
