import { css } from '@emotion/react';

const globalStyles = css`
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    src: url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2")
        format("woff2"),
      url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff")
        format("woff"),
      url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf")
        format("opentype");
    font-display: swap;
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    src: url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2")
        format("woff2"),
      url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff")
        format("woff"),
      url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf")
        format("opentype");
    font-display: swap;
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    src: url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2")
        format("woff2"),
      url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff")
        format("woff"),
      url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf")
        format("opentype");
    font-display: swap;
  }

  body,
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    font-size: 14px;
    background-color: rgb(250, 251, 252);
    color: rgb(0, 5, 40);
  }

  #__next {
    position: relative;
    width: 100%;
    height: 100%;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
    color: rgb(0, 5, 40);
  }

  a:visited,
  a:focus,
  a:hover,
  a {
    color: #333;
    text-decoration: none;
  }
`;

export default globalStyles;
