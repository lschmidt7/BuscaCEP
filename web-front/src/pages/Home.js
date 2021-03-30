import React, {Component} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import '../styles/Home.css'

class Home extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            cep: 'fadsfasdf'
        }
    }

    async search_cep()
    {
        let body = { body: {'cep': this.state.cep }};
        let res = await axios.post('http://localhost:4000/cep', body);
        console.log(res.data)
    }

    render()
    {
        return (
            <Container id="home">
                <Form>
                    <Form.Group>
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type="text" placeholder="type CEP here..."></Form.Control>
                    </Form.Group>
                    <Button onClick = { () => this.search_cep() } block>Search</Button>
                </Form>
            </Container>
        )
    }
}

export default Home;