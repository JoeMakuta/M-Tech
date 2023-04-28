import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../App";
import { useContext } from "react";
import axios from "axios";

const { VITE_SERVER_URI } = import.meta.env;

const Dashboard = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const getProducts = async () => {
    const response = await axios.get(VITE_SERVER_URI + "/product", {
      headers: {
        Authorization: `Bearer ${currentUser?.token}`,
      },
    });
    console.log("The first products : ", response);
  };

  useEffect(() => {
    getProducts();
    toast.success("Welcome " + currentUser?.userName);
  }, []);

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <p>This is the dashboard !</p>
    </div>
  );
};

export default Dashboard;
