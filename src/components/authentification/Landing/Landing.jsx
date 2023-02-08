import { UserContext } from "../../../App";
import LoginForm from "../loginForm/loginForm";
import LandingBottons from "./LandingBottons";
import LandingPhoto from "./LandingPhoto";

const Landing = () => {
  return (
    <div
      className=" flex flex-col sm:flex-row gap-10 sm:gap-0
       "
    >
      <LandingPhoto />
      <div className=" flex flex-col " >
        <LoginForm />
        {/* <LandingBottons /> */}
      </div>
    </div>
  );
};

export default Landing;
