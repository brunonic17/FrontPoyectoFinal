// import { createContext, useContext, useState } from "react";
// import { registerRequest } from "../api/auth";




//  export const AuthContext = createContext()

//  export const useAuth = () => {
//     const context =useContext(AuthContext)
//     if(!context){
//         throw new Error('Use the provider')
//         }
//         return context;
//  }
// export const AuthProvider = ({ children }) => {
//     //Usuario que podra ser leido en toda la aplicacion
// const [user, setUser] = useState(null)

// const signup = async (user) => {
//     const res = await registerRequest(user)
//     console.log(res.data)
//     setUser(res.data)
// }

//     return (
//         <AuthContext.Provider 
//         value={ {signup, user} }>
//             {children}
//         </AuthContext.Provider>
//     )
// }

 export const ContextAuth = ({children})=> {
    
    console.log("soy el contexto para usuarios!")
    return  <div>
            {Children}
        </div>
    
}