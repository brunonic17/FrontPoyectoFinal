import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:4040/api',
    withCredentials: true
}) 
  


export default instance

//for local server use http://localhost:3001/ and for heroku app use https://build-week-anywhere-