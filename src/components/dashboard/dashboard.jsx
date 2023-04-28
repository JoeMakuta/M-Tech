import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../App";
import { useContext } from "react";

const Dashboard = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    toast.success("Welcome " + currentUser.userName);
  }, [currentUser]);
  return (
    <div>
      <div>
        <Toaster />
      </div>
      This is the dashboard !
    </div>
  );
};

export default Dashboard;
