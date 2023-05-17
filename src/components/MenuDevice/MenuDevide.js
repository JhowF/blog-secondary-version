import "./menuDevice.css";

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useRoutesContext } from "../../hook/context-hook";

import menu from "../../assets/icons/menu.png";

function MenuDevide() {
  const [classState, setClassState] = useState(true);
  const [stateClass, setstateClass] = useState("");

  const { id } = useParams();
  const { user, handleContactAcess, handleContactDanied } = useRoutesContext();

  let content;
  let router = "examiner";

  if (user && id === "examiner") {
    content = (
      <Link
        onClick={handleContactAcess}
        to={`/home/examiner`}
        className="dropdown-item item2"
      >
        Contact
      </Link>
    );
  } else if (!user || id === "curious") {
    router = "curious";
  }

  const handleClick = () => {
    setClassState(!classState);
    classState ? setstateClass("is-active") : setstateClass("");
  };

  return (
    <div
      className={`dropdown ${stateClass} menu-dropdown`}
      onClick={handleClick}
    >
      <div className="dropdown-trigger">
        <button
          className="button menu-button"
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
        >
          <span>
            <img src={menu} alt="menu icon" />
          </span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu3" role="menu">
        <div className="dropdown-content">
          <Link
            to={`/home/${router}`}
            className="dropdown-item"
            onClick={handleContactDanied}
          >
            Blog
          </Link>
          {content}
        </div>
      </div>
    </div>
  );
}

export default MenuDevide;
