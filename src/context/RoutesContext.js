import { createContext, useState, useCallback } from "react";
import axios from "axios";
import React from "react";

const RoutesContext = createContext();

function RoutesProvider({ children }) {
  const [pass, setPass] = useState([]);
  const [user, setUser] = useState(false);
  const [acessContact, setacessContact] = useState(false);

  const fetchPassword = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://server-json.herokuapp.com/Examiner"
      );
      console.log(response);
      setPass(response.data[0].password);
    } catch (error) {
      console.log(error);
      alert(
        "Não foi possível validar a autenticação por falha no servidor. Por favor, tente novamente mais tarde. " +
          error
      );
    }
  }, []);

  const handleUser = () => {
    setUser(true);
  };

  const handleContactAcess = () => {
    setacessContact(true);
  };
  const handleContactDanied = () => {
    setacessContact(false);
  };
  const routesShare = {
    pass,
    user,
    acessContact,
    handleUser,
    fetchPassword,
    handleContactAcess,
    handleContactDanied,
  };
  return (
    <RoutesContext.Provider value={routesShare}>
      {children}
    </RoutesContext.Provider>
  );
}

export default RoutesContext;
export { RoutesProvider };
