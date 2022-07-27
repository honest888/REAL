import { Component, ReactNode } from "react";
import { Button, Card, Space, Title, Text } from "@mantine/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";

type Props = {};

type State = {
  email: string;
  successful: boolean;
  message: string;
  loading: boolean;
};

export default class ResetPassword extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      email: "",
      loading: false,
      successful: false,
      message: "",
    };
  }

  validationSchema() {
    return Yup.object().shape({
      email: Yup.string().required("Campo Obbligatorio!"),
    });
  }

  handleReset(formValue: { email: string }) {
    const { email } = formValue;

    this.setState({
      message: "",
      loading: true,
    });

    //Chiamo il servizio per vedere se e' presente la mail, se si allora permetto il reset
    //altrimenti do messaggio di errore
  }

  render(): ReactNode {
    const { loading, message } = this.state;
    const initialValues = {
      email: "",
    };
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <Title order={1}>Hai dimenticato la passsword ?</Title>
          <Space h="xs" />
          <Text size="xs">
            Inserisci il tuo indirizzo e-mail utilizzato per la registrazione.
          </Text>
          <Text size="xs">
            Ti invieremo un codice per reimpostare la password.
          </Text>
          <Space h="xl" />
          <Title order={3}>Reimposta la password</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleReset}
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
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Reimposta Password</span>
                </button>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}
