import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthService from "../services/auth.service";
import { Space, Title, Text, Container, Grid, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import DropZone from "./dropzone.component";
import React from "react";

type Props = {};

type State = {
  nome: string;
  cognome: string;
  codiceFiscale: string;
  sesso: string;
  dataNascita: string;
  indirizzoResidenza: string;
  numeroCivico: string;
  provinciaResidenza: string;
  comuneResidenza: string;
  cap: string;
};

export default class RegisterStep2 extends Component<Props, State> {
  /* constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      nome: "",
      cognome: "",
      codiceFiscale: "",
      sesso: "",
      dataNascita: "",
      indirizzoResidenza: "",
      numeroCivico: "",
      provinciaResidenza: "",
      comuneResidenza: "",
      cap: "",
    };
  } */

  /* validationSchema() {
    return Yup.object().shape({
      nome: Yup.string().required("Campo obbligatorio"),
      cognome: Yup.string().required("Campo obbligatorio"),
      codiceFiscale: Yup.string()
        .matches(
          /^(?:[A-Z][AEIOU][AEIOUX]|[AEIOU]X{2}|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/,
          "Codice fiscale errato"
        )
        .required("Campo obbligatorio"),
      sesso: Yup.string().required("Campo obbligatorio"),
      dataNascita: Yup.date().required("Campo obbligatorio"),
      indirizzoResidenza: Yup.string().required("Campo obbligatorio"),
      numeroCivico: Yup.string().required("Campo obbligatorio"),
      provinciaResidenza: Yup.string().required("Campo obbligatorio"),
      comuneResidenza: Yup.string().required("Campo obbligatorio"),
      cap: Yup.string()
        .matches(/^[0-9]{5}$/, "Inserisci un CAP corretto")
        .required("Campo obbligatorio"),
    });
  }
 */
  /*  handleSubmit(formValue: {
    nome: string;
    cognome: string;
    codiceFiscale: string;
    sesso: string;
    dataNascita: string;
    indirizzoResidenza: string;
    numeroCivico: string;
    provinciaResidenza: string;
    comuneResidenza: string;
    cap: string;
  }) {
    const {
      nome,
      cognome,
      codiceFiscale,
      sesso,
      dataNascita,
      indirizzoResidenza,
      numeroCivico,
      provinciaResidenza,
      comuneResidenza,
      cap,
    } = formValue;
  } */

  render() {
    /*    const initialValues = {
      nome: "",
      cognome: "",
      codiceFiscale: "",
      sesso: "",
      dataNascita: "",
      indirizzoResidenza: "",
      numeroCivico: "",
      provinciaResidenza: "",
      comuneResidenza: "",
      cap: "",
    }; */

    return (
      <Container>
        <Title order={1}>Crea il tuo account</Title>
        <Space h="xl" />
        <Title order={3}>Dati Personali</Title>

        <Grid grow mt={20}>
          <Grid.Col span={6}>
            <div className="form-group">
              <label htmlFor="name"> Nome </label>
              <Field
                name="name"
                type="text"
                className="form-control"
                placeholder="inserisci il tuo nome"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="surname"> Cognome </label>
              <Field
                name="surname"
                type="text"
                className="form-control"
                placeholder="inserisci il tuo cognome"
              />
              <ErrorMessage
                name="surname"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="fiscalCode"> Codice Fiscale </label>
              <Field
                name="fiscalCode"
                type="text"
                className="form-control"
                placeholder="inserisci il tuo codice fiscale"
              />
              <ErrorMessage
                name="fiscalCode"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="genre"> Sesso </label>
              <Field as="select" name="genre">
                <option value="">Seleziona</option>
                <option value="M">Uomo</option>
                <option value="F">Donna</option>
                <option value="O">Altro</option>
              </Field>
              <ErrorMessage
                name="genre"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthday"> Data di nascita </label>
              <Field name="birthday" type="date" className="form-control" />
              <ErrorMessage
                name="birthday"
                component="div"
                className="alert alert-danger"
              />
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div className="form-group">
              <label htmlFor="address">Indirizzo di residenza</label>
              <Field
                name="address"
                type="text"
                className="form-control"
                placeholder="inserisci l'indirizzo di residenza"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="houseNumber"> Numero Civico </label>
              <Field
                name="houseNumber"
                type="text"
                className="form-control"
                placeholder="inserisci il numero civico"
              />
              <ErrorMessage
                name="houseNumber"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="province">Provincia Residenza</label>
              <Field
                name="province"
                type="text"
                className="form-control"
                placeholder="inserisci la tua provincia di residenza"
              />
              <ErrorMessage
                name="province"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="municipality"> Comune Residenza </label>
              <Field
                name="municipality"
                type="text"
                className="form-control"
                placeholder="inserisci il tuo comune di residenza"
              />
              <ErrorMessage
                name="municipality"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cap"> CAP </label>
              <Field
                name="cap"
                type="text"
                className="form-control"
                placeholder="inserisci il tuo CAP"
              />
              <ErrorMessage
                name="cap"
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
            <Link to={"/register/step3/"}>
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
