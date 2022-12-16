const LoginForm = () => {
   return (
      <div>
         <div className=" text-center " >
            <h1 className=" font-bold text-xl " >Salut encore !</h1>
            <p>Bienvenu encore, vous nous aviez manqué!</p>
         </div>
         <div>
            <div>
               <input type="text" placeholder="Nom d'utilisateur" />
            </div>
            <div>
               <input type="password" placeholder="Mot de passe" />
            </div>
            <div>
               <a href="#">Password recovery</a>
            </div>
         </div>
         <button>Se Connecter</button>
      </div>
   )
}

export default LoginForm