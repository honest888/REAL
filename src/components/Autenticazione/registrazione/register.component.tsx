import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Space, Title, Text, Grid, Container, Button } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

type Props = {};

type State = {};

export default class Register extends Component<Props, State> {
  /* constructor(props: Props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);

   
  } */

  /*   validationSchema() {
    return Yup.object().shape({
      username: Yup.string()
        .test(
          "len",
          "Il nome utente deve essere tra i 3 e 20 caratteri.",
          (val: any) =>
            val && val.toString().length >= 3 && val.toString().length <= 20
        )
        .required("Campo obbligatorio"),
      email: Yup.string()
        .email("Email non valida")
        .required("Campo obbligatorio"),
      confEmail: Yup.string()
        .oneOf([Yup.ref("email"), null, "Le email non corrispondono"])
        .email("Email non valida")
        .required("Campo obbligatorio"),
      password: Yup.string()
        .test(
          "len",
          "La password deve essere tra i 6 e i 20 caratteri.",
          (val: any) =>
            val && val.toString().length >= 6 && val.toString().length <= 40
        )
        .required("Campo obbligatorio"),
      confPassword: Yup.string()
        .test(
          "len",
          "La password deve essere tra i 6 e i 20 caratteri.",
          (val: any) =>
            val && val.toString().length >= 6 && val.toString().length <= 40
        )
        .oneOf([Yup.ref("password"), null], "Le password non corrispondono")
        .required("Campo obbligatorio"),
    });
  } */

  /*  handleRegister(formValue: {
    username: string;
    telefono: string;
    email: string;
    password: string;
  }) {
    const { username, telefono, email, password } = formValue;

    this.setState({
      message: "",
      successful: false,
    }); */

  //Deve essere fatto alla fine dello wizard
  /*    AuthService.register(username, email, password).then(
      (response) => {
        this.setState({
          message: response.data.message,
          successful: true,
        });
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage,
        });
      }
    );
  }*/

  render() {
    /*  const { successful, message } = this.state;

    const initialValues = {
      username: "",
      telefono: "",
      email: "",
      confEmail: "",
      password: "",
      confPassword: "",
    }; */

    return (
      <Container>
        <Title order={3}>Dati di registrazione</Title>

        {/*  {!successful && ( */}
        <Grid grow mt={20}>
          <Grid.Col span={6}>
            <div className="form-group">
              <label htmlFor="username"> Username </label>
              <Field
                name="username"
                type="text"
                className="form-control"
                placeholder="inserisci il tuo username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono"> Telefono </label>
              <Field
                name="phone"
                type="text"
                className="form-control"
                placeholder="inserisci il tuo numero di telefono"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email"> Email </label>
              <Field
                name="email"
                type="email"
                className="form-control"
                placeholder="inserisci la tua email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="alert alert-danger"
              />
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div className="form-group">
              <label htmlFor="confEmail">Conferma Email </label>
              <Field
                name="confEmail"
                type="email"
                className="form-control"
                placeholder="Conferma Email"
              />
              <ErrorMessage
                name="confEmail"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password"> Password </label>
              <Field
                name="password"
                type="password"
                className="form-control"
                placeholder="Inserisci la tua password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confPassword"> Conferma Password </label>
              <Field
                name="confPassword"
                type="password"
                className="form-control"
                placeholder="Conferma Password"
              />
              <ErrorMessage
                name="confPassword"
                component="div"
                className="alert alert-danger"
              />
            </div>
          </Grid.Col>
        </Grid>
        <Grid justify="center" align="center" mt={20}>
          <Grid.Col span={4}>
            <Button
              variant="outline"
              styles={(theme) => ({
                root: {
                  height: 40,
                  width: 300,
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                outline: {
                  backgroundColor: "#FFFFFF",
                  borderBlockColor: "#000000",
                  color: "#000000",

                  "&:hover": {
                    backgroundColor: theme.fn.darken("#E6E6E6", 0.05),
                  },
                  "&:disabled": {
                    backgroundColor: theme.fn.darken("#B9B9B9", 0.05),
                    borderBlockColor: theme.fn.darken("#B9B9B9", 0.05),
                  },
                },
              })}
            >
              Annulla
            </Button>
          </Grid.Col>
          <Grid.Col span={4}>
            <Link to={"/register/step2/"}>
              <Button
                styles={(theme) => ({
                  root: {
                    backgroundColor: "#800020",
                    border: 0,
                    height: 40,
                    width: 300,
                    paddingLeft: 20,
                    paddingRight: 20,

                    "&:hover": {
                      backgroundColor: theme.fn.darken("#630A21", 0.05),
                    },
                    "&:disabled": {
                      backgroundColor: theme.fn.darken("#BB8291", 0.05),
                    },
                  },
                })}
              >
                Avanti
              </Button>
            </Link>
          </Grid.Col>
        </Grid>
        {/* <div className="form-group">
          <Button color="white">Annulla</Button>
        </div>
        <div className="form-group">
          <Link to={"/register/step2/"} replace>
            <Button  color="red">Avanti</Button>
          </Link>
        </div> */}

        {/*  )} */}
        {/* Gestione da fare nell componente register-container
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
              )} */}
      </Container>
    );
  }
}
