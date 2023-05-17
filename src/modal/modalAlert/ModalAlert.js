import React from "react";
import "./modalAlert.css";
import { useModalContext } from "../../hook/context-hook";

function ModalAlert({ openmodalAlert }) {
  const { openModal, modalSateAlert } = useModalContext();

  return (
    <div className={`modal ${modalSateAlert}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <article className="message">
          <div className="message-header">
            <h1>INFORMAÇÕES RELEVANTES</h1>
          </div>
          <div className="message-body">
            Olá, tudo bem? Gostaria de enfatizar que esta é apenas uma versão
            secundária do projeto, na qual nenhum dado pessoal é armazenado. No
            entanto, a aplicação possui o mesmo design e funcionalidades.
            Sinta-se à vontade para utilizá-la.
            <br />
            <br />
            Além disso, recomendo que você clique no ponto de interrogação
            localizado ao lado da barra de busca. Lá, você encontrará
            informações mais detalhadas sobre a aplicação. O mesmo ponto de
            interrogação também está disponível na página de contato. Não deixe
            de conferir!
            <br />
            <br />
          </div>
        </article>
      </div>

      <footer className="modal-card-foot footer-button">
        <button className="button button-alert" onClick={openModal}>
          Fechar
        </button>
      </footer>
    </div>
  );
}

export default ModalAlert;
