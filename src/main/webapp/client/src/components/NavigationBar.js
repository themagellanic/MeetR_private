import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class NavigationBar extends React.Component{

    render(){
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                
                <Container>
                <Link to={""} className="navbar-brand">
                    MeetR
                </Link> 
                
                
                <Nav className="me-auto">
                
                <Link to={"/request"} className="nav-link">
                    Add Request
                </Link>
                <Link to={"/showrequest"} className="nav-link">Show Request</Link>
                </Nav>
                </Container>
            </Navbar>
                    
                
            </div>
            
        );
    }

}

export default NavigationBar;