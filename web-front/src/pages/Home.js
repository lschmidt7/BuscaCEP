import React, {Component} from 'react'
import {Container, Form, Button,Image} from 'react-bootstrap'
import axios from 'axios'
import '../styles/Home.css'

class Home extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            cep: ''
        }
        this.handleChangeCEP = this.handleChangeCEP.bind(this)
    }

    async search_cep()
    {
        let body = {'cep': this.state.cep };
        let res = await axios.post('http://localhost:4000/cep', body);
        console.log(res.data)
    }

    handleChangeCEP(event)
    {
        let cep_text = event.target.value
        if(event.nativeEvent.data!=null && cep_text.length===5){
            cep_text = cep_text + "-"
        }
        this.setState({
            cep: cep_text.substring(0,9)
        })
    }

    render()
    {
        return (
            <Container id="home">
                <Form>
                    <Form.Row className="justify-content-md-center">
                        <Image src="./img/pin-green.svg" width="150" height="150" rounded />
                    </Form.Row>
                    <Form.Row className="justify-content-md-center">
                        <Form.Text id="login-title">
                            Search
                        </Form.Text>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type="text" placeholder="type CEP here..." value={this.state.cep} onChange={this.handleChangeCEP}></Form.Control>
                    </Form.Group>
                    <Button onClick = { () => this.search_cep() } style={{ color: "white", background: "#00cc88", border: "none" }} block>Search</Button>
                </Form>
            </Container>
        )
    }
}

export default Home;