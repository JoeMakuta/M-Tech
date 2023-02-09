import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";

const LandingBottons = () => {
  const { loginOrSignUp, setLoginOrSignUp } = useContext(UserContext);
  const Navigate = useNavigate();
  return (
    <div className="text-center flex justify-center items-center flex-col gap-5 fixed bottom-10 ">
      <div className=" flex flex-col justify-center items-center gap-10 ">
        <div className="font-bold text-xs flex justify-between items-center  bg-gray-300 w-[70vw] sm:w-[40vw] h-16 rounded-xl shadow-3xl border-[2px] border-white ">
          <button
            className=" bg-white rounded-xl w-[55%] h-full border-[1px]"
            onClick={() => {
              setLoginOrSignUp("LandingWelcom");
            }}
          >
            S'enregistrer
          </button>
          <button
            className="rounded-xl w-[50%] "
            onClick={() => {
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
