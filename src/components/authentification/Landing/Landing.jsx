import { UserContext } from "../../../App"
import LandingBottons from "./LandingBottons"
import LandingPhoto from "./LandingPhoto"

const Landing = () => {
   return (
      <div className=" flex flex-col gap-10 " >
         <LandingPhoto />
         <LandingBottons />
      </div>
   )
}

export default Landing