import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
const MyNavbar = () =>{
    const brandImg = process.env.PUBLIC_URL + "/favicon.ico";
    return(
        <Navbar className="fixed-top navbar-light bg-light">

            <Nav className="mr-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/resume">Resume</Link>

                <Link className="nav-link" to="/projects">Projects</Link>

                {/* <Nav.Link href="/skills">Skills</Nav.Link> */}

            </Nav>
        </Navbar>
    );
};

export default MyNavbar;