import React, { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const MainDashBoard = () => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    toast.success("Successfully logged in as " + currentUser?.userName);
  }, []);

  return (
    <div>
      <div>
        <Toaster />
      </div>
      This is the darshboard !
    </div>
  );
};
export default MainDashBoard;
