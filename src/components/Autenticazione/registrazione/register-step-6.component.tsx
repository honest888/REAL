import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthService from "../services/auth.service";
import {
  Space,
  Title,
  Text,
  Box,
  Divider,
  Grid,
  SimpleGrid,
  Button,
  Container,
  Card,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { IFormValues } from "../types/form-values.type";
import React from "react";

type Props = { formValues: IFormValues };

type State = IFormValues;

export default class RegisterStep6 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    /*  this.handleSubmit = this.handleSubmit.bind(this); */

    this.state = {
      username: props.formValues.username,
      phone: props.formValues.phone,
      email: props.formValues.email,
      password: props.formValues.password,
      /*  successful: false,
      message: props, */
      name: props.formValues.name,
      surname: props.formValues.surname,
      fiscalCode: props.formValues.fiscalCode,
      genre: props.formValues.genre,
      birthday: props.formValues.birthday,
      address: props.formValues.address,
      houseNumber: props.formValues.houseNumber,
      province: props.formValues.province,
      municipality: props.formValues.municipality,
      cap: props.formValues.cap,
      issueEntity: props.formValues.issueEntity,
      documentType: props.formValues.documentType,
      issueDate: props.formValues.issueDate,
      documentNumber: props.formValues.documentNumber,
      issuePlace: props.formValues.issuePlace,
      terminiCondizioni: props.formValues.terminiCondizioni,
      statutoPrivacy: props.formValues.statutoPrivacy,
      faceFile: props.formValues.faceFile,
      role: props.formValues.role,
    };
  }
  /*
  validationSchema() {
    return Yup.object().shape({
      terminiCondizioni: Yup.boolean().required("Campo obbligatorio"),
      statutoPrivacy: Yup.boolean().required("Campo obbligatorio"),
    });
  }

  handleSubmit(formValue: {
    terminiCondizioni: boolean;
    statutoPrivacy: boolean;
  }) {
    const { terminiCondizioni, statutoPrivacy } = formValue;
  } */

  render() {
    /* const initialValues = {
      terminiCondizioni: false,
      statutoPrivacy: false,
    }; */

    return (
      <Container>
        <Title order={3}>Riepilogo</Title>
        <Space h="xl" />
        <Card withBorder p="lg" mb={20}>
          <Box>
            <Text transform="uppercase">Dati e registrazione</Text>
            <span></span>
            <Divider my="sm" />

            <SimpleGrid cols={2}>
              <div>USERNAME</div>
              <div>{this.props.formValues.username}</div>
              <div>EMAIL</div>
              <div>{this.props.formValues.email}</div>
              <div>TELEFONO</div>
              <div>{this.props.formValues.phone}</div>
            </SimpleGrid>
          </Box>
        </Card>

        <Card withBorder p="lg" mb={20}>
          <Box>
            <Text transform="uppercase">Dati personali</Text>
            <Divider my="sm" />
            <SimpleGrid cols={2}>
              <div>NOME E COGNOME</div>
              <div>
                {this.props.formValues.name +
                  " " +
                  this.props.formValues.surname}
              </div>
              <div>CODICE FISCALE</div>
              <div>{this.props.formValues.fiscalCode}</div>
              <div>SESSO</div>
              <div>{this.props.formValues.genre}</div>
              <div>DATA DI NASCITA</div>
              <div>{this.props.formValues.birthday}</div>
              <div>INDIRIZZO DI RESIDENZA</div>
              <div>{this.props.formValues.address}</div>
              <div>PROVINCIA DI RESIDENZA</div>
              <div>{this.props.formValues.province}</div>
              <div>COMUNE DI RESIDENZA</div>
              <div>{this.props.formValues.municipality}</div>
              <div>CAP</div>
              <div>{this.props.formValues.cap}</div>
            </SimpleGrid>
          </Box>
        </Card>
        <Card withBorder p="lg">
          <Box>
            <Text transform="uppercase">Dati personali</Text>
            <Divider my="sm" />
            <SimpleGrid cols={2}>
              <div>TIPO DI DOCUMENTO</div>
              <div>{this.props.formValues.documentType}</div>
              <div>RILASCIATO DA</div>
              <div>{this.props.formValues.issuePlace}</div>
              <div>DATA DI RILASCIO</div>
              <div>{this.props.formValues.issueDate}</div>
              <div>NUMERO DI DOCUMENTO</div>
              <div>{this.props.formValues.documentNumber}</div>
              <div>LUOGO DI RILASCIO</div>
              <div>{this.props.formValues.issuePlace}</div>
              <div>ALLEGATI</div>
              <div></div>
            </SimpleGrid>
          </Box>
        </Card>
        <Grid justify="center" align="center" mt={20}>
          <Grid.Col span={4}>
            <Link to={"/register/step5/"}>
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
            </Link>
          </Grid.Col>
          <Grid.Col span={4}>
            <Button
              type="submit"
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
              Conferma
            </Button>
          </Grid.Col>
        </Grid>
      </Container>
    );
  }
}
