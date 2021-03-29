import React, {Component} from 'react'
import {Form,Button,Container,Image, Row} from 'react-bootstrap'
import '../styles/Login.css'

class Login extends Component {

    login()
    {
        console.log("logando...")
    }

    render()
    {
        return (
            <Container id="login">
                <Form>
                    <Form.Row className="justify-content-md-center">
                        <Image src="./img/pin-green.svg" width="150" height="150" rounded />
                    </Form.Row>
                    <Form.Row className="justify-content-md-center">
                        <Form.Text id="login-title">
                            SIGN IN
                        </Form.Text>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label className="login-label">Email</Form.Label>
                        <Form.Control className="login-input" type="email" placeholder="type your email..."></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="login-label">Password</Form.Label>
                        <Form.Control className="login-input" type="password" placeholder="type your password..."></Form.Control>
                    </Form.Group>
                    <Button onClick={() => this.login()} block>
                        Login
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default Login;