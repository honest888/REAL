import React from "react";
export default function TopHeading(props) {
  return (
    <div className="d-block">
      <h3 className="fs-18 text-uppercase fw-semibold text-secondary mb-2">
        {props.SamllHeading}
      </h3>
      <h1 className="fs-24 fs-md-30 text-dark fw-semibold">{props.Heading}</h1>
    </div>
  );
}
