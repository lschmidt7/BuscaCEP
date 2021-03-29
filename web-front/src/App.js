import React, {Component} from 'react'
import './styles/App.css';
import './styles/Main.css'
import NavigationBar from './components/NavigationBar';
import Login from './pages/Login';

import {Container,Row,Col} from 'react-bootstrap'

var sectionStyle = {
   backgroundImage: "url(./img/mapa.jpg)"
}

class App extends Component {
  render()
  {
    return (
      <div>
        <NavigationBar />
        <Container id="content" fluid="true" style={sectionStyle} className="fill-window">
          <Container >
            <Row className="justify-content-md-center">
              <Col lg="4">
                <Login></Login>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    )
  }
}

export default App;