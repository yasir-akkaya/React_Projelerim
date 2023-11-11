import React, { useState } from 'react';
import './App.css';
import Product from './Product'
import Categories from './Categories'
import Navi from './Navi'
import { Col, Container, Row } from 'reactstrap'

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
  const products = [
    { id: 1, name: "Ürün 1", price: 30 },
    { id: 2, name: "Ürün 2", price: 70 },
    { id: 3, name: "Ürün 3", price: 110 },
    { id: 4, name: "Ürün 4", price: 88 },
    { id: 5, name: "Ürün 5", price: 90 },
    { id: 6, name: "Ürün 6", price: 15 },
    { id: 7, name: "Ürün 7", price: 25 },
    { id: 8, name: "Ürün 8", price: 75 },
    { id: 9, name: "Ürün 9", price: 65 }
  ];
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
    <Container>

      <Navi cartCount={cartCount} showCartLink={showCartLink} clearCart={clearCart} cartItems={cartItems} />

      <Row style={{ marginTop: '20px' }}>
        <Col xs="3" >
          <Categories categories={categories} />
        </Col>
        <Col xs="9">
          <Product products={products} addToCart={addToCart} />
        </Col>
      </Row>

    </Container>
  );
}

export default App;
