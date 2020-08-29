import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar{
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link{
        color:#bbb;
    }
`
;
export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Juicy Challenge for ya</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    </Styles>
)