import { useParams } from "react-router-dom";
import UserNavbar from "../../components/user/NavBar";

const UserDashBoard = () => {
  const { userId } = useParams();

  return (
    <>
      <UserNavbar />
    </>
  );
};

export default UserDashBoard;
