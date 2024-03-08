import { createContext, useContext, useState, useEffect } from "react";
import { LoguinRequest, registerRequest, verifyTokenRequet } from "../api/auth";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

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
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setisAuthenticate(true);
    } catch (error) {
      setErrors(error.response.data.msg);
    }
  };
  const signin = async (user) => {
    try {
      const res = await LoguinRequest(user);
      // console.log(res)
      // console.log(res.data);
      setUser(res.data);
      setisAuthenticate(true);
    } catch (error) {
      // console.log(error)
      setErrors(error.response.data.message);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setisAuthenticate(false);
    setUser(null);
    return <Navigate to="/" />;
  };

  useEffect(() => {
    if (setErrors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer); //funcion de js para quitar el timeout para consumir menos recursos
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      //funcion EM5
      const cookies = Cookies.get();

      if (!cookies.token) {
        setisAuthenticate(false);
        setLoading(false);
        return setUser(null);
      }
      try {
        const res = await verifyTokenRequet(cookies.token);
        if (!res.data) {
          setisAuthenticate(false);
          setLoading(false);
          return;
        }
        setisAuthenticate(true);
        setUser(res.data);
        setLoading(false);
        // console.log(res.data)
      } catch (error) {
        setisAuthenticate(false);
        setUser(null);
        setLoading(false);
        console.log("error verify", error);
      }
    }
    checkLogin();
  }, []);


  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        user,
        isAuthenticated,
        errors,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
