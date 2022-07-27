import { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import {
  BackgroundImage,
  Box,
  Center,
  Container,
  Grid,
  Text,
} from "@mantine/core";
import Login from "./login.component";
import React from "react";


type Props = {};

type State = {};

export default class LoginContainer extends Component<Props, State> {
  render() {
    return (
      <>
        <Grid>
          <Grid.Col span={4}>
            <Box mx="auto">
              <BackgroundImage src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80">
                <Center p="md">
                  <Text color="#fff">
                    BackgroundImage component can be used to add any content on
                    image. It is useful for hero headers and other similar
                    sections
                  </Text>
                </Center>
              </BackgroundImage>
            </Box>
          </Grid.Col>
          <Grid.Col span={8}>
            <Login />
          </Grid.Col>
        </Grid>
      </>
    );
  }
}
