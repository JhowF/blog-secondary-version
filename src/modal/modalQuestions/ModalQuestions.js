import "./modalQuestions.css";

import React from "react";

import { useModalContext } from "../../hook/context-hook";

function ModalQuestions({ content }) {
  const { openModalQuestion, modalSateQuestion } = useModalContext();

  return (
    <div className={`modal ${modalSateQuestion}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <article className="message">
          <div className="message-header">
            <h1>Informação</h1>
          </div>
          <div className="message-body">{content}</div>
        </article>
      </div>

      <footer className="modal-card-foot footer-button">
        <button className="button button-alert" onClick={openModalQuestion}>
          Fechar
        </button>
      </footer>
    </div>
  );
}

export default ModalQuestions;
