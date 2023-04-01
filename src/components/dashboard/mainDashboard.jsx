import React, { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";

const MainDashBoard = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }else{
      
    }
    toast.success("Successfully logged in as " + currentUser?.userName);
  }, []);

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <DatePicker />
      This is the darshboard !
    </div>
  );
};
export default MainDashBoard;
