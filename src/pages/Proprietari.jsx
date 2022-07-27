import React, { createContext } from "react";
import ColomboList from "../components/Membri/ProprietariSublocatori/ColomboList";
import EmptyList from "../components/Membri/ProprietariSublocatori/EmptyList";
import NewownerBtn from "../components/Membri/ProprietariSublocatori/NewownerBtn";
import TopHeading from "../components/TopHeading";

const PropriText = createContext();

export default function Proprietari(props) {
  return (
    <>
      <div className="row gy-4 align-items-end mb-4">
        <div className="col-md-6">
          <TopHeading SamllHeading="Membri" Heading="Proprietari/Sublocatori" />
        </div>
        <div className="col-md-6">
          <PropriText.Provider value={"Nuovo proprietario o sublocatore"}>
            <NewownerBtn btnText="Nuova proprietario" />
          </PropriText.Provider>
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
export { PropriText };
