import React, { useState } from "react";
import MediaQuery from "react-responsive";
import Sidebar from "./Sidebar";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
export default function app(props) {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <MediaQuery minWidth={768}>
        <div className={`app-box d-flex ${isActive ? "" : "app-small"}`}>
          <div className="sidebar-main d-flex flex-column">
            <Sidebar />
            <button
              className="
          border-0
          bg-transparent
          text-white
          open-close-btn"
              onClick={handleToggle}
            >
              {isActive ? <BsChevronDoubleLeft /> : <BsChevronDoubleRight />}
            </button>
          </div>
          <div className="right-side-box p-4 d-block">{props.children}</div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <div className={`app-box d-flex ${isActive ? "app-small" : ""}`}>
          <div className="sidebar-main d-flex flex-column">
            <Sidebar />
            {/* <button
              className="
          border-0
          bg-transparent
          text-white
          open-close-btn"
              onClick={handleToggle}
            >
              {isActive ? <BsChevronDoubleLeft /> : <BsChevronDoubleRight />}
            </button> */}
          </div>
          <div className="right-side-box p-4 d-block">{props.children}</div>
        </div>
      </MediaQuery>
    </>
  );
}
