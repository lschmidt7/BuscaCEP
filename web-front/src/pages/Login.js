import React, {Component} from 'react'
import {Form,Button,Container,Image,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../styles/Login.css'
import '../styles/Geral.css'
import axios from 'axios'

class Login extends Component {

    constructor(props)
    {
        super(props);
        console.log(props)
        this.state = {
            email: "",
            password: "",
            auth: false,
            token: {}
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.login = this.login.bind(this)
    }

    async login()
    {
        let user = {
            email:      this.state.email,
            password:   this.state.password
        }
        let body = {'user': user}
        let res = await axios.post("http://localhost:4000/login",body)
        if(res.data.auth)
        {
            this.setState({
                auth: res.data.auth
            })
            localStorage.setItem('@token', res.data.token);
            window.location.reload();
        }
        
    }

    handleChangeEmail(event)
    {
        this.setState({
            email: event.target.value
        })
    }

    handleChangePassword(event)
    {
        this.setState({
            password: event.target.value
        })
    }

    render()
    {
        return (
            <Container id="login">
                {localStorage.getItem("@token") == 'null' && 
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
                            <Form.Control className="login-input" type="email" placeholder="type your email..." onChange={this.handleChangeEmail}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="login-label">Password</Form.Label>
                            <Form.Control className="login-input" type="password" placeholder="type your password..." onChange={this.handleChangePassword}></Form.Control>
                        </Form.Group>
                        <Button onClick={() => this.login()} style={{ color: "white", background: "#00cc88", border: "none" }} block>
                            Login
                        </Button>
                        
                        {/* LINK TO LOGIN */}
                        <Form.Group style={{textAlign: 'center'}}>
                            <Link to="/register">or Sign Up</Link>
                        </Form.Group>
                    </Form>
                }
                {localStorage.getItem("@token") != 'null' && 
                    <Container>
                    <Row id="registered">
                        <Col className="text-centered">
                            <h3>Logado</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-centered">
                            <Link to="/home">Go to Home page</Link>
                        </Col>
                    </Row>
                </Container>
                }
            </Container>
        )
    }
}

export default Login;