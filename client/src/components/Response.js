import React, { useState, useEffect } from "react";
import EventBus from "../common/EventBus";
import UserService from "../services/user.service";
import './table.css';
import {Form,Col,Row} from "react-bootstrap";
import axios from "axios";
import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";
const API_URL1 = "http://localhost:8081/api/request/";

const Response = ({match}) => {
  
  const token=match.params.token;
  const [color,setColor] = useState("#c4443b");
  const [con, setContent] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [copied, setCopied] = useState(false);
  const [editButton,setEditButton]=useState(false);
  const [declineButton,setDeclineButton]=useState(false);
  const clickMe = () => {
    //console.log("click me");
    
    const request = JSON.parse(localStorage.getItem('request'));
    //console.log("token= "+request.token);

    //window.location.replace(`http://localhost:8082/request/edit/${request.token}`);
     window.location = `http://localhost:8082/request/edit/${request.token}`;
  }
  const clickMe2 = ()=>{
    axios.post(API_URL1+`${token}/declined`, 
      { headers: authHeader() }
     ).then((response) => {
      window.location.replace(`http://localhost:8082/request/${token}`);
     });
  }
    
  
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setEditButton(user.roles.includes("ROLE_ADMIN"));
      setDeclineButton(user.roles.includes("ROLE_ADMIN"));
    }
    UserService.oneRequest(token).then(
      (response) => {
        console.log(response);
        //c=response.data;
        //content=c;
        localStorage.setItem("request", JSON.stringify(response.data));
        setContent(response.data);
        console.log(con);
        //console.log(response);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);
  
  function copy() {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
   
  function sendStatus(status){
    if(status=="PENDING_STATUS"){
      //setColor("#f2b10c");
      return "Pending";
    }else if(status=="APPROVED"){
      //setColor("#00eb00")
      return "Approved";
    }
    else {
      return "Rejected";
    }
  }
  function room(room){
    if(room==null)
      return "Room is yet to be assigned";
    else 
      return "Room Number is "+room;
  }
  function cost(cost){
    if(cost==null)
      return "Cost is yet to be decided";
    else return "Total Cost is      "+cost;
  }
  
    
  return (


<div>

{/* <Form>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue="email@example.com" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  
</Form> */}




          <table border="1px">
            <th>http://localhost:8082/request/{con.token}</th>
            <th><button className="btn btn-primary" onClick={copy}>{!copied ? "Copy link" : "Copied!"}</button></th>
          </table>
      
           <table>
             
             <tr>
             <th>Status <span className="dot" style={{
               backgroundColor: con.status=="PENDING_STATUS"?"#fc9803":con.status=="APPROVED"?"#32a852":"#fcba03" ,
               
             }}></span>{sendStatus(con.status)}</th>
             </tr>
             <tr>
               <th>Cost Centre {con.costCentre}</th>
             </tr>
             <tr>
               <th>Location {con.location}</th>
             </tr>
             
             <tr>
               <th>Number Of People {con.numberOfPeople}</th>
             </tr>
             <tr>
               <th>Time {con.time}</th>
             </tr>
             <tr>
               <th>Food {con.food}</th>
             </tr>
             <tr>
               <th>Date {con.date}</th>
             </tr>
             <tr>
               <th>{room(con.roomNumber)}</th>
             </tr>
             <tr>
               <th>{cost(con.cost)}</th>
             </tr>
             

            
             {editButton && <button className="btn btn-secondary" onClick={() => clickMe()}>Edit</button>}
             {declineButton && <button  className="btn btn-danger" onClick={()=>clickMe2()}>Decline</button>}
           </table> 
        </div> 

      
        
  )
}


export default Response;