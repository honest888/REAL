import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Switch,
  Text,
  Center,
  Divider,
  Button,
  Title,
  Space,
  Grid,
  Container,
} from "@mantine/core";

import AuthService from "../services/auth.service";
import VerificaCodice from "../reset_password/verifica-codice";

/* interface RouterProps {
  history: string;
} */

type Props = {};

type State = {
  email: string;
  password: string;
  loading: boolean;
  message: string;
  openModal: boolean;
  codice: string;
};

export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClickModal = this.handleClickModal.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: "",
      openModal: false,
      codice: "",
    };
  }

  validationSchema() {
    return Yup.object().shape({
      email: Yup.string().required("Campo Obbligatorio!"),
      password: Yup.string().required("Campo Obbligatorio!"),
    });
  }

  handleClick() {
    //Gestire la chiamata del reset pasword
  }

  handleLogin(formValue: { email: string; password: string }) {
    const { email, password } = formValue;

    this.setState({
      message: "",
      loading: true,
    });
    //Finire la gestionedelle chiamate per il login
    AuthService.login(email, password).then(
      () => {
        this.setState({
          openModal: true,
        });
        /* this.props.history.push("/profile");
        window.location.reload(); */
        //Dovra' diventare la dashboard
        /* let navigate = useNavigate();
        navigate("/profile", { replace: true }); */
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage,
        });
      }
    );
  }

  handleClickModal(): boolean {
    this.setState({
      openModal: !this.state.openModal,
    });
    return this.state.openModal;
  }

  handleValueCodice(code: string): void {
    this.setState({
      codice: code,
    });
    /*  AuthService.signUpVerify() */
    AuthService.loginVerify(this.state.email, this.state.password, code).then(
      (response) => {
        console.log("response:", response.data);
        if (response.data?.return_value) {
          this.setState({
            openModal: false,
          });
          let navigate = useNavigate();
          navigate("/login", { replace: true });
          //Redirect alla dashboard
        } else {
          //Errore nel form, gestirlo in qualche maniera
        }
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          // successful: false,
          message: resMessage,
        });
      }
    );
  }

  render() {
    const { loading, message } = this.state;

    const initialValues = {
      email: "",
      password: "",
    };

    return (
      <>
        <Container>
          <Title order={1}>Bentornato</Title>
          <Space h="xs" />
          <Text size="xs">
            Effettua il login per accedere alla tua area personale
          </Text>
          <Space h="xl" />
          <Title order={3}>Login</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleLogin}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Inserisci la tua email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
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
                <Switch
                  label="Ricordami su questo computer"
                  size="md"
                  color="green"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
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
                Accedi
              </Button>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
          <Center>
            <Link to="/reset">
              <Text underline>Hai dimenticato la password ?</Text>
            </Link>
          </Center>

          <Divider my="xs" label="Oppure" labelPosition="center" />

          <Button
            component={Link}
            to="/register"
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
            Crea il tuo account
          </Button>
        </Container>
        <VerificaCodice
          isOpen={this.state.openModal}
          handleClick={this.handleClickModal}
          handleCodice={this.handleValueCodice}
        ></VerificaCodice>
      </>
    );
  }
}
