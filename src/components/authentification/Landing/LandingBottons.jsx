import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";

const LandingBottons = () => {
  const { loginOrSignUp, setLoginOrSignUp } = useContext(UserContext);

  const [selected, setSelected] = useState("se_connecter");

  const Navigate = useNavigate();
  return (
    <div className="text-center flex justify-center items-center flex-col gap-5 fixed bottom-10 ">
      <div className=" flex flex-col justify-center items-center gap-10 ">
        <div className="font-bold text-xs overflow-hidden flex justify-between items-center  bg-gray-300 w-[70vw] sm:w-[20vw] h-10 rounded-xl shadow-3xl ">
          <button
            className={
              selected === "se_connecter"
                ? "bg-amber-600  w-[50%] h-full border-[1px] animate-wiggle "
                : "  w-[50%] h-full "
            }
            onClick={() => {
              setSelected("se_connecter");
              setLoginOrSignUp("LandingWelcom");
            }}
          >
            S'enregistrer
          </button>
          <button
            className={
              selected === "se_connecter"
                ? "  w-[50%] h-full "
                : "bg-amber-600  w-[50%] h-full border-[1px] animate-wiggle1 "
            }
            onClick={() => {
              setSelected("se_connecte");
              setLoginOrSignUp("loginForm");
            }}
          >
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingBottons;
