import { useState } from "react"
import { createContext } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Landing from "./components/authentification/Landing/Landing"
import LoginForm from "./components/authentification/loginForm/loginForm"

export const UserContext = createContext()

function App() {

  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  return (
    <UserContext.Provider value={
      {
        inputEmail, setInputEmail,
        inputPassword, setInputPassword
      }} >
      <div className="font-MainFont bg-gray-100 h-[100vh] justify-center flex">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>

  )
}

export default App
