import React from "react";
import { Link } from "react-router-dom";
import icon9 from "../assets/images/m9.svg";
import icon10 from "../assets/images/m10.svg";
import icon11 from "../assets/images/m11.svg";
export default function LastMenu() {
  return (
    <>
      <ul className="links-log ls p-0 d-flex flex-column">
        <li>
          <Link to="/">
            <span className="icon-link">
              <img src={icon9} alt="icon" />
            </span>
            <span className="text-link">Upporto</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon-link">
              <img src={icon10} alt="icon" />
            </span>
            <span className="text-link">Impostazioni</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon-link">
              <img src={icon11} alt="icon" />
            </span>
            <span className="text-link">Logout</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
