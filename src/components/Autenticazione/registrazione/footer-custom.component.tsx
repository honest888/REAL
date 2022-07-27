import { Container, Grid } from "@mantine/core";
import { Component, ReactNode } from "react";
import React from "react";


type Props = {};

type State = {};

export default class FooterCustom extends Component<Props, State> {
  render(): ReactNode {
    return (
      <>
        <Container
          styles={{
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%",
            backGroundColor: "#1E2833",
          }}
        >
          <Grid>
            <Grid.Col span={4}>
              Designed by Anthill srls - Tutti i diritti sono riservati
            </Grid.Col>
            <Grid.Col span={4}>Informative Legali</Grid.Col>
            <Grid.Col span={4}>3</Grid.Col>
          </Grid>
        </Container>
      </>
    );
  }
}
