import React, { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const { VITE_SERVER_URI } = import.meta.env;

const MainDashBoard = async () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [products, setProducts] = useState([]);

  // const loginUser = async () => {
  //   let Josh = await axios.get(VITE_SERVER_URI + "/product");
  //   console.log(Josh);
  // };

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
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
