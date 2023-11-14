import React, { useState } from 'react'
import { Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap';
import logo from "./assets/logo_navbar.png"

export default function Navi({deleteCart, cartCount, showCartLink, clearCart, cartItems }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);


    //dropdown menünün açılıp kapanma durumunu kontrol eden bool(tıklama kontrolü)
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const calculateTotal = () => {
        let total = 0;
        for (const item of cartItems) {
            total += Number(item.price);
        }
        return total;
    }

    return (
        <Navbar style={{ backgroundColor: "RGB(119, 119, 119)" }} expand="md">
            <Container>
                <NavbarBrand>
                    <img src={logo} alt="logo" style={{
                        webkitfilter: "drop-shadow(0px 0px 41px 48px rgba(255,255,255,0.75))"
                        ,filter: "drop-shadow(0px 0px 41px 48px rgba(255,255,255,0.75))", width: "200px"
                    }} />
                </NavbarBrand>
                <Nav className='ml-auto' style={{ float: "inline-end" }} navbar>
                    <NavItem>
                        <NavLink className='text-white' href='/components/'>Kategoriler</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-white' href='/components/'>Ürünler</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-white' href='/sepet/'>Sepet ({cartCount}) - Toplam: {calculateTotal()}</NavLink>
                    </NavItem>
                    {showCartLink ? (
                        <NavItem>
                            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle className='text-white'  nav caret>
                                    Sepetim
                                </DropdownToggle>
                                <DropdownMenu>
                                    {cartItems.map((item, index) => (
                                        <DropdownItem key={index}>
                                        {item.name} - {item.price} ₺
                                        {/* <Button color='danger' style={{fontSize:"13px", padding:"2px", marginLeft:"3px"}} onClick={deleteCart(item)}>Ürünü Sil</Button> */}
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
