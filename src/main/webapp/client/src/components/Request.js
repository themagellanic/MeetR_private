import React,{Component} from 'react';
import {Card,Form,Button} from 'react-bootstrap';



export default class Request extends Component
{
    render(){
        return (
            <Card>
                <Card.Header>Add a request</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>EmployeeId</Form.Label>
                            <Form.Control placeholder="SG0314899" name="employeeId" disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        
                            <Form.Label>Select preferred location</Form.Label>
                            <Form.Select enabled placeholder="Select a location" name="location">
                            <option>Montevideo, UY</option>
                            <option>Richmond, UK</option>
                            <option>Singapore, SG</option>
                            <option>Bangalore, IN</option>
                            <option>Krakow, PL</option>
                            <option>Southlake, TX</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Number of People</Form.Label>
                            <Form.Control type="text" pattern="[0-9]*" name="numPeople"></Form.Control>
                        </Form.Group> 

                        <Form.Group className="mb-3">
                            <Form.Label>Food & Beverage Requirement</Form.Label>
                            <Form.Group className="mb-3">
                                <Form.Label>Select Food Item</Form.Label>
                                <Form.Select enabled placeholder="Select a location" name="food">
                                
                                    <option>Cheese Burger</option>
                                    <option>Onion Pizza</option>
                                    <option>Salad</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Select Beverage</Form.Label>
                                <Form.Select enabled placeholder="Select a food" name="beverage">
                                    <option>Orange Juice</option>
                                    <option>Coke</option>
                                    <option>Mineral Water</option>
                                </Form.Select>
                            </Form.Group>
                        </Form.Group> 
                       
                        
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

