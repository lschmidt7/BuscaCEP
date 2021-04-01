import React, {Component} from 'react'
import {Navbar, Container} from 'react-bootstrap'

class NavigationBar extends Component {

    render()
    {
        return (
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/home" style={{color: 'lightgrey'}}>Busca CEP</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar;