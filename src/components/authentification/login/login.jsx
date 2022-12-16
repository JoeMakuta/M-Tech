import { UserContext } from "../../../App"
import LoginForm from "./loginForm"
import LoginPhoto from "./loginPhoto"
const Login = () => {
   return (
      <div className=" flex flex-col gap-10 " >
         <LoginPhoto />
         <LoginForm />
      </div>
   )
}

export default Login