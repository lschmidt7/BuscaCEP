import React, {Component} from 'react'
import {Navbar, Container, Nav, Link} from 'react-bootstrap'
import axios from 'axios'

class NavigationBar extends Component {

    constructor(props)
    {
        super(props)
        this.logoff = this.logoff.bind(this)
    }

    async logoff()
    {
        let res = await axios.get("http://localhost:4000/logoff")
        localStorage.setItem('@token', res.data.token);
        window.location.reload();
    }

    render()
    {
        return (
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/home" style={{color: 'lightgrey'}}>Busca CEP</Navbar.Brand>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {localStorage.getItem('@token') != 'null' &&
                            <Nav.Link style={{color: 'lightgrey'}} onClick={() => this.logoff()} >Logoff</Nav.Link>
                            }
                             {localStorage.getItem('@token') == 'null' &&
                            <Nav.Link style={{color: 'lightgrey'}} href="/login" >Sign In</Nav.Link>
                            }
                            <Nav.Link style={{color: 'lightgrey'}} href="/register" >Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar;