import React from "react";
import { Link } from "react-router-dom";

export default function ColomboList() {
  return (
    <>
      <Link
        to="/propriietari-view"
        className="colo-list d-block w-100 px-4 bg-white py-3 rounded-3"
      >
        <h2 className="fs-20 text-dark mb-2 fw-bold">Carla Colombo</h2>
        <div className="d-flex flex-column flex-md-row">
          <p className="fs-12 text-dark mb-2 mb-md-0 me-0 me-md-4">
            <i className="fal fa-phone-alt me-2"></i> +39 345846795
          </p>
          <p className="fs-12 text-dark mb-2 mb-md-0 me-0 me-md-4">
            <i className="fal fa-envelope me-2"></i> carla.colombo@gmail.com
          </p>
          <p className="fs-12 text-dark mb-2 mb-md-0 me-0 me-md-4">
            <i className="fal fa-home"></i> 3
          </p>
        </div>
      </Link>
    </>
  );
}
