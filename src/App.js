import "bulma/css/bulma.css";

import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import { Provider } from "./context/PostContext";

import ModalAlert from "./modal/modalAlert/ModalAlert";
import home from "./assets/icons/home.png";
import MenuDevide from "./components/MenuDevice/MenuDevide";

function App() {
  const { id } = useParams();

  let menu = id === "examiner" || id === "curious" ? <MenuDevide /> : "";

  let header =
    id === "examiner" || id === "curious" ? (
      <Link className="home-btn" to={"/"}>
        <img src={home} alt="Link para acesso a pagina home" />
      </Link>
    ) : (
      ""
    );

  return (
    <Provider>
      <div className="component-app hidden">
        <div className="app-header">
          {header}
          {menu}
        </div>
        <Outlet />
        <ModalAlert />
      </div>
    </Provider>
  );
}

export default App;
