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

class App extends Component {
  render()
  {
    return (
      <div>
        <NavigationBar />
        <Container id="content" fluid="true" className="fill-window">
            <Row className="justify-content-md-center">
              <Col lg="4">
              <Router>
                
              <Switch>
              <Route path="/">
                  <Login />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
              </Switch>
              </Router>
              </Col>
            </Row>
        </Container>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;