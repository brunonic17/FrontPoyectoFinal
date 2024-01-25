import axios from "axios"


export const registerRequest= (user) => axios.post(`http://localhost:4040/api/register`, user)

 
   
   

