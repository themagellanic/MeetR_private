import React,{Component} from 'react';
import {Card,Table} from 'react-bootstrap';

export default class RequestList extends Component
{
    render(){
        return (
            <Card className="border border-dark ">
                <Card.Header>List of Requests</Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                    <thead>
    <tr>
      <th>#</th>
      <th>EmployeeId</th>
      <th>Location</th>
      <th>Capacity</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>SG0345678</td>
      <td>Bangalore</td>
      <td>6</td>
      <td>Pending</td>
    </tr>
    <tr>
    <td>2</td>
      <td>SG0345172</td>
      <td>LakeView</td>
      <td>4</td>
      <td>Pending</td>
    </tr>
    <tr>
    <td>3</td>
      <td>SG0345263</td>
      <td>Chennai</td>
      <td>2</td>
      <td>Pending</td>
    </tr>
  </tbody>

                    </Table>
                </Card.Body>
            </Card>
        );
    }
        
    
}
