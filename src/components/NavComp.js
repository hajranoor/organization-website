// import React from 'react'
// import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
// import logo from '../assets/logo.png';
// import logo2 from '../assets/hkc-logo.png';


// const NavComp = () => {
//     return (
//         <div>
//             <Navbar className='navbar-bg'  expand={false}>
//                 <Container fluid>
//                     {/* <Navbar.Brand href="#">Hunar Ki Chotiyan</Navbar.Brand> */}
//                     <Navbar.Brand href="#" className='navbar-brand'>
//                         <img className='logo-image'
//                         src = {logo2}
//                         alt = "Hunar Ki Chotiyann Logo"
//                         classname = "logo-image"
//                         />
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="offcanvasNavbar" />
//                     <Navbar.Offcanvas
//                         id="offcanvasNavbar"
//                         aria-labelledby="offcanvasNavbarLabel"
//                         placement="end"
//                     >
//                         <Offcanvas.Header closeButton>
//                             <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
//                         </Offcanvas.Header>
//                         <Offcanvas.Body>
//                             <Nav className="justify-content-end flex-grow-1 pe-3">
//                                 <Nav.Link href="#action1">Home</Nav.Link>
//                                 <Nav.Link href="#action2">Link</Nav.Link>
//                                 <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
//                                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                                     <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
//                                     <NavDropdown.Divider />
//                                     <NavDropdown.Item href="#action5">
//                                         Something else here
//             </NavDropdown.Item>
//                                 </NavDropdown>
//                             </Nav>
//                             <Form className="d-flex">
//                                 <FormControl
//                                     type="search"
//                                     placeholder="Search"
//                                     className="me-2"
//                                     aria-label="Search"
//                                 />
//                                 <Button variant="outline-success">Search</Button>
//                             </Form>
//                         </Offcanvas.Body>
//                     </Navbar.Offcanvas>
//                 </Container>
//             </Navbar>
//         </div>
//     )
// }

// export default NavComp;


// import React from 'react'
// import {Link} from 'react-router-dom'

// import './navComp.css'
// const NavComp = () => {
//     return (
//         <nav className = "navbar">
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/singUp">Sign Up</Link>
//                 </li>
//                 <li>
//                     <Link to="/ourTeam">Our Team</Link>
//                 </li>
//             </ul>

            
//         </nav>
//     )
// }

// export default NavComp;


import React , {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

import './navComp.css'

function NavComp({ }) {
    const location = useLocation();
    return (
        <div className = "navbar">
              <ul>
    <li>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
    </li>
    <li>
      <Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>Sign Up</Link>
    </li>
    <li>
      <Link to="/ourteam" className={location.pathname === '/ourteam' ? 'active' : ''}>Our Team</Link>
    </li>
  </ul>

        </div>
    )
}

export default NavComp;
