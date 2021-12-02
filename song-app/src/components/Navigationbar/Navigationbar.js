import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigationbar.css'
import {
    Navbar, Nav, Button,
} from 'react-bootstrap';

class Navigationbar extends Component {
    render() {
        let navLogin = null

        navLogin = (
            <Nav className="ml-auto">
                <Link
                    id="songTableLink"
                    to={{
                        pathname: '/songtable',
                    }}
                ><Button className="mr-sm-2 navbarbuttons">Song Table
                        </Button></Link>
            </Nav>
        );

        return (
            <div>
                <Navbar id="nav-bar">
                    <div className="container">
                        <Navbar.Brand id="nav-brand">
                            <img
                                alt=""
                                src={`${window.location.origin}/iheartradio-icon.png`}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            {' '}
                            <Link
                                id="landingPageLink"
                                to={{
                                    pathname: '/',
                                }}
                            >
                                iHeart
                            </Link>

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        {navLogin}
                    </div>
                </Navbar>
            </div>
        );
    }
}


export default Navigationbar
