import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
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

const { SERVER_URI } = import.meta.env;

const LoginForm = () => {
  const { inputEmail, setInputEmail, inputPassword, setInputPassword } =
    useContext(UserContext);

  const [showPassword, setShowPassword] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const handlePassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  const handleOnChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleOnPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log(SERVER_URI);
  };

  useEffect(() => {
    setEmailValid(validateEmail(inputEmail));
  }, [inputEmail]);

  useEffect(() => {
    setPasswordValid(validatePassword(inputPassword));
  }, [inputPassword]);

  return (
    <div className=" flex flex-col justify-start mt-[10vh] items-center gap-10 ">
      <div className="flex flex-col items-center gap-4 text-center ">
        <h1 className=" font-bold w-40 text-5xl tracking-tighter ">
          Salut encore!
        </h1>
        <p className="text-sm w-[80vw]">
          Bienvenu encore, vous nous aviez manqué!
        </p>
      </div>
      <form
        className=" flex flex-col w-[350px] gap-4 "
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className=" flex flex-col gap-1 ">
          <p className=" text-sm ">Email :</p>
          <div
            className={
              input_container +
              (emailValid ? "border-[1px]" : " border-[1px] border-red-600 ")
            }
          >
            <input
              required
              type="email"
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
          <p className=" text-sm ">Mot de passe :</p>
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
              className={input_style }
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
              Veillez saisir un mot de passe
            </p>
          )}
        </div>

        {/* <p className=' text-xs text-red-600 ' >
               Incorrect email or password
            </p> */}

        <button type="submit" className={button_style}>
          Se connecter
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
