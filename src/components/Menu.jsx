import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import icon1 from "../assets/images/m1.svg";
import icon2 from "../assets/images/m2.svg";
import icon3 from "../assets/images/m3.svg";
import icon4 from "../assets/images/m4.svg";
import icon5 from "../assets/images/m5.svg";
import icon6 from "../assets/images/m6.svg";
import icon7 from "../assets/images/m7.svg";
import icon8 from "../assets/images/m8.svg";

export default function Menu() {
  const [isActive, setActive] = useState("false");
  const [isActive1, setActive1] = useState("false");
  const [isActive2, setActive2] = useState("false");
  const [isActive3, setActive3] = useState("false");
  const [isActive4, setActive4] = useState("false");
  const [isActive5, setActive5] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleToggle1 = () => {
    setActive1(!isActive1);
  };
  const handleToggle2 = () => {
    setActive2(!isActive2);
  };
  const handleToggle3 = () => {
    setActive3(!isActive3);
  };
  const handleToggle4 = () => {
    setActive4(!isActive4);
  };
  const handleToggle5 = () => {
    setActive5(!isActive5);
  };

  return (
    <>
      <ul className="menu-list ls p-0">
        <li>
          <Link to="/">
            <span className="icon-link">
              <img src={icon1} alt="image" />{" "}
            </span>

            <span className="text-link">Dashboard</span>
          </Link>
        </li>
        <li className={`dropdwon-link ${isActive ? "" : "dropdwon-open"}`}>
          <button
            onClick={handleToggle}
            className="d-flex w-100 justify-content-between align-items-center p-0 bg-transparent border-0 text-start"
          >
            <span className="icon-link">
              <img src={icon2} alt="icon" />
            </span>

            <span className="text-link">Unità Immobiliari e Condomini</span>
            <BsChevronDown className="icon-down" />
          </button>
          <div className="sub-links">
            <ul className="ls d-flex flex-column">
              <li>
                <Link to="/">Link</Link>
              </li>
              <li>
                <Link to="/">Link</Link>
              </li>
              <li>
                <Link to="/">Link</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/">
            <span className="icon-link">
              <img src={icon3} alt="icon" />
            </span>
            <span className="text-link">Affitti</span>
          </Link>
        </li>
        <li className={`dropdwon-link ${isActive1 ? "" : "dropdwon-open"}`}>
          <button
            onClick={handleToggle1}
            className="d-flex w-100 justify-content-between align-items-center p-0 bg-transparent border-0 text-start"
          >
            <span className="icon-link">
              <img src={icon4} alt="icon" />
            </span>

            <span className="text-link">Stato Lavori in Corso</span>
            <BsChevronDown className="icon-down" />
          </button>
          <div className="sub-links">
            <ul className="ls d-flex flex-column">
              <li>
                <Link to="/">Link</Link>
              </li>
              <li>
                <Link to="/">Link</Link>
              </li>
              <li>
                <Link to="/">Link</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={`dropdwon-link ${isActive2 ? "" : "dropdwon-open"}`}>
          <button
            onClick={handleToggle2}
            className="d-flex w-100 justify-content-between align-items-center p-0 bg-transparent border-0 text-start"
          >
            <span className="icon-link">
              {" "}
              <img src={icon5} alt="icon" />
            </span>

            <span className="text-link">Membri</span>
            <BsChevronDown className="icon-down" />
          </button>
          <div className="sub-links">
            <ul className="ls d-flex flex-column">
              <li>
                <Link to="/propriietari">Proprietari/Sublocatori</Link>
              </li>
              <li>
                <Link to="/conduttori">Conduttori</Link>
              </li>
              <li>
                <Link to="/fornitori">Fornitori</Link>
              </li>
              <li>
                <Link to="/rate">Rate</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={`dropdwon-link ${isActive3 ? "" : "dropdwon-open"}`}>
          <button
            onClick={handleToggle3}
            className="d-flex w-100 justify-content-between align-items-center p-0 bg-transparent border-0 text-start"
          >
            <span className="icon-link">
              {" "}
              <img src={icon6} alt="icon" />
            </span>

            <span className="text-link">Documenti</span>
            <BsChevronDown className="icon-down" />
          </button>
          <div className="sub-links">
            <ul className="ls d-flex flex-column">
              <li>
                <Link to="/">Prima Nota</Link>
              </li>
              <li>
                <Link to="/">Modelli</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={`dropdwon-link ${isActive4 ? "" : "dropdwon-open"}`}>
          <button
            onClick={handleToggle4}
            className="d-flex w-100 justify-content-between align-items-center p-0 bg-transparent border-0 text-start"
          >
            <span className="icon-link">
              {" "}
              <img src={icon7} alt="icon" />
            </span>

            <span className="text-link">Calcoli Immobilliari</span>
            <BsChevronDown className="icon-down" />
          </button>
          <div className="sub-links">
            <ul className="ls d-flex flex-column">
              <li>
                <Link to="/">Calcolatrice</Link>
              </li>
              <li>
                <Link to="/calcoli">Calcoli</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={`dropdwon-link ${isActive5 ? "" : "dropdwon-open"}`}>
          <button
            onClick={handleToggle5}
            className="d-flex w-100 justify-content-between align-items-center p-0 bg-transparent border-0 text-start"
          >
            <span className="icon-link">
              {" "}
              <img src={icon8} alt="icon" />{" "}
            </span>

            <span className="text-link">Alert</span>
            <BsChevronDown className="icon-down" />
          </button>
          <div className="sub-links">
            <ul className="ls d-flex flex-column">
              <li>
                <Link to="/">Link</Link>
              </li>
              <li>
                <Link to="/">Link</Link>
              </li>
              <li>
                <Link to="/">Link</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
}
