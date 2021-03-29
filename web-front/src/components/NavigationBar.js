import React, {Component} from 'react'
import {Navbar, Container} from 'react-bootstrap'
import axios from 'axios'

class NavigationBar extends Component {

    request(){
        axios.get('http://localhost:4000/connect')
        .then(res => {
            console.log(res.data)
        })
    }

    render()
    {
        return (
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Busca CEP</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar;