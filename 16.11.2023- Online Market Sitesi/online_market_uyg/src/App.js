import './App.css';
import React, { Component } from "react";
import { Col, Container, Row } from 'reactstrap';
import Categories from "./Categories.js";
import Header from "./Header.js";
import Products from "./Products.js";
import Banner from "./Banner.js";



export default class App extends Component {

  //State'ler aşağıdaki gibi tanımlanır
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };

  // Kategori değişikliği olduğunda çalı
  changeCategory = (category) => {
    if (category === null) {
      // Eğer kategori null ise tüm ürünleri göster
      this.setState({ currentCategory: null });
      this.getProducts();
    } else {

      this.setState({ currentCategory: category.categoryName });
      this.getProducts(category.id);
    }
  };

  //Json olarak tutulan verilerin ıd'ye göre gösterilmesi/alınması için yazılan fonksiyon
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    else if (null) {
      url = "http://localhost:3000/products"
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  //sayfa ilk açıldığında verilerin null gelmemesi için oluşturulan fonk.
  componentDidMount() {
    this.getProducts();
  };

  
    
 

  //newCart: state'teki sepeti tutar
  //addedItem: eklenen ürünün id'sini sepette arar
  //eğer varsa eklenen ürünün adedini arttırır
  //yoksa 1 adet olarak sepette olmayan ürünü sepete ekler
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
  };


  //silinecek ürünün id'sine eşit olmama durumuna göre sepeti filtreler ve bunu yeni sepete atar
  //setCart(newCart) durumu gibi
  removeToCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
  };

  //sepetin tamamını siler
  clearCart = () => {
    this.setState({ cart: [] });
  };


  render() {
    return (
      <Container style={{ position: "relative" }}>
        {/* Header'a sepet ve removeCart fonk. gönderilir */}
        <Header clearCart={this.clearCart} cart={this.state.cart} removeToCart={this.removeToCart} />
        <Row style={{ marginTop: "150px" }}>
          <Banner  products={this.state.products} />

          <Col xs="3" className='mt-4'>
            {/* Categories'e kategori değiştirme fonk. ve kategori seçim durumu gönderilir */}
            <Categories changeCategory={this.changeCategory} currentCategory={this.state.currentCategory} />
          </Col>

          <Col xs="9" className='mt-4'>
            {/* products modülüne addtocart fonk., products ve kategori seçim durumu gönderilir */}
            <Products addToCart={this.addToCart} products={this.state.products} currentCategory={this.state.currentCategory} />
          </Col>

        </Row>
      </Container>
    );
  }
}
