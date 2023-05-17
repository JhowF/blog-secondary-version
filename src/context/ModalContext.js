import React from "react";
import axios from "axios";
import { createContext, useState, useCallback } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [modalSatePost, setModalSatePost] = useState("");
  const [activePost, setActivePost] = useState(true);

  const [modalSateAlert, setModalSateAlert] = useState("");
  const [active, setActive] = useState(true);

  const [modalSateQuestion, setmodalSateQuestion] = useState("");
  const [activeQuestion, setactiveQuestion] = useState(true);

  const [password, setPassword] = useState("");
  const [text, setText] = useState(
    "Por favor digite o codigo fornecido pelo desenvolvedor"
  );

  /*Is use to pass the value for the title in Contact Component and BlogLis */
  const [question, setQuestion] = useState("");
  /*--*/

  const passwordSet = (param) => {
    setPassword(param);
  };

  const setTextContent = (param) => {
    setText(param);
  };

  const openModalPost = () => {
    setActivePost(!activePost);
    activePost ? setModalSatePost("is-active") : setModalSatePost("");
  };
  const openModal = () => {
    setActive(!active);
    active ? setModalSateAlert("is-active") : setModalSateAlert("");
  };
  const openModalQuestion = () => {
    setactiveQuestion(!activeQuestion);
    activeQuestion
      ? setmodalSateQuestion("is-active")
      : setmodalSateQuestion("");
  };
  const fetchQuentions = useCallback(async (id) => {
    try {
      const response = await axios.get(
        `https://server-json.herokuapp.com/Questions?id=${id}`
      );

      setQuestion(response.data[0].question);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const modalShare = {
    text,
    password,
    modalSatePost,
    modalSateQuestion,
    modalSateAlert,
    question,
    openModal,
    setTextContent,
    passwordSet,
    openModalPost,
    openModalQuestion,
    fetchQuentions,
  };
  return (
    <ModalContext.Provider value={modalShare}>{children}</ModalContext.Provider>
  );
}

export { ModalProvider };
export default ModalContext;
