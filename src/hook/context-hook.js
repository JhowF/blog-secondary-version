import { useContext } from "react";
import PostContext from "../context/PostContext";
import RoutesContext from "../context/RoutesContext";
import ModalContext from "../context/ModalContext";

function usePostContext() {
  return useContext(PostContext);
}
function useRoutesContext() {
  return useContext(RoutesContext);
}
function useModalContext() {
  return useContext(ModalContext);
}

export default usePostContext;
export { useRoutesContext };
export { useModalContext };
