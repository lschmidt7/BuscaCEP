import React, {Component} from 'react'
import {Form,Button,Container,Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../styles/Register.css'

class Register extends Component {

    register()
    {
        console.log("cadastrando...")
    }

    render()
    {
        return (
            <Container id="register">
                <Form>

                    {/* LOGO IMAGE */}
                    <Form.Row className="justify-content-md-center">
                        <Image src="./img/pin-green.svg" width="150" height="150" rounded />
                    </Form.Row>

                    {/* REGISTER TITLE */}
                    <Form.Row className="justify-content-md-center">
                        <Form.Text id="login-title">
                            SIGN UP
                        </Form.Text>
                    </Form.Row>

                    {/* NAME */}
                    <Form.Group>
                        <Form.Label className="login-label">Nome</Form.Label>
                        <Form.Control className="login-input" type="Nome" placeholder="type your name..."></Form.Control>
                    </Form.Group>

                    {/* EMAIL */}
                    <Form.Group>
                        <Form.Label className="login-label">Email</Form.Label>
                        <Form.Control className="login-input" type="Nome" placeholder="type your name..."></Form.Control>
                    </Form.Group>

                    {/* EMAIL REPEAT */}
                    <Form.Group>
                        <Form.Label className="login-label">Repeat the email</Form.Label>
                        <Form.Control className="login-input" type="Nome" placeholder="type your name..."></Form.Control>
                    </Form.Group>

                    {/* PASSWORD */}
                    <Form.Group>
                        <Form.Label className="login-label">Password</Form.Label>
                        <Form.Control className="login-input" type="password" placeholder="type your password..."></Form.Control>
                    </Form.Group>

                    {/* PASSWORD REPEAT*/}
                    <Form.Group>
                        <Form.Label className="login-label">Repeat the password</Form.Label>
                        <Form.Control className="login-input" type="password" placeholder="type your password..."></Form.Control>
                    </Form.Group>

                    {/* SIGN UP BUTTON */}
                    <Button onClick={() => this.register()} style={{ color: "white", background: "#00cc88", border: "none" }} block>
                        Sign Up
                    </Button>

                    {/* LINK TO LOGIN */}
                    <Form.Group style={{textAlign: 'center'}}>
                        <Link to="/login">Already have an account?</Link>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

export default Register;