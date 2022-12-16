import { useState } from "react"
import { createContext } from "react"
import Login from "./components/authentification/login/login"

export const UserContext = createContext()


function App() {
  return (
    <UserContext.Provider >
      <div className="font-MainFont bg-gray-100 h-[100vh] justify-center flex">
        <Login />
      </div>
    </UserContext.Provider>

  )
}

export default App
