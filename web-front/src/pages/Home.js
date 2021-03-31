import React, {Component} from 'react'
import {Container, Form, Button,Image,Row,Col} from 'react-bootstrap'
import axios from 'axios'
import '../styles/Home.css'
import '../styles/Geral.css'

class Home extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            cep: '',
            error_cep: '',
            cep_info: ''
        }
        this.handleChangeCEP = this.handleChangeCEP.bind(this)
    }

    async search_cep()
    {
        if(this.isValid(this.state.cep))
        {
            this.setState({
                error_cep: ""
            })
            let body = {'cep': this.state.cep };
            let res = await axios.post('http://localhost:4000/cep', body);
            this.setState({
                cep_info: res.data
            })
        }
        else
        {
            this.setState({
                error_cep: "CEP inválido"
            })
        }
    }

    isValid(cep)
    {
        var cep_reg = /^[0-9]{5}-[0-9]{3}$/;
        if(cep_reg.test(cep))
            return true
        return false
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

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    formatFields(field)
    {
        switch (field) {
            case 'cep':
                return 'CEP'
            case 'uf':
                return 'UF'
            case 'ibge':
                return 'IBGE'
            case 'ddd':
                return 'DDD'
        }
        return this.capitalize(field)
    }

    render()
    {
        let rows = []
        let infos = this.state.cep_info
        let keys = Object.keys(infos)
        for( let idx in keys)
        {
            rows.push(<Row key={idx}> <Col className="right">{this.formatFields(keys[idx])}</Col> <Col>{infos[keys[idx]]}</Col> </Row>)
        }
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
                        <Form.Text className="text-warning">
                            {this.state.error_cep}
                        </Form.Text>
                    </Form.Group>
                    <Button onClick = { () => this.search_cep() } style={{ color: "white", background: "#00cc88", border: "none" }} block>Search</Button>
                </Form>
                <Container id="cep-result" fluid="true">
                    <hr />
                    <h3 className="text-centered">Informations</h3>
                    {rows}
                </Container>
            </Container>
        )
    }
}

export default Home;