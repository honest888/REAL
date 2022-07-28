import React, { createContext }  from "react";
import FormBox from "../components/ColcoliImmobilliari/calcoli/index";
import TopHeading from "../components/TopHeading";
import NewownerBtn from "../components/Membri/ProprietariSublocatori/NewownerBtn";

const CondutText = createContext();
export default function Modelli(props) {
  return (
    <>
      <div className="mb-4">
        <TopHeading SamllHeading="DOCUMENTI" Heading="Prima Nota" />
      </div>
      <div className="row gy-4 align-items-end mb-4">
        <div className="col-md-6">
          <TopHeading SamllHeading="Membri" Heading="Conduttori" />
        </div>
        <div className="col-md-6">
          <CondutText.Provider value={"Nuovo conduttore"}>
            <NewownerBtn btnText="Nuovo conduttore" />
          </CondutText.Provider>
        </div>
      </div>
      <div className="d-block mb-4">
        <EmptyList />
      </div>
    </>
  );
}
