import { UserContext } from "../../../App";
import LandingBottons from "./LandingBottons";
import LandingPhoto from "./LandingPhoto";

const Landing = () => {
  return (
    <div
      className=" flex flex-col sm:flex-row gap-10 sm:gap-0
       "
    >
      <LandingPhoto />
      <LandingBottons />
    </div>
  );
};

export default Landing;
