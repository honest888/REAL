import React, { createContext } from "react";
import TopHeading from "../components/TopHeading";
import EmptyList from "../components/Documenti/EmptyList";
import DocumentiBtn from "../components/Documenti/DocumentiBtn";

const CondutText = createContext();
export default function PrimaNota(props) {
  return (
    <>
      <div className="row gy-4 align-items-end mb-4">
        <div className="col-md-6">
          <TopHeading SamllHeading="DOCUMENTI" Heading="Prima Nota" />
        </div>
        <div className="col-md-6">
          <CondutText.Provider value={"Nuova Prima Nota"}>
            <DocumentiBtn btnText="Nuova Prima Nota" />
          </CondutText.Provider>
        </div>
      </div>
      <div className="d-block mb-4 mt-auto mb-auto">
        <EmptyList />
      </div>
    </>
  );
}
