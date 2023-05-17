import lupa from "../../assets/icons/lupa.png";

import usePostContext from "../../hook/context-hook";

import { useState } from "react";

import "./search.css";

function Search() {
  const [search, setSearch] = useState("");
  const { searchPost } = usePostContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    searchPost(search);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    searchPost(search);
  };

  return (
    <div className="component-search">
      <form onSubmit={handleSubmit}>
        <div className="field is-grouped centralization">
          <p className="control is-expanded ">
            <input
              className="input radius size-width-mobile"
              type="text"
              placeholder="search a post"
              value={search}
              onChange={handleChange}
            />
          </p>
          <p className="control">
            <button type="submit" className="button is-info">
              <img className="lupa" src={lupa} alt="Lupa para o search" />
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Search;
