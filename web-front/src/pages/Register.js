import React, {Component} from 'react'
import {Form,Button,Container,Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../styles/Register.css'
import '../styles/Geral.css'
import axios from 'axios'

class Register extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            email_repeat: "",
            password: "",
            password_repeat: "",
            email_not_equal: "",
            password_not_equal: ""
        }

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeEmailRepeat = this.handleChangeEmailRepeat.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePasswordRepeat = this.handleChangePasswordRepeat.bind(this);
    }

    fieldOk(field1, field2)
    {
        if(field1 === field2)
            return true
        return false
    }

    formIsValid()
    {
        let valid = true
        if(!this.fieldOk(this.state.password, this.state.password_repeat))
        {
            valid = false
            this.setState({
                password_not_equal: "Passwords are differently"
            })
        }
        if(!this.fieldOk(this.state.email, this.state.email_repeat))
        {
            valid = false
            this.setState({
                email_not_equal: "Emails are differently"
            })
        }
        return valid;
    }

    async register()
    {
        
        if(this.formIsValid())
        {
            console.log("Registrando")
            let res = await axios.post("http://localhost:4000/register",{dados: {}})
            console.log(res)
        }
    }

    handleChangeFirstName(event){this.setState({first_name: event.target.value})}
    handleChangeLastName(event){this.setState({last_name: event.target.value})}
    handleChangeEmail(event){this.setState({email: event.target.value})}
    handleChangeEmailRepeat(event){this.setState({email_repeat: event.target.value})}
    handleChangePassword(event){this.setState({password: event.target.value})}
    handleChangePasswordRepeat(event){this.setState({password_repeat: event.target.value})}

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
                        <Form.Label className="login-label">First Name</Form.Label>
                        <Form.Control className="login-input" type="Nome" placeholder="type your name..." onChange={this.handleChangeFirstName}></Form.Control>
                    </Form.Group>

                    {/* LAST NAME */}
                    <Form.Group>
                        <Form.Label className="login-label">Last Name</Form.Label>
                        <Form.Control className="login-input" type="Nome" placeholder="type your name..." onChange={this.handleChangeLastName}></Form.Control>
                    </Form.Group>

                    {/* EMAIL */}
                    <Form.Group>
                        <Form.Label className="login-label">Email</Form.Label>
                        <Form.Control className="login-input" type="Nome" placeholder="type your name..." onChange={this.handleChangeEmail}></Form.Control>
                    </Form.Group>

                    {/* EMAIL REPEAT */}
                    <Form.Group>
                        <Form.Label className="login-label">Repeat the email</Form.Label>
                        <Form.Control className="login-input" type="Nome" placeholder="type your name..." onChange={this.handleChangeEmailRepeat}></Form.Control>
                        <Form.Text className="text-warning">
                            {this.state.email_not_equal}
                        </Form.Text>
                    </Form.Group>

                    {/* PASSWORD */}
                    <Form.Group>
                        <Form.Label className="login-label">Password</Form.Label>
                        <Form.Control className="login-input" type="password" placeholder="type your password..." onChange={this.handleChangePassword}></Form.Control>
                    </Form.Group>

                    {/* PASSWORD REPEAT*/}
                    <Form.Group>
                        <Form.Label className="login-label">Repeat the password</Form.Label>
                        <Form.Control className="login-input" type="password" placeholder="type your password..." onChange={this.handleChangePasswordRepeat}></Form.Control>
                        <Form.Text className="text-warning">
                            {this.state.password_not_equal}
                        </Form.Text>
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