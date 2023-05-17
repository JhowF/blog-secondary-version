import { useEffect } from "react";

import usePostContext from "../../hook/context-hook";

import CreateBlog from "./CreateBlog";
import BlogList from "./BlogList";

function Blog() {
  const { fetchPost } = usePostContext();

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);
  /*--*/

  return (
    <div className="component-blog">
      <BlogList />
      <CreateBlog />
    </div>
  );
}

export default Blog;
