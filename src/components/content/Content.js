import "./content.css";

import { useParams } from "react-router-dom";

import { useRoutesContext } from "../../hook/context-hook";

import Aside from "../aside/Aside";
import Blog from "../blog/Blog";
import Contact from "../Contact/Contact";

function Content() {
  const { acessContact } = useRoutesContext();
  const { id } = useParams();

  let content;

  if (id === "examiner") {
    content = acessContact ? <Contact /> : <Blog />;
  } else {
    content = <Blog />;
  }

  return (
    <div className="content-parent">
      <Aside />
      <div className="component-parent">
        <div className="component-content">{content}</div>
      </div>
    </div>
  );
}

export default Content;
