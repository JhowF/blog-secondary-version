import "./blog.css";

import { useEffect } from "react";

import BlogShow from "./BlogShow";
import Search from "../search/Search";
import QuestionMark from "../QuestionMark.js/QuestionMark";

import usePostContext from "../../hook/context-hook";
import { useModalContext } from "../../hook/context-hook";

function BlogList() {
  const { blog } = usePostContext();
  const { fetchQuentions, question } = useModalContext();

  useEffect(() => {
    fetchQuentions("blog");
  }, [fetchQuentions]);

  return (
    <div className="component-blogList">
      <div className="header-blog">
        <QuestionMark content={question} />
        <Search />
      </div>

      {blog.map((post) => {
        return (
          <div className="blog-posted">
            <BlogShow key={post.id} post={post} />
          </div>
        );
      })}
    </div>
  );
}

export default BlogList;
