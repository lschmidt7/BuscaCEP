import React, {Component} from 'react'
import {Navbar, Button} from 'react-bootstrap'
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
        return <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Button onClick={() => this.request()}>Request</Button>
        </Navbar>
    }
}

export default NavigationBar;