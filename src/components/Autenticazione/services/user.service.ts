import axios, {AxiosRequestHeaders} from "axios";
import authHeader from "./auth-header";
import React from "react";

const API_URL = "http://localhost:8080/api/test/";
const API_URL_SIGNUP = "http://localhost:8080/api/v1/auth/signup";

type Response = {
  data: string,
  message: string,
  return_value: boolean;
};

class UserService {


  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get<Response>(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
