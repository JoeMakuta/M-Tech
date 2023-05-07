import { useState } from "react";
import { createContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./components/authentification/Landing/Landing";
import LoginForm from "./components/authentification/loginForm/loginForm";
import Dashboard from "./components/dashboard/dashboard";
import { HashRouter } from "react-router-dom";
import { Router } from "react-router-dom";

export const UserContext = createContext();
const initialUser = {
  id: "",
  role: null,
  token: "",
  userEmail: "",
  userName: "",
};

function App() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [loginOrSignUp, setLoginOrSignUp] = useState("LandingWelcom");
  const [currentUser, setCurrentUser] = useState(initialUser);
  return (
    <UserContext.Provider
      value={{
        inputEmail,
        setInputEmail,
        inputPassword,
        setInputPassword,
        loginOrSignUp,
        setLoginOrSignUp,
        currentUser,
        setCurrentUser,
      }}
    >
      <div className="font-MainFont bg-gradient-to-b from-white to-amber-100 justify-center flex">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
