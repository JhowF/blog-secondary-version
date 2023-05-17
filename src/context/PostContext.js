import { createContext, useState, useCallback } from "react";
import axios from "axios";

const PostContext = createContext();

function Provider({ children }) {
  const [blog, setBlog] = useState([]);
  const data = new Date().toLocaleDateString("pt-br");

  const fetchPost = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://server-json.herokuapp.com/posts"
      );
      setBlog(response.data);
    } catch (error) {
      console.log(error);
      alert(
        "Não foi possível buscar os posts. Por favor, tente novamente mais tarde. " +
          error
      );
    }
  }, []);

  const searchPost = useCallback(
    async (searchTerm) => {
      try {
        if (searchTerm.length > 1) {
          const response = await axios.get(
            `https://server-json.herokuapp.com/posts?post_like=${searchTerm}`
          );
          setBlog(response.data);
        } else {
          fetchPost();
        }
      } catch (error) {
        console.log(error);
        alert(
          "Não foi possível buscar o post. Por favor, tente novamente mais tarde. " +
            error
        );
      }
    },
    [fetchPost]
  );

  const createBlog = async (post) => {
    try {
      const response = await axios.post(
        "https://server-json.herokuapp.com/posts",
        {
          post,
          data,
          edited: false,
        }
      );
      const updateBlog = [...blog, response.data];
      setBlog(updateBlog);
    } catch (error) {
      console.log(error);
      alert(
        "Não foi possível crear o post. Por favor, tente novamente mais tarde. " +
          error
      );
    }
  };

  const editBlogById = async (id, newPost) => {
    try {
      const response = await axios.put(
        `https://server-json.herokuapp.com/posts/${id}`,
        {
          post: newPost,
          data,
          edited: true,
        }
      );
      const updateBlog = blog.map((post) => {
        if (post.id === id) {
          return { ...post, ...response.data };
        }
        return post;
      });
      setBlog(updateBlog);
    } catch (error) {
      console.log(error);
      alert(
        "Não foi possível editar o post. Por favor, tente novamente mais tarde. " +
          error
      );
    }
  };

  const deleteBlogById = async (id) => {
    try {
      await axios.delete(`https://server-json.herokuapp.com/posts/${id}`);
      const updateBlog = blog.filter((post) => {
        return post.id !== id;
      });
      setBlog(updateBlog);
    } catch (error) {
      console.log(error);
      alert(
        "Não foi possível excluir o post. Por favor, tente novamente mais tarde. " +
          error
      );
    }
  };

  const blogFunctions = {
    blog,
    fetchPost,
    createBlog,
    editBlogById,
    deleteBlogById,
    searchPost,
  };

  return (
    <PostContext.Provider value={blogFunctions}>
      {children}
    </PostContext.Provider>
  );
}

export { Provider };

export default PostContext;
