import "./blog.css";

import { useState } from "react";

import { Link } from "react-router-dom";

import usePostContext from "../../hook/context-hook";

import edit from "../../assets/icons/edit.png";

function BlogShow({ post }) {
  const [showedit, setShowEdit] = useState(false);
  const [msgEdit, setMsgEdit] = useState(post.post);

  const { deleteBlogById, editBlogById } = usePostContext();

  let content = "";

  const handleEditClick = () => {
    if (!post.creator) {
      setShowEdit(!showedit);
    }
  };
  const handleDelete = () => {
    if (!post.creator) {
      deleteBlogById(post.id);
    }
  };
  const handleChange = (event) => {
    setMsgEdit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editBlogById(post.id, msgEdit);
    setShowEdit(false);
  };

  post.edited
    ? (content = <small>Atualizado em</small>)
    : (content = <small>Postado em</small>);

  if (showedit) {
    return (
      <div className="text-edi">
        <form onSubmit={handleSubmit} className="form">
          <div className="control">
            <input
              autoFocus
              onChange={handleChange}
              className="input is-medium text-edi-input"
              value={msgEdit}
            ></input>
          </div>
          <button type="submit" className="button">
            Salvar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="component-blogShow">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              {content} <small>{post.data}</small>
              <br />
              {post.post}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <Link className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-reply"></i>
                </span>
              </Link>
              <Link className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-retweet"></i>
                </span>
              </Link>
              <Link className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-heart"></i>
                </span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="media-right">
          <button className="edit" onClick={handleEditClick}>
            <img src={edit} alt="button_edit" />
          </button>
          <button className="delete" onClick={handleDelete}></button>
        </div>
      </article>
    </div>
  );
}

export default BlogShow;
