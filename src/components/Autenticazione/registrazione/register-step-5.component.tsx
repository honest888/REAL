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
  Button,
  Grid,
  Container,
  Card,
} from "@mantine/core";
import { Link } from "react-router-dom";
import React from "react";

type Props = {};

type State = {
  terminiCondizioni: boolean;
  statutoPrivacy: boolean;
};

export default class RegisterStep5 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      terminiCondizioni: false,
      statutoPrivacy: false,
    };
  }

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
  }

  render() {
    const initialValues = {
      terminiCondizioni: false,
      statutoPrivacy: false,
    };

    return (
      <Container>
        <Title order={3}>Face ID</Title>
        <Space h="xl" />
        <Card withBorder p="lg" mb={20} children={undefined}></Card>

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
            <Link to={"/register/step6/"}>
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
