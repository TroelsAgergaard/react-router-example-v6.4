/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const LinkWrapper = ({ route, description }) => {
  return (
    <Link
      css={css`
        text-decoration: none;
      `}
      to={route}
    >
      {description}
    </Link>
  );
};

export default LinkWrapper;
