import React from "react";
import userimage from "../../assets/images/markdown.png";

export default function EmptyList() {
  return (
    <div className="mx-auto d-table text-center  mt20">
      <div className="image-user mx-auto d-table w-160 fw-100">
        <img src={userimage} alt="empty-image" />
      </div>
      <p className="fs-20 text-secondary text-center">Nessun elemento</p>
    </div>
  );
}
