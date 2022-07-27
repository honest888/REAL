import axios, { AxiosResponse } from "axios";
import { IFormValues } from "../types/form-values.type";

const API_URL = "http://localhost:8080/api/auth/";
const API_URL_SIGNUP = "http://localhost:8080/api/v1/auth/signup";
const API_URL_SIGNUP_VERIFY = "http://localhost:8080/api/v1/auth/verifySignup";
const API_URL_LOGIN = "http://localhost:8080/api/v1/auth/login";
const API_URL_LOGIN_VERIFY = "http://localhost:8080/api/v1/auth/verifyLogin";

interface IResponse {
  return_value: boolean;
  message: string;
}

class AuthService {
  /* login(email: string, password: string) {
    return axios
      .post(API_URL + "login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  } */

  logout() {
    localStorage.removeItem("user");
  }

  register(username: string, email: string, password: string) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
  //Mando solo nome ed email per farmi inviare il codice otp
  signUp(formValues: IFormValues): Promise<AxiosResponse<IResponse>> {
    return axios.post(API_URL_SIGNUP, {
      email: formValues.email,
      name: formValues.username,
    });
  }

  //Inserisco il codice otp e mando il mio form compilato
  signUpVerify(formValues: IFormValues, otp: string) {
    return axios.post(API_URL_SIGNUP_VERIFY, {
      formValues,
      otp: otp,
    });
  }
  //Inserisco il codice otp e mando il mio form compilato
  login(email: string, psw: string) {
    return axios.post(API_URL_LOGIN, {
      email: email,
      password: psw,
    });
  }

  loginVerify(email: string, psw: string, otp: string) {
    return axios.post(API_URL_LOGIN_VERIFY, {
      email: email,
      password: psw,
      otp: otp,
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
