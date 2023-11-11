import React, { useState } from 'react'
import { Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap';
import logo from "./assets/logo_navbar.png"
// dsfsdfsdf
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';





export default function Navi({ cartCount, showCartLink, clearCart, cartItems }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);


    //dropdown menünün açılıp kapanma durumunu kontrol eden bool(tıklama kontrolü)
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const calculateTotal = () => {
        let total = 0;
        for (const item of cartItems) {
            total += item.price;
        }
        return total;
    }

    return (
        <Navbar color="light" expand="md">
            <Container>
                <NavbarBrand>
                    <img src={logo} alt="logo" style={{ width: "200px" }} />
                </NavbarBrand>
                <Nav className='ml-auto' style={{ float: "inline-end" }} navbar>
                    <NavItem>
                        <NavLink href='/components/'>Kategoriler</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/components/'>Ürünler</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/sepet/'>Sepet ({cartCount}) - Toplam: {calculateTotal()}</NavLink>
                    </NavItem>
                    {showCartLink ? (
                        <NavItem>
                            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle nav caret>
                                    Sepetim
                                </DropdownToggle>
                                <DropdownMenu>
                                    {cartItems.map((item, index) => (
                                        <DropdownItem key={index}>
                                            {item.name} - {item.price} ₺
                                        </DropdownItem>
                                    ))}
                                    {cartCount > 0 && <DropdownItem divider />}
                                    {cartCount > 0 && (
                                        <DropdownItem onClick={clearCart}>Sil</DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>

                    ) : null}
                </Nav>
            </Container>
        </Navbar>
    )
}
