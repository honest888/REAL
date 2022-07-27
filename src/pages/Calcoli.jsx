import React from "react";
import FormBox from "../components/ColcoliImmobilliari/calcoli/index";
import TopHeading from "../components/TopHeading";

export default function Calcoli(props) {
  return (
    <>
      <div className="mb-4">
        <TopHeading SamllHeading="CALCOLI IMMOBILIARI" Heading="Calcoli" />
      </div>

      <FormBox />
    </>
  );
}
