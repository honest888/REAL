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
  Button,
  Container,
  Checkbox,
  Card,
} from "@mantine/core";
import { Link } from "react-router-dom";
import React from "react";

type Props = {};

type State = {
  terminiCondizioni: boolean;
  statutoPrivacy: boolean;
};

export default class RegisterStep4 extends Component<Props, State> {
  /* constructor(props: Props) {
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
  } */

  render() {
    /*  const initialValues = {
      terminiCondizioni: false,
      statutoPrivacy: false,
    }; */

    return (
      <Container>
        <Title order={3}>Statuto, Fori e Consensi</Title>
        <Space h="xl" />
        <Card withBorder p="lg" mb={20}>
          <Box>
            <Text transform="uppercase">Termini e condizioni</Text>
            <Divider my="sm" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ullamcorper tortor dui, at facilisis arcu vestibulum
              vitae. Proin faucibus malesuada dui, eu vestibulum diam maximus a.
              Cras mi orci, porta dapibus lacinia sit amet, iaculis ut odio.
              Aliquam elementum lacus tortor, non maximus mauris laoreet a. In
              vel nulla elit. Etiam a erat lorem. Praesent ipsum ex, finibus ut
              leo eget, suscipit aliquet velit. Aliquam sed rhoncus enim. Etiam
              luctus enim nec velit hendrerit egestas. Aliquam et erat pulvinar,
              dictum mauris vel, pretium quam. Suspendisse a tellus lacus.
              Nullam scelerisque accumsan ligula tristique pellentesque.
              Maecenas hendrerit leo urna. Mauris non tincidunt ante, quis
              interdum mauris. Maecenas tempor euismod enim, eget imperdiet
              mauris vehicula sit amet. Nunc egestas a augue a cursus. Curabitur
              at interdum sapien. Etiam semper dolor id ante rhoncus mattis.
              Vestibulum semper maximus ipsum, sed sollicitudin velit cursus at.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Sed congue nisi vel viverra accumsan.
            </p>
            <div className="form-group">
              {/* Trovare un mondo per usare formik con mantine */}
              <Checkbox name="terminiCondizioni" label="Accetto"></Checkbox>
              {/* <label>
              <Field name="terminiCondizioni" type="checkbox" />
              Accetto
            </label> */}
              <ErrorMessage
                name="terminiCondizioni"
                component="div"
                className="alert alert-danger"
              />
            </div>
          </Box>
        </Card>
        <Card withBorder p="lg" mb={20}>
          <Box>
            <Text transform="uppercase">Statuto privacy</Text>
            <Divider my="sm" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ullamcorper tortor dui, at facilisis arcu vestibulum
              vitae. Proin faucibus malesuada dui, eu vestibulum diam maximus a.
              Cras mi orci, porta dapibus lacinia sit amet, iaculis ut odio.
              Aliquam elementum lacus tortor, non maximus mauris laoreet a. In
              vel nulla elit. Etiam a erat lorem. Praesent ipsum ex, finibus ut
              leo eget, suscipit aliquet velit. Aliquam sed rhoncus enim. Etiam
              luctus enim nec velit hendrerit egestas. Aliquam et erat pulvinar,
              dictum mauris vel, pretium quam. Suspendisse a tellus lacus.
              Nullam scelerisque accumsan ligula tristique pellentesque.
              Maecenas hendrerit leo urna. Mauris non tincidunt ante, quis
              interdum mauris. Maecenas tempor euismod enim, eget imperdiet
              mauris vehicula sit amet. Nunc egestas a augue a cursus. Curabitur
              at interdum sapien. Etiam semper dolor id ante rhoncus mattis.
              Vestibulum semper maximus ipsum, sed sollicitudin velit cursus at.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Sed congue nisi vel viverra accumsan.
            </p>
            <div className="form-group">
              <Checkbox name="terminiCondizioni" label="Accetto"></Checkbox>
              {/* <label>
              <Field name="statutoPrivacy" type="checkbox" />
              Accetto
            </label> */}
              <ErrorMessage
                name="statutoPrivacy"
                component="div"
                className="alert alert-danger"
              />
            </div>
          </Box>
        </Card>

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
            <Link to={"/register/step5/"}>
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
