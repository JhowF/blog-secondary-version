import React from "react";
import { useParams } from "react-router-dom";

import { useRoutesContext, useModalContext } from "../../hook/context-hook";

import answer from "../../assets/icons/answer.png";

import ModalQuestions from "../../modal/modalQuestions/ModalQuestions";

function QuestionMark({ content }) {
  const { id } = useParams();
  const { user } = useRoutesContext();

  const { openModalQuestion } = useModalContext();

  let contentInside = "";

  if (id === "examiner" && user) {
    contentInside = (
      <img
        className="questionMark"
        src={answer}
        alt={"Ponto de interrogação"}
      />
    );
  }

  return (
    <div className="component-question" onClick={openModalQuestion}>
      {contentInside}
      <ModalQuestions content={content} />
    </div>
  );
}

export default QuestionMark;
