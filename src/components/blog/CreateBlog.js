import "./blog.css";

import { useState } from "react";

import send from "../../assets/icons/send.png";

import usePostContext, { useModalContext } from "../../hook/context-hook";
import Modal from "../../modal/Modal";

function CreateBlog() {
  const [post, setPosts] = useState("");

  const { createBlog } = usePostContext();
  const { modalSatePost, openModalPost } = useModalContext();

  /*Modal Logic*/
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  /*-------*/

  const createPosts = () => {
    if (post.length > 2) {
      createBlog(post);
      /*Modal Logic*/
      setTitle("Sucesso");
      setMsg("Postagem publicada com sucesso");
      openModalPost();
      /*-------*/
      setPosts("");
    } else {
      /*Modal Logic*/
      setTitle("Error");
      setMsg("Por favor escreva uma postagem.");
      openModalPost();
      /*-------*/
    }
  };
  const handleChange = (event) => {
    setPosts(event.target.value);
  };
  return (
    <div className="createBlog-component">
      <article className="media">
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea"
                placeholder="Crie seu post..."
                onChange={handleChange}
                value={post}
              ></textarea>
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <button onClick={createPosts} className="button is-info">
                  <img src={send} alt="Enviar post" />
                  <p>Enviar</p>
                </button>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item"></div>
            </div>
          </nav>
        </div>
      </article>
      <Modal
        openModal={modalSatePost}
        ok={openModalPost}
        title={title}
        msg={msg}
      />
    </div>
  );
}

export default CreateBlog;
