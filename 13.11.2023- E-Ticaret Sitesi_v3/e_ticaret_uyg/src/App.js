import React, { useState } from 'react';
import Product from './Product';
import Categories from './Categories';
import Navi from './Navi';
import AddProduct from './AddProduct'
import { Col, Container, Row } from 'reactstrap';

function App() {
  //Kategoriler oluşturulur
  const [categoriesList, setCategories] = useState([]);
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

  const selectCategory = (category) => {
    setCategories([...categoriesList, category]);
  };

  return (
    <Container >
      <Row className='border-bottom border-white'>
        <Navi cartCount={cartCount} showCartLink={showCartLink} clearCart={clearCart} cartItems={cartItems} />
      </Row>

      <Row>
        <Col className='border border-light pt-2 text-white' style={{ backgroundColor: "RGB(119, 119, 119)" }} xs="3" >
          <AddProduct categoriesList={categoriesList} selectCategory={selectCategory} categories={setCategories} setProducts={setProducts} />

        </Col>

        <Col className=' border-right border border-light text-white' style={{ backgroundColor: "RGB(119, 119, 119)" }} xs="6">
          <Product products={products} addToCart={addToCart} />
        </Col>

        <Col className='pt-2 border border-light text-white' style={{ backgroundColor: "RGB(119, 119, 119)" }} xs="3" >
          <Categories categoriesList={categoriesList} />
        </Col>
      </Row>

    </Container>
  );
}

export default App;
