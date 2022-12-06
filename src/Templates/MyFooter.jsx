/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const MyFooter = () => {
  return (
    <footer
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 90px;
        background-color: #22223b;
        color: #f2e9e4;
        position: fixed;
        bottom: 0;
      `}
    >
      Just a really fancy footer template :)
    </footer>
  );
};

export default MyFooter;
