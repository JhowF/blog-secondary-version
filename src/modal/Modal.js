import "./modal.css";

import React from "react";

import { useModalContext } from "../hook/context-hook";

function Modal(props) {
  const { openModalPost, setTextContent, passwordSet, password } =
    useModalContext();

  const ModalFunctions = () => {
    openModalPost();
    setTextContent("Por favor digite o codigo fornecido pelo desenvolvedor");
    passwordSet("");
  };

  let content = (
    <>
      <h2>{props.msg}</h2>
      <button className="button save" onClick={props.ok}>
        OK
      </button>
    </>
  );

  if (props.modalType === "choose") {
    content = (
      <>
        <p className="content-p-modal">{props.textContent}</p>
        <form className="form-login-box" onSubmit={props.handle}>
          <div className="user-box">
            <input
              autoFocus
              type="password"
              value={password}
              onChange={props.handleChange}
            />
            <label>Código</label>
          </div>
        </form>
        <div className="button-modal-choose">
          <button className="save button" onClick={props.ok}>
            OK
          </button>
          <button className="cancel button" onClick={ModalFunctions}>
            Cancel
          </button>
        </div>
      </>
    );
  }
  return (
    <div className={`modal ${props.openModal}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <h1 className="modal-card-title">{props.title}</h1>
        </header>
        <section className="modal-card-body ">{content}</section>
      </div>
    </div>
  );
}

export default Modal;
