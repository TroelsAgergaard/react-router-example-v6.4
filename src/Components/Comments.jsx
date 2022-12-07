/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import axios from "axios";

const style = {
  list: css`
    list-style-type: none;
    padding: 0;
    li {
      margin-bottom: 5px;
    }
  `,
};

export const Comments = () => {
  const [comments, setComments] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios("https://jsonplaceholder.typicode.com/comments").then((result) => {
      setComments(result.data);
      setLoading(false);
    });
  }, []);

  return (
    <ul css={style.list}>
      {loading && <div>Loading...</div>}
      {comments &&
        comments.map((comment) => <li key={comment.id}>{comment.email}</li>)}
    </ul>
  );
};
