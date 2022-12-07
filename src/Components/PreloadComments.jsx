/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useLoaderData } from "react-router-dom";

const PreloadComments = () => {
  const commentsData = useLoaderData();

  const style = {
    list: css`
      list-style-type: none;
      padding: 0;
      li {
        margin-bottom: 5px;
      }
    `,
  };

  return (
    <>
      <h1>Preloaded Comments - Say good­bye to loading indicators ;)</h1>
      <ul css={style.list}>
        {commentsData &&
          commentsData.map((comment) => (
            <li key={comment.id}>{comment.email}</li>
          ))}
      </ul>
    </>
  );
};
export default PreloadComments;

export async function loader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return data;
}
