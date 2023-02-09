import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../../App";
import LoginForm from "../loginForm/loginForm";
import LandingBottons from "./LandingBottons";
import LandingPhoto from "./LandingPhoto";
import LandingWelcom from "./LandingWelcom";

const Landing = () => {
  const { loginOrSignUp, setLoginOrSignUp } = useContext(UserContext);
  return (
    <div
      className=" flex flex-col sm:flex-row gap-10 sm:gap-0
       "
    >
      <LandingPhoto />
      <div className=" flex flex-col justify-center items-center gap-10 " >
        {loginOrSignUp === "LandingWelcom" ? (
          <LandingWelcom />
        ) : loginOrSignUp === "loginForm" ? (
          <LoginForm />
        ) : (
          none
        )}
        <LandingBottons />
      </div>
    </div>
  );
};

export default Landing;
