/** @jsxImportSource @emotion/react */
import NavItem from "../Components/NavItem";
import LinkWrapper from "../Components/LinkWrapper";
import { css } from "@emotion/react";

const Navigation = (props) => {
  const style = {
    nav: css`
      display: flex;
      align-items: center;
      background-color: #4a4e69;
      height: 90px;
      margin-bottom: 75px;
    `,
    flex: css`
      width: 100vw;
      display: flex;
      justify-content: space-around;
      list-style-type: none;
    `,
  };

  return (
    <nav css={style.nav}>
      <ul css={style.flex}>
        <li>
          <LinkWrapper
            route="/"
            description={<NavItem title="Dynamic Segments" />}
          />
        </li>
        <li>
          <LinkWrapper
            route="/kontakt"
            description={<NavItem title="All Comments" />}
          />
        </li>
        <li>
          <LinkWrapper
            route="/omos"
            description={<NavItem title="Preloaded All Comments" />}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
