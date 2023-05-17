import "./choose.css";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Modal from "../../modal/Modal";

import { useRoutesContext, useModalContext } from "../../hook/context-hook";

function Choose() {
  const { pass, fetchPassword, handleUser, user } = useRoutesContext();
  const {
    modalSatePost,
    openModalPost,
    setTextContent,
    text,
    password,
    passwordSet,
    openModal,
  } = useModalContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetchPassword();
  }, [fetchPassword]);

  /*Functions to open and close the modal and check
   if the user's password is correct*/

  const handleClick = () => {
    return user ? navigate("/home/examiner") : openModalPost();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === pass) {
      openModalPost();
      handleUser();
      navigate("/home/examiner");
      setTimeout(() => {
        openModal();
      }, 700);
    } else {
      setTextContent("CÓDIGO ERRADO");
      passwordSet("");
    }
  };
  const handleChange = (event) => {
    passwordSet(event.target.value);
  };

  /* ------------------------------------------------------- */

  return (
    <div className="choose-content">
      <Link onClick={handleClick}>
        <div className="choose-examinator">
          <h2> Examinador </h2>
        </div>
      </Link>

      <Link to="/home/curious">
        <div className="choose-curious">
          <h2> Curioso </h2>
        </div>
      </Link>

      <Modal
        openModal={modalSatePost}
        modalType={"choose"}
        title={"Examinador acesso"}
        handle={handleSubmit}
        handleChange={handleChange}
        textContent={text}
        ok={handleSubmit}
      />
    </div>
  );
}

export default Choose;
