import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";


export default function Navigation() {
  return (
    <Navbar className='nav'>
        <Container>
          {/* Links */}
          <div className='nav-content'>
            <div className='links'>
              <Link to="/" className="text-white ms-3 text-decoration-none">🏠 Home </Link>
              <Link to="/contacto" className="text-white ms-3 text-decoration-none"> 📒 Contacto</Link>  
            </div>
            <div className='brand'>
              <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
            </div>
          </div>
        </Container>
    </Navbar>
  )
}
