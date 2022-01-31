import React, { useState, useEffect } from "react";
import './table.css'
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";


  
  
const BoardAdmin = () => {
  const [content, setContent] = useState([]);

  
  
  const clickMe = (data) => {
    console.log(data);
    window.location = `http://localhost:8082/request/${data.token}`;  
  }
  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);

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
  
 // console.log({content});


let arr;
  return (      
    <div>
        <table>
            <tr>
            <th>Employee Id</th>
            <th>Location</th>
            <th>Cost Centre</th>
            </tr>
            <tbody>
            {
              content.map((item) => (
                  arr=item,
                  <tr>
                  <td >{item.employeeId}</td>
                  <td>{item.location}</td>
                  <td>{item.costCentre}</td>
                  <td ><button onClick={() => clickMe({token:item.token}) } className="btn btn-warning">{item.status}</button></td>
                  </tr>
              ))
           }
           </tbody>
   
        </table>

    </div>
  )
}

export default BoardAdmin;

