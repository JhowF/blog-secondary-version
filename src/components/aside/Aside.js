import "./aside.css";

import { Link, useParams } from "react-router-dom";

import { useRoutesContext } from "../../hook/context-hook";

function Aside() {
  const { id } = useParams();
  const { user, handleContactAcess, handleContactDanied } = useRoutesContext();

  let curious;
  let content;
  let router = "examiner";

  if (user && id === "examiner") {
    content = (
      <li className="aside-content">
        <Link onClick={handleContactAcess} className="container-aside">
          <p className="title-container">CONTACT</p>
        </Link>
      </li>
    );
  } else if (!user || id === "curious") {
    curious = "curious";
    router = "curious";
  }

  return (
    <nav className="component-aside">
      <ul className={`component-content-aside `}>
        <li className="aside-content ">
          <Link
            to={`/home/${router}`}
            onClick={handleContactDanied}
            className={`container-aside ${curious}`}
          >
            <p className="title-container">BLOG</p>
          </Link>
        </li>
        {content}
      </ul>
    </nav>
  );
}

export default Aside;
