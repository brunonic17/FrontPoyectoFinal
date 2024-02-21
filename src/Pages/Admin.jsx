import { useAuth } from "../Context/AuthContext"


const Admin = () => {
  const {user} = useAuth()
  console.log(user)
  return (
    <div>
      <h1>Soy la pagina de admin(private)</h1>
    </div>
  )
}

export default Admin
