import { useNavigate } from "react-router-dom"

const LandingBottons = () => {

   const Navigate = useNavigate()
   return (
      <div className="text-center flex justify-center items-center flex-col gap-5 h-[40vh]" >
         <h1 className=" font-black tracking-tighter text-4xl w-[50vw] text-center " >Bienvenu sur M-Tech</h1>

         <div className=" flex flex-col justify-center items-center gap-10 " >
            <p className=" w-[60vw] text-xs " >Explorez votre meilleur service en locatioon et distribution des appareils techniques</p>

            <div className="font-bold text-xs flex justify-between items-center  bg-gray-300 w-[70vw] h-16 rounded-full shadow-3xl border-[2px] border-white " >
               <button className=" bg-white rounded-full w-[55%] h-full border-[1px]" >S'enregistrer</button>
               <button
                  className="rounded-3xl w-[50%] "
                  onClick={() => {
                     Navigate('/login')
                  }}
                  >Se connecter</button>
            </div>
         </div>
      </div>
   )
}

export default LandingBottons