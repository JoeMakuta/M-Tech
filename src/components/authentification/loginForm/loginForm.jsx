import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TbLoader } from "react-icons/tb";
import { RiLoader4Line } from "react-icons/ri";
import {
  button_style,
  input_container,
  input_style,
} from "../../../assets/styles/styles";
import { UserContext } from "../../../App";
import { useContext } from "react";
import { validateEmail } from "../../../validation/email";
import { useEffect } from "react";
import { validatePassword } from "../../../validation/password";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const { VITE_SERVER_URI } = import.meta.env;

const LoginForm = () => {
  const { inputEmail, setInputEmail, inputPassword, setInputPassword } =
    useContext(UserContext);

  const [showPassword, setShowPassword] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handlePassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  const handleOnChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleOnPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleSubmit = async () => {
    // check if the inputs are valid

    if (emailValid && passwordValid) {
      setIsLoading(true);

      try {
        await fetch(VITE_SERVER_URI + "/admin/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            userUniqueIdentifier: inputEmail,
            passWord: inputPassword,
          }),
        })
          .then((data) => data.json())
          .then((data) => {
            setIsLoading(false);
            console.log(data);
            if (data.status >= 200 && data.status <= 300) {
              toast.success(data.message);
              navigate("/dashboard");
              localStorage.setItem("user", JSON.stringify(data.user));
            } else {
              toast.error(data.message);
            }
          });
        // .catch((err) => {
        //   setIsLoading(false);
        //   if (err instanceof TypeError) console.log("NetWork Error");
        // });
      } catch (error) {
        setIsLoading(false);
        toast.error(error.message);
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setEmailValid(validateEmail(inputEmail));
  }, [inputEmail]);

  useEffect(() => {
    setPasswordValid(validatePassword(inputPassword));
  }, [inputPassword]);

  return (
    <div className=" flex flex-col justify-start  items-center gap-5 animate-upperIn ">
      <div>
        <Toaster />
      </div>
      <div className="flex flex-col items-center gap-4 text-center ">
        <h1 className=" font-bold text-3xl tracking-tighter ">Salut encore!</h1>
        <p className="text-sm w-[80vw] sm:w-[50vw]">
          Bienvenu encore, vous nous aviez manqué!
        </p>
      </div>
      <form
        className=" flex flex-col w-[85vw] lg:w-[25vw] gap-10 "
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className=" flex flex-col gap-2 ">
          <div className=" flex flex-col gap-1 ">
            <p className=" text-xs ">Email :</p>
            <div
              className={
                input_container +
                (emailValid ? "border-[1px]" : " border-[1px] border-red-600 ")
              }
            >
              <input
                required
                type="text"
                className={input_style}
                placeholder="Nom d'utilisateur ou email"
                onChange={handleOnChangeEmail}
              />
            </div>
            {emailValid ? null : (
              <p className=" text-xs text-red-600 ">
                Veillez saisir un email valide
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-1 ">
            <p className=" text-xs ">Mot de passe :</p>
            <div
              className={
                input_container +
                (passwordValid
                  ? " pr-4 border-[1px] "
                  : " pr-4 border-[1px] border-red-600 ")
              }
            >
              <input
                required
                className={input_style}
                type={showPassword ? "password" : "text"}
                placeholder="**************"
                onChange={handleOnPassword}
              />

              <div onClick={handlePassword}>
                {showPassword ? (
                  <AiOutlineEye
                    className=" cursor-pointer "
                    size={30}
                    color="#ADA2BF"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    size={30}
                    className=" cursor-pointer"
                    color="#ADA2BF"
                  />
                )}
              </div>
            </div>
            {passwordValid ? null : (
              <p className=" text-xs text-red-600 ">
                Veillez saisir un mot de passe valide
              </p>
            )}
          </div>
        </div>

        {/* <p className=' text-xs text-red-600 ' >
               Incorrect email or password
            </p> */}

        <button
          type="submit"
          className={button_style + "items-center justify-center flex gap-4"}
          disabled={isLoading}
        >
          {isLoading ? (
            <RiLoader4Line className=" animate-spin " size={25} />
          ) : null}
          <div>Se connecter</div>
        </button>
        <div className=" flex justify-center ">
          <a href="#" className="text-sm underline text-blue-500 ">
            Mot de passe oublié ?
          </a>
        </div>
      </form>
      <div>{/* <p>Ou continuer avec</p> */}</div>
    </div>
  );
};
export default LoginForm;
