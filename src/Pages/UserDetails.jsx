/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDetails = () => {
  const params = useParams();
  const [userData, setUserData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const style = {
    list: css`
      list-style-type: none;
      padding: 0;
      li {
        margin-bottom: 5px;
      }
    `,
  };

  useEffect(() => {
    setLoading(true);
    axios(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(
      (result) => {
        setUserData(result.data);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {userData && (
        <section>
          <h1>{userData.name}</h1>
          <ul css={style.list}>
            <li>Company: {userData.company.name}</li>
            <li>Email: {userData.email}</li>
            <li>Phone: {userData.phone}</li>
            <li>Website: {userData.website}</li>
          </ul>
        </section>
      )}
    </div>
  );
};

export default UserDetails;
