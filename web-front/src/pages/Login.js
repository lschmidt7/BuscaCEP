import React, {Component} from 'react'
import {Form,Button,Container,Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
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
                    <Button onClick={() => this.login()} style={{ color: "white", background: "#00cc88", border: "none" }} block>
                        Login
                    </Button>
                    
                    {/* LINK TO LOGIN */}
                    <Form.Group style={{textAlign: 'center'}}>
                        <Link to="/register">or Sign Up</Link>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

export default Login;