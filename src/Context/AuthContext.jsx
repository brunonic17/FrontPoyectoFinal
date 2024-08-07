import { createContext, useContext, useState, useEffect } from "react";
import {
  LoguinRequest,
  registerRequest,
  verifyTokenRequest,
  sendEmailRequest,
  updatePasswordRequest,
} from "../api/auth";
import Cookies from "js-cookie";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Use the provider");
  }
  return context;
};
// eslint-disable-next-line react-hooks/rules-of-hooks

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  //     //Usuario que podra ser leido en toda la aplicacion
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticate] = useState(false);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(true);
  const [send, setSend] = useState(false);
  const [forgot, setForgot] = useState(false);

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
      setUser(res.data);
      setisAuthenticate(true);
    } catch (error) {
      // console.log(error)
      setErrors(error.response.data.message);
    }
  };

  // Cerrar sesion
  const logout = () => {
    Cookies.remove("token");
    setisAuthenticate(false);
    setUser(null);
    window.location.reload()
  };

  //Enviar email cambio de contraseña delpradofederico0@gmail.com <Navigate to = "contacto" />
  const sendEmail = async (email) => {
    try {
      const res = await sendEmailRequest(email);
      console.log(res.data);
      setSend(true);
      const timer = setTimeout(() => {
        setSend(false);
      }, 3000);
      return () => clearTimeout(timer);
    } catch (error) {
      setErrors(error.response.data);
    }
  };
  //Modificar contraseña
  const updatePassword = async (id, token, user) => {
    try {
      const res = await updatePasswordRequest(id, token, user);
      console.log(res.data);
      setForgot(true);
      
      const timer = setTimeout(() => {
        setSend(false);
      }, 3000);
      return () => clearTimeout(timer);
    } catch (error) {
      return console.log("soy yo el error");
    }
  };
  useEffect(() => {
    if (setErrors.length > 0) {
      const timer = setTimeout(() => {
        setErrors("");
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
        setUser(null);
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        // console.log(res);
        if (!res.data) {
          setisAuthenticate(false);
          setLoading(false);
          console.log("necesitas acceder");
        }
        setisAuthenticate(true);
        setUser(res.data);
        setLoading(false);
        // console.log(res.data)
      } catch (error) {
        setisAuthenticate(false);
        setUser(null);
        setLoading(false);
        // console.log("error verify", error);
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
        updatePassword,
        sendEmail,
        user,
        isAuthenticated,
        send,
        forgot,
        errors,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
