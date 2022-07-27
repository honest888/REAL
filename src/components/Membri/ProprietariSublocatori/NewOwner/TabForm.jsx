import React, { useState, useContext } from "react";
import { CondutText } from "../../../../pages/Conduttori";
import { PropriText } from "../../../../pages/Proprietari";
import { FornitoriText } from "../../../../pages/Fornitori";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Allegati from "./Allegati";
import Anagrafica from "./Anagrafica";
import Correnti from "./Correnti";
import Documento from "./Documento";
import Fornitori from "./Fornitori";
import Note from "./Note";
import Recapiti from "./Recapiti";

export default function TabForm() {
  const [key, setKey] = useState("anagrafica");

  const topHeading1 = useContext(CondutText);
  const topHeading2 = useContext(PropriText);
  const topHeading3 = useContext(FornitoriText);

  return (
    <div className="main-from-outer d-block">
      <h2 className="top-form-heading d-block mb-4 fs-32 text-dark fw-semibold">
        {topHeading1}
        {topHeading2}
        {topHeading3}
      </h2>
      <Tabs
        defaultActiveKey="anagrafica"
        id="uncontrolled-tab-example"
        className="mb-3 form-tab-main"
      >
        <Tab eventKey="anagrafica" title="Anagrafica">
          <Anagrafica />
        </Tab>
        <Tab eventKey="recapiti" title="Recapiti">
          <Recapiti />
        </Tab>
        <Tab eventKey="documento" title="Documento">
          <Documento />
        </Tab>
        <Tab eventKey="correnti" title="Conti Correnti">
          <Correnti />
        </Tab>
        <Tab eventKey="Fornitori" title="Fornitori del locatore">
          <Fornitori />
        </Tab>
        <Tab eventKey="note" title="Note">
          <Note />
        </Tab>
        <Tab eventKey="allegati" title="Allegati">
          <Allegati />
        </Tab>
      </Tabs>
    </div>
  );
}
