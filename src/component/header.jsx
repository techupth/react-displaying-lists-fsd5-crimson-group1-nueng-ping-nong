/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Header() {
  return (
    <h1
      className="movie-list-header"
      css={css`
        padding-bottom: 20px;
        text-align: center;
        font-family: kanit . sans-serif;
        font-size: 40px;
        font-weight: 400;
        font-decoration: bold;
      `}
    >
      Movie List Section
    </h1>
  );
}

export default Header;
