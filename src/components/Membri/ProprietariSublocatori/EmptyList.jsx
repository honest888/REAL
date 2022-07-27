import React from "react";
import userimage from "../../../assets/images/user-key.png";

export default function EmptyList() {
  return (
    <div className="mx-auto d-table text-center">
      <div className="image-user mx-auto d-table w-160 fw-100">
        <img src={userimage} alt="user-key" />
      </div>
      <p className="fs-20 text-secondary text-center">
        Non hai aggiunto ancora nessun <br />
        proprietario o sublocatore
      </p>
    </div>
  );
}
