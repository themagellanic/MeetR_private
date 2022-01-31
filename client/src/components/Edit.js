import React, { useState, useEffect,useRef } from "react";
import EventBus from "../common/EventBus";
import UserService from "../services/user.service";
import './table.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const Edit = ({match}) => {
  //const token=match.params.token;
  const form = useRef();
  const checkBtn = useRef();
  const token=match.params.token;
  const [color,setColor] = useState("#c4443b");
  const [con, setContent] = useState([]);
  const [roomNumber, setRoomNumber] = useState("");
  const [cost, setCost] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState(""); 
 
 

  const onChangeRoomNumber = (e) => {
    const roomNumber = e.target.value;
    setRoomNumber(roomNumber);
  };

  const onChangeCost = (e) => {
    const cost = e.target.value;
    setCost(cost);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

 //form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.edit(roomNumber,cost,token).then(
        (response) => {
              window.location = `http://localhost:8082/request/${response.token}`;
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
      
    }
  };
  function room(room){
    if(room==null)
      return "Room is yet to be assigned";
    else 
      return "Room Number is "+room;
  }
  function costShow(cost){
    if(cost==null)
      return "Cost is yet to be decided";
    else return "Total Cost is"+cost;
  }
  const [copied, setCopied] = useState(false);

  // const clickMe = () => {
   
    
  //   const request = JSON.parse(localStorage.getItem('request'));
  //   console.log("token= "+request.token);

  //   //window.location.replace(`http://localhost:8082/request/edit/${request.token}`);
  //    window.location = `http://localhost:8082/request/${request.token}`;
  // }
  
  useEffect(() => {
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
    
  return (
      
        <div>
          <table border="1px">
            <th>http://localhost:8082/request/{con.token}</th>
            <th><button className="btn btn-primary" onClick={copy}>{!copied ? "Copy link" : "Copied!"}</button></th>
          </table>
           {/* <table>
             <tr>
             <th><span className="dot" style={{
               backgroundColor: con.status=="PENDING_STATUS"?"#fc9803":"#fcba03"
             }}></span>{sendStatus(con.status)}</th>
             </tr>
             <tr>
               <th>{con.costCentre}</th>
             </tr>
             <tr>
               <th>{con.location}</th>
             </tr>
             </table> */}

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
               <th>{costShow(con.cost)}</th>
             </tr>
             </table>
             <div className="col-lg-12">
      <div className="card w-90">
             <Form onSubmit={handleEdit} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="roomNumber">Room Number</label>
                <Input
                  type="number"
                  className="form-control"
                  name="roomNumber"
                  value={roomNumber}
                  onChange={onChangeRoomNumber}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cost">Cost </label>
                <Input
                  type="number"
                  className="form-control"
                  name="cost"
                  value={cost}
                  onChange={onChangeCost}
                  validations={[required]}
                />
              </div>

              
              <div className="form-group">
                <button className="btn btn-success">Approve</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >

                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        </div>
        </div>       
        </div>
  )
}

export default Edit;