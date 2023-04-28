import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../../App";
import LoginForm from "../loginForm/loginForm";
import LandingBottons from "./LandingBottons";
import LandingPhoto from "./LandingPhoto";
import LandingWelcom from "./LandingWelcom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { VITE_SERVER_URI } = import.meta.env;

const Landing = () => {
  const { loginOrSignUp, setLoginOrSignUp } = useContext(UserContext);
  const navigate = useNavigate();

  const getProducts = async (user) => {
    const response = await axios.get(VITE_SERVER_URI + "/product", {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    });
    console.log("The first products : ", response);
    if (response.data.data[0]) {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      getProducts(user);
    }
  }, []);

  return (
    <div
      className=" flex flex-col justify-start h-[100vh] items-center sm:flex-row gap-10 sm:gap-0 
       "
    >
      <LandingPhoto />

      <div className=" flex flex-col justify-center items-center gap-10 ">
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
