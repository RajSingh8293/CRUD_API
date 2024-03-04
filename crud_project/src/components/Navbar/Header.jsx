import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="">
          <Navbar.Brand href="#home" className="logo">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto navlinks">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/add-product">Add-Pproducts</NavLink>
            <NavLink to="/update-product">Update-Pproducts</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
