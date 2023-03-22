import { useState } from "react";
import { createContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./components/authentification/Landing/Landing";
import LoginForm from "./components/authentification/loginForm/loginForm";
import MainDashBoard from "./components/dashboard/mainDashboard";

export const UserContext = createContext();

function App() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [loginOrSignUp, setLoginOrSignUp] = useState("LandingWelcom");
  return (
    <UserContext.Provider
      value={{
        inputEmail,
        setInputEmail,
        inputPassword,
        setInputPassword,
        loginOrSignUp,
        setLoginOrSignUp,
      }}
    >
      <div className="font-MainFont bg-gradient-to-b from-white to-amber-100 justify-center flex">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<MainDashBoard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
