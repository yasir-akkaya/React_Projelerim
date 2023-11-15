import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from "reactstrap";
import Cart from "./Cart";
import Logo from './logo.png';


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "RGB(14, 79, 49)" }} light expand="md" className="rounded fixed-top" >
          <NavbarBrand href="/">  <img src={Logo} alt="Logo" style={{ width: '100px' }} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav style={{fontSize:"20px"}} className="ml-auto" navbar>
              <Cart
                style={{color: "white" }}
                cart={this.props.cart}
                removeToCart={this.props.removeToCart}
                clearCart={this.props.clearCart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}