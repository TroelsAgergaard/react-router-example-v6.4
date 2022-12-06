/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const NavItem = (props) => {
  return (
    <span
      css={css`
        color: #f2e9e4;
      `}
    >
      {props.title}
    </span>
  );
};

export default NavItem;
