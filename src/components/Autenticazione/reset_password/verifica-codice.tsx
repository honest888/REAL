import { Space, Title, Text, Modal } from "@mantine/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

type Props = {
  handleClick: () => boolean;
  isOpen: boolean;
  handleCodice: (code: string) => void;
};

type State = {
  codice: string;
  successful: boolean;
  message: string;
  loading: boolean;
  open: boolean;
};

export default class VerificaCodice extends Component<Props, State> {
  constructor(prop: Props) {
    super(prop);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      codice: "",
      successful: false,
      message: "",
      loading: false,
      open: true,
    };
  }
  validationSchema() {
    return Yup.object().shape({
      codice: Yup.string().required("Campo Obbligatorio!"),
    });
  }
  //
  handleSubmit(code: string) {
    this.props.handleCodice(code);
  }

  render(): ReactNode {
    /*  const { loading, message } = this.state; */
    const initialValues = {
      codice: "",
    };
    return (
      <>
        <Modal
          opened={this.props.isOpen}
          onClose={() => this.props.handleClick()}
        >
          <div className="col-md-12">
            <div className="card card-container">
              <Title order={1}>Verifica Codice</Title>
              <Space h="xs" />
              <Text size="xs">
                Abbiamo inviato un codice al tuo indirizzo email.
              </Text>
              <Text size="xs">
                Inserisci il codice ricevuto nel campo sottostante.
              </Text>
              <Space h="xl" />

              <Formik
                initialValues={initialValues}
                validationSchema={this.validationSchema}
                onSubmit={(value) => {
                  this.handleSubmit(value.codice);
                }}
              >
                <Form>
                  <div className="form-group">
                    <label htmlFor="codice">Codice di recupero</label>
                    <Field
                      name="codice"
                      type="number"
                      className="form-control"
                      placeholder="Inserisci il codice"
                    />
                    <ErrorMessage
                      name="codice"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={this.state.loading}
                    >
                      {this.state.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Verifica codice </span>
                    </button>
                  </div>

                  {this.state.message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {this.state.message}
                      </div>
                    </div>
                  )}
                </Form>
              </Formik>
            </div>

            <Link to="/reset">
              <Text underline>Hai dimenticato la password ?</Text>
            </Link>
          </div>
        </Modal>
      </>
    );
  }
}
