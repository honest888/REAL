import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthService from "../services/auth.service";
import {
  Space,
  Title,
  Text,
  Grid,
  Button,
  Container,
  Card,
} from "@mantine/core";
import { Link } from "react-router-dom";
// import DropZone from "./dropzone.component";
import DropZone from "./drop-zone.component";

import React from "react";

type Props = {};

type State = {
  rilasciato: string;
  tipoDocumento: string;
  dataRilascio: string;
  numDocumento: string;
  luogoRilascio: string;
};

export default class RegisterStep3 extends Component<Props, State> {
  /*  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      rilasciato: "",
      tipoDocumento: "",
      dataRilascio: "",
      numDocumento: "",
      luogoRilascio: "",
    };
  }

  validationSchema() {
    return Yup.object().shape({
      rilasciato: Yup.string().required("Campo obbligatorio"),
      tipoDocumento: Yup.string().required("Campo obbligatorio"),
      dataRilascio: Yup.date().required("Campo obbligatorio"),
      numDocumento: Yup.string().required("Campo obbligatorio"),
      luogoRilascio: Yup.string().required("Campo obbligatorio"),
    });
  }

  handleSubmit(formValue: {
    rilasciato: string;
    tipoDocumento: string;
    dataRilascio: string;
    numDocumento: string;
    luogoRilascio: string;
  }) {
    const {
      rilasciato,
      tipoDocumento,
      dataRilascio,
      numDocumento,
      luogoRilascio,
    } = formValue;
  } */

  render() {
    /*   const initialValues = {
      rilasciato: "",
      tipoDocumento: "",
      dataRilascio: "",
      numDocumento: "",
      luogoRilascio: "",
    }; */

    return (
      <Container>
        <Title order={3}>Caricamento Documenti</Title>
        <Space h="xl" />

        <Grid grow mt={20}>
          <Grid.Col span={6}>
            <div className="form-group">
              <label htmlFor="issueEntity"> Rilasciato da </label>
              <Field
                name="issueEntity"
                type="text"
                className="form-control"
                placeholder="inserisci il nome dell'ente che ha rilasciato il documento"
              />
              <ErrorMessage
                name="issueEntity"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="documentType"> Tipo documento </label>
              <Field as="select" name="documentType">
                <option value="">Seleziona</option>
                <option value="carta">Carta d'identità</option>
                <option value="patente">Patente</option>
                <option value="passaporto">Passaporto</option>
              </Field>
              <ErrorMessage
                name="documentType"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="issueDate"> Data di rilascio </label>
              <Field name="issueDate" type="date" className="form-control" />
              <ErrorMessage
                name="issueDate"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="documentNumber">Numero del documento</label>
              <Field
                name="documentNumber"
                type="text"
                className="form-control"
                placeholder="Inserisci il numero del documento"
              />
              <ErrorMessage
                name="documentNumber"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="issuePlace">Luogo di rilascio</label>
              <Field
                name="issuePlace"
                type="text"
                className="form-control"
                placeholder="Inserisci il luogo di rilascio del documento"
              />
              <ErrorMessage
                name="issuePlace"
                component="div"
                className="alert alert-danger"
              />
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card shadow="sm" p="lg">
              <DropZone />
            </Card>
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
            <Link to={"/register/step4/"}>
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
      </Container>
    );
  }
}
