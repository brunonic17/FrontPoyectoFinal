import { createContext, useContext, useState, useEffect } from "react";
import { LoguinRequest, registerRequest } from "../api/auth";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Use the provider");
  }
  return context;
};
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  //     //Usuario que podra ser leido en toda la aplicacion
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticate] = useState(false);
  const [errors, setErrors] = useState("");

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setisAuthenticate(true);
    } catch (error) {
      console.log(error.response)
      setErrors(error.response)
      
    }
  };
  const signin = async (user) => {
    try {
      const res = await LoguinRequest(user);
      console.log(res.data);
      setUser(res.data);
      setisAuthenticate(true);
    } catch (error) {
      // console.log(error.response.data.msg)
      setErrors(error.response.data.message)
      console.log(error.response.data.message)
    }
  };

  useEffect(
    () => {
      if(errors.length > 0 ){
       const timer = setTimeout(()=> {
          setErrors([])
        }, 3000)
        return () => clearTimeout(timer)//funcion de js para quitar el timeout para consumir menos recursos
      }
},[errors])

  return (
    <AuthContext.Provider value={{ signup,signin, user, isAuthenticated, errors}}>
      {children}
    </AuthContext.Provider>
  );
};

