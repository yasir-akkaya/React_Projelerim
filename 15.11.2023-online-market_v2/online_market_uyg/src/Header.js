import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
        <Navbar style={{ backgroundColor: "RGB(14, 79, 49)" }} light expand="md" className="rounded" >
          <NavbarBrand href="/">  <img src={Logo} alt="Logo" style={{ width: '150px' }} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{ color: "white" }} href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "white" }} href="/components/">Components</NavLink>
              </NavItem>
              <Cart
                style={{ color: "white" }}
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