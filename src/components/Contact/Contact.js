import "./contact.css";

import { useEffect } from "react";

import Whats from "../../assets/icons/whatsapp.png";
import linke from "../../assets/icons/linkedin.png";
import gmail from "../../assets/icons/gmail.png";
import github from "../../assets/icons/github.png";

import QuestionMark from "../QuestionMark.js/QuestionMark";
import { useModalContext } from "../../hook/context-hook";

function Contact() {
  const { fetchQuentions, question } = useModalContext();

  useEffect(() => {
    fetchQuentions("contact");
  }, [fetchQuentions]);

  return (
    <div className="component-contact">
      <div className="content is-large">
        <div className="header-contact">
          <QuestionMark content={question} />
          <h1 className="title-contact">
            Entre em contato comigo para conversarmos sobre como posso agregar
            em sua empresa!
          </h1>
        </div>
        <div className="list-contact">
          <ul>
            <li>
              <a target="_blank" rel="noreferrer">
                <img src={Whats} alt="whatsapp logo" />
              </a>
            </li>
            <li>
              <a rel="noreferrer">
                <img src={gmail} alt="gmail logo" />
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a target="_blank" rel="noreferrer">
                <img src={github} alt="Github logo" />{" "}
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer">
                <img src={linke} alt="Linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
