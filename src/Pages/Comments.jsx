import { Outlet } from "react-router-dom";

const Comments = () => {
  return (
    <>
      <h1>Comments from:</h1>
      <Outlet />
    </>
  );
};

export default Comments;
