import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AllegatiE from "./AllegatiE";
import AnagraficaE from "./AnagraficaE";
import CorrentiE from "./CorrentiE";
import DocumentoE from "./DocumentoE";
import FornitoriE from "./FornitoriE";
import NoteE from "./NoteE";
import RecapitiE from "./RecapitiE";

import "./style.css";
import UnitaE from "./UnitaE";

export default function MidTabsE() {
  const [key, setKey] = useState("anagrafica");
  return (
    <div className="mt-4">
      <Tabs
        defaultActiveKey="anagrafica"
        id="uncontrolled-tab-example"
        className="mb-3 mid-tabs-box"
      >
        <Tab eventKey="anagrafica" title="Anagrafica">
          <AnagraficaE />
        </Tab>
        <Tab eventKey="recapiti" title="Recapiti">
          <RecapitiE />
        </Tab>
        <Tab eventKey="documento" title="Documento">
          <DocumentoE />
        </Tab>
        <Tab eventKey="correnti" title="Conti Correnti">
          <CorrentiE />
        </Tab>
        <Tab eventKey="unità" title="Unità">
          <UnitaE />
        </Tab>
        <Tab eventKey="Fornitori" title="Fornitori del locatore">
          <FornitoriE />
        </Tab>
        <Tab eventKey="note" title="Note">
          <NoteE />
        </Tab>
        <Tab eventKey="allegati" title="Allegati">
          <AllegatiE />
        </Tab>
      </Tabs>
    </div>
  );
}
