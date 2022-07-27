import React, { createContext } from "react";
import ColomboList from "../components/Membri/ProprietariSublocatori/ColomboList";
import EmptyList from "../components/Membri/ProprietariSublocatori/EmptyList";
import NewownerBtn from "../components/Membri/ProprietariSublocatori/NewownerBtn";
import TopHeading from "../components/TopHeading";

const CondutText = createContext();

export default function Conduttori(props) {
  return (
    <>
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
        <ColomboList />
      </div>
      <div className="d-block mb-4">
        <EmptyList />
      </div>
    </>
  );
}
export { CondutText };
