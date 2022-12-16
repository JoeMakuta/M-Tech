import { useState } from "react"
import { createContext } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Landing from "./components/authentification/Landing/Landing"
import LoginForm from "./components/authentification/loginForm.jsx/loginForm"

export const UserContext = createContext()

function App() {
  return (
    <UserContext.Provider >
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
