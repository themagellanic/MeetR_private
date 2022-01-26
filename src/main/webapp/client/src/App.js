

import './App.css';
import NavigationBar from './components/NavigationBar';
import RequestList from './components/RequestList';
import Request from './components/Request';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12} >
           
          </Col>
        </Row>
        <Routes>
              <Route exact path='/' element={<Welcome/>} />
              <Route exact path='/request' element={<Request/>} />
              <Route exact path='/showrequest' element={<RequestList/>} />
        </Routes> 
      </Container> 
    </Router>
      
  );
}

export default App;