import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/auth/";
const API_URL1 = "http://localhost:8081/api/request/";


const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const Booking = (location,costCentre,date,time,numberOfPeople,food,beverage,employeeId) => {
  //console.log(location,costCentre,date,time,nop,food,drink);
  console.log("Booking is called");
  const user = JSON.parse(localStorage.getItem('user'));
const token=user.accessToken;
  return axios.post(API_URL1+"submit" , {
   location,costCentre,date,time,numberOfPeople,food,beverage,employeeId
  }, {
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  }).then((response) => {
    //console.log("response of submit" + response.data);
    //localStorage.setItem("request", JSON.stringify(response.data));
    //return axios.get(API_URL1+response.data.token, { headers: authHeader() }); // using response.data
    return response.data;
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};
const edit = (cost, roomNumber,token) => {
  return axios
    .post(API_URL1 + `edit/${token}`, {
      cost,
      roomNumber,
    },{ headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};


const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};



export default {
  register,
  Booking,
  login,
  logout,
  getCurrentUser,
  edit
};

