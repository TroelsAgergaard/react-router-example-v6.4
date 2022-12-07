/** @jsxImportSource @emotion/react */

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const Users = () => {
  const [users, setUsers] = useState(undefined);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((users) => {
      setUsers(users.data);
    });
  }, []);

  return (
    <>
      <h1>Users:</h1>
      {users &&
        users.map((user) => (
          <Link
            key={user.id}
            to={`/user/${user.id}`}
            css={css`
              display: block;
              margin-bottom: 15px;
            `}
          >
            {user.name}
          </Link>
        ))}
    </>
  );
};

export default Users;
