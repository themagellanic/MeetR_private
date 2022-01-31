import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/test/";
const API_URL1 = "http://localhost:8081/api/request/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const requestResponse = (data) => {
  
  return axios.get(API_URL1 + data.token, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL1 + "requests", { headers: authHeader() });
};
const oneRequest = (token) =>{
  
  return axios.get(API_URL1+`${token}`, { headers: authHeader() });
}

// const edit = (token)=>{
//   return axios.get(API_URL1+`edit/${token}`,{headers:authHeader()});
// }


export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  requestResponse,
  oneRequest
};
// { headers: authHeader() }