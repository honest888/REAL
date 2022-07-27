import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AllegatiV from "./AllegatiV";
import AnagraficaV from "./AnagraficaV";
import CorrentiV from "./CorrentiV";
import DocumentoV from "./DocumentoV";
import FornitoriV from "./FornitoriV";
import NoteV from "./NoteV";
import RecapitiV from "./RecapitiV";
import UnitaV from "./UnitaV";
import "./style.css";
export default function MidTabs() {
  const [key, setKey] = useState("anagrafica");
  return (
    <div className="mt-4">
      <Tabs
        defaultActiveKey="anagrafica"
        id="uncontrolled-tab-example"
        className="mb-3 mid-tabs-box"
      >
        <Tab eventKey="anagrafica" title="Anagrafica">
          <AnagraficaV />
        </Tab>
        <Tab eventKey="recapiti" title="Recapiti">
          <RecapitiV />
        </Tab>
        <Tab eventKey="documento" title="Documento">
          <DocumentoV />
        </Tab>
        <Tab eventKey="correnti" title="Conti Correnti">
          <CorrentiV />
        </Tab>
        <Tab eventKey="unità" title="Unità">
          <UnitaV />
        </Tab>
        <Tab eventKey="Fornitori" title="Fornitori del locatore">
          <FornitoriV />
        </Tab>
        <Tab eventKey="note" title="Note">
          <NoteV />
        </Tab>
        <Tab eventKey="allegati" title="Allegati">
          <AllegatiV />
        </Tab>
      </Tabs>
    </div>
  );
}
