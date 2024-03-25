import axios from "./axios";
import { instanceApiFake } from "../api/axios";


// const API= "http://localhost:4040/api/"



// eslint-disable-next-line react-refresh/only-export-components
export const registerRequest= (user) => axios.post(`/register`, user)

export const LoguinRequest= (user) => axios.post(`/login`, user)

export const sendEmailRequest= (email) => axios.post(`/sendEmail`, email)


export const updatePasswordRequest= (id, user) => axios.put(`/forgotPassword/${id}`, user)


export const verifyTokenRequest = () => axios.get( `/verify` ) 

export const getProductsApi = () => instanceApiFake.get(`products`)
   

