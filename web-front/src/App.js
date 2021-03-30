import React, {Component} from 'react'
import './styles/App.css';
import './styles/Main.css'
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer'
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home'

import {Container,Row,Col} from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

var sectionStyle = {
   backgroundImage: "url(./img/mapa.jpg)",
   backgroundSize: "100% 100%"
}

class App extends Component {
  render()
  {
    return (
      <div>
        <NavigationBar />
        <Container id="content" fluid="true" style={sectionStyle} className="fill-window">
            <Row className="justify-content-md-center middle">
              <Router>
              <Switch>
                <Route path="/login">
                  <Col lg="3">
                    <Login />
                  </Col>
                </Route>
                <Route path="/register">
                  <Col lg="4">
                    <Register />
                  </Col>
                </Route>
                <Route path="/home">
                  <Col lg="4">
                    <Home />
                  </Col>
                </Route>
              </Switch>
              </Router>
            </Row>
        </Container>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;