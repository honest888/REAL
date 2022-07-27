import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import LastMenu from "./LastMenu";

export default function Sidebar() {
  return (
    <>
      <Link to="/" className="logo fw-100 mx-auto d-table mb-4">
        <img src={logo} alt="logo-image" />
      </Link>
      <Menu />
      <div className="last-links mt-auto">
        <LastMenu />
      </div>
    </>
  );
}
