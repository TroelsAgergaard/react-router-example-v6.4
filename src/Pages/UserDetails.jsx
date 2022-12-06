import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  return <p>User Details: {params.id}</p>;
};

export default UserDetails;
