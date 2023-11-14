import React, { useState } from 'react';
import Product from './Product';
import Categories from './Categories';
import Navi from './Navi';
import AddProduct from './AddProduct'
import { Col, Container, Row } from 'reactstrap';

function App() {
  //Kategorileri oluşturulur
  const [categoriesList, setCategories] = useState([]);
  //Ürünler oluşturulur
  const [products, setProducts] = useState([]);
  //Kart sayısını tutacak state
  const [cartCount, setCartCount] = useState(0);
  //Sepetim kısmınının gösterilmesini kontrol edecek state
  const [showCartLink, setShowCartLink] = useState(false);
  // sepetteki ürünleri tutacak array:
  const [cartItems, setCartItems] = useState([]);
  //filtrelenen ürünleri tutacak olan state 
  const [filteredProducts, setFilteredProducts] = useState([]);
  // seçili olan kategoriyi tutan state:
  const [selectedCategory, setSelectedCategory] = useState("Hepsi");



  //Sepete eklenecek ürünleri alacak fonksiyon
  const addToCart = (product) => {
    setCartCount(cartCount+1);
    setShowCartLink(true);
    setCartItems([...cartItems, product ]);
  };
  //Sepeti temizleyecek fonksiyon
  const clearCart = () => {
    setCartCount(0);
    setShowCartLink(false);
    setCartItems([]);
  };

  //Sepetten tek bir ürün silme fonksiyonu
  // const deleteCart = (i) => {
  //   if (cartCount === 1) {
  //     setCartCount(cartCount);
  //     setShowCartLink(false);
  //     setCartItems([]);
  //   }
  //   else {
  //     setCartCount(cartCount);
  //     const newCart = cartItems.filter((j) => i.cartId !== j.cartId)
  //     setCartItems(newCart);
  //   }
  // }




  // seçilen kategorileri kategoriler dizisine ekler
  const selectCategory = (category) => {
    setCategories([...categoriesList, category]);
  };

  // ürünleri kategorilerine göre filtreleme fonksiyonu
  const filterProductsByCategory = (category) => {
    if (category === "Hepsi") {
      setFilteredProducts(products);
    }
    else {
      const filtered = products.filter((product) =>
        product.categories.includes(category)
      );
      setSelectedCategory(category);
      setFilteredProducts(filtered);
    };
  }



  return (
    <Container >
      <Row className='border-bottom border-white'>
        <Navi  cartCount={cartCount} showCartLink={showCartLink} clearCart={clearCart} cartItems={cartItems} />
      </Row>

      <Row>
        <Col className='border border-light pt-2 text-white' style={{ backgroundColor: "RGB(119, 119, 119)" }} xs="3" >
          <AddProduct cartCount={cartCount} categoriesList={categoriesList} selectCategory={selectCategory} categories={setCategories} setProducts={setProducts} filterProductsByCategory={filterProductsByCategory} />
        </Col>

        <Col className=' border-right border border-light text-white' style={{ backgroundColor: "RGB(119, 119, 119)" }} xs="6">
          <Product products={filteredProducts} addToCart={addToCart} />
        </Col>

        <Col className='pt-2 border border-light text-white' style={{ backgroundColor: "RGB(119, 119, 119)" }} xs="3" >
          <Categories categoriesList={categoriesList} filterProducts={filterProductsByCategory} selectedCategory={selectedCategory} />
        </Col>
      </Row>

    </Container>
  );
}

export default App;
