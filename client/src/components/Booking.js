import React, { useState, useRef } from "react";
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




const Booking = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [location, setLocation] = useState("");
  const [costCentre, setcostCentre] = useState("");
  const [date, setDate] = useState("");
  const [time,setTime] = useState("");
  const [numberOfPeople, setNop] = useState("");
  const [food, setFood] = useState("");
  const [drink, setDrink] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [employeeId,setEmployeeId] = useState("");
  const [purpose,setPurpose] = useState("");
  const onChangeEmployeeId = (e) => {
    const employeeId = e.target.value;
    setEmployeeId(employeeId);
  };


  const onChangeLocation = (e) => {
    const location = e.target.value;
    setLocation(location);
  };

  const onChangecostCentre = (e) => {
    const costCentre = e.target.value;
    setcostCentre(costCentre);
  };

  const onChangeDate = (e) => {
    const date = e.target.value;
    setDate(date);
  };

  const onChangeTime = (e) => {
    const time = e.target.value;
    setTime(time);
  };

  const onChangeNop = (e) => {
    const numberOfPeople = e.target.value;
    setNop(numberOfPeople);
  };

  const onChangeFood = (e) => {
    const food = e.target.value;
    setFood(food);
  };

  const onChangeDrink = (e) => {
    const drink = e.target.value;
    setDrink(drink);
  };
  const onChangePurpose= (e) => {
    const purpose = e.target.value;
    setPurpose(purpose);
  };


 
 

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

 //form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.Booking(location,costCentre,date,time,numberOfPeople,food,drink,employeeId).then(
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

  return (
    <div className="col-sm-20">
      <div className="card w-75">
      

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>

              <div className="form-group">
                <label htmlFor="employeeId">EmployeeId</label>
                <Input
                  type="text"
                  className="form-control"
                  name="employeeId"
                  value={employeeId}
                  onChange={onChangeEmployeeId}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <Input
                  type="text"
                  className="form-control"
                  name="location"
                  value={location}
                  onChange={onChangeLocation}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="costCentre">Cost Centre</label>
                <Input
                  type="text"
                  className="form-control"
                  name="costCentre"
                  value={costCentre}
                  onChange={onChangecostCentre}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Date</label>
                <Input
                  type="date"
                  className="form-control"
                  name="date"
                  value={date}
                  onChange={onChangeDate}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Time</label>
                <Input
                  type="time"
                  className="form-control"
                  name="time"
                  value={time}
                  onChange={onChangeTime}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nop">Number of People</label>
                <Input
                  type="number"
                  className="form-control"
                  name="numberOfPeople"
                  value={numberOfPeople}
                  onChange={onChangeNop}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="purpose">Purpose</label>
                <Input
                  type="text"
                  className="form-control"
                  name="purpose"
                  value={purpose}
                  onChange={onChangePurpose}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="food">Food</label>
                <Input
                  type="text"
                  className="form-control"
                  name="food"
                  value={food}
                  onChange={onChangeFood}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="drink">Drink</label>
                <Input
                  type="text"
                  className="form-control"
                  name="drink"
                  value={drink}
                  onChange={onChangeDrink}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Book</button>
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
  );
};

export default Booking;
