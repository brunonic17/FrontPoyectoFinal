import axios from "./axios";

// const API= "http://localhost:4040/api/"


// eslint-disable-next-line react-refresh/only-export-components
export const registerRequest= (user) => axios.post(`/register`, user)

export const LoguinRequest= (user) => axios.post(`/login`, user)

export const verifyTokenRequet = () => axios.get( `/verify` ) 


   

