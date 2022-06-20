import React from "react";
import Button from 'react-bootstrap/Button'
import { Navbar } from 'react-bootstrap'; 

function Header() {
    return(                       
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center ">
                <Navbar.Brand>AI Services</Navbar.Brand>
                    <nav className="justify-content-md-end">
                        <Button type="button" variant="light">Logout</Button>  
                    </nav>
            </nav>
    ); 
}

export default Header;