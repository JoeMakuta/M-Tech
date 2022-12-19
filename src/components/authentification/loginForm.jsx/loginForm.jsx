import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { button_style, input_container, input_style } from '../../../assets/styles/styles'

const LoginForm = () => {
   const [showPassword, setShowPassword] = useState(true)

   const handlePassword = () => {
      showPassword ? setShowPassword(false) : setShowPassword(true)
   }

   return (
      <div className=" flex flex-col justify-start mt-[10vh] items-center gap-14 " >
         <div className="flex flex-col items-center gap-4 text-center " >
            <h1 className=" font-bold w-40 text-5xl tracking-tighter " >
               Salut encore!
            </h1>
            <p className="text-sm w-[80vw]" >
               Bienvenu encore, vous nous aviez manqué!
            </p>
         </div>
         <form className=" flex flex-col w-[350px] gap-4 " >
            <div className={input_container} >
               <input
                  required
                  type="text"
                  className={input_style}
                  placeholder="Nom d'utilisateur"
               />
            </div>
            <div className={input_container + ' pr-4'} >
               <input
                  required
                  className={input_style}
                  type={showPassword ? "password" : "text"}
                  placeholder="Mot de passe"
               />

               <div onClick={handlePassword} >
                  {showPassword ? <AiOutlineEye size={30} color='#ADA2BF' /> : <AiOutlineEyeInvisible size={30} color='#ADA2BF' />}
               </div>
            </div>
            <div className=" flex justify-end " >
               <a
                  href="#"
                  className=" text-sm  text-blue-500 " >
                  Mot de pass oublié
               </a>
            </div>
            <button
               type="submit"
               className={button_style} >
               Se connecter
            </button>
         </form>
         <div>
            {/* <p>Ou continuer avec</p> */}
         </div>
      </div>
   )
}
export default LoginForm