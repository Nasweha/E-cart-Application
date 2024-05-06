import { faCartPlus, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Header() {
   const wishlistArray = useSelector((state)=>state.wishlistReducer)
   console.log(wishlistArray);

   const cartArray = useSelector((state)=>state.cartReducer)
   console.log(cartArray);
    return (
        <div>
            <Navbar expand="lg" className="bg-primary">
                <Container>
                    <Link to={'/'}><Navbar.Brand className='text-light'> <FontAwesomeIcon icon={faCartShopping} beat className='me-3' /><b>SHOPSY</b></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link >
                                <Link to={'/whishlist'}><button className='btn btn-outline-light border rounded p-2'> <FontAwesomeIcon icon={faHeart} style={{ color: "#f50000", }} className='me-2' />Whishlist<Badge bg="secondary" className='rounded ms-2'>{wishlistArray.length}</Badge></button></Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to={'/cart'}><button className='btn btn-outline-light border rounded p-2'><FontAwesomeIcon icon={faCartPlus} style={{ color: "#FFD43B", }} className='me-3' />Cart<Badge bg="secondary" className='rounded ms-2'>{cartArray.length}</Badge></button></Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header