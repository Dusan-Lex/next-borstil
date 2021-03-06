import { createGlobalStyle } from "styled-components";

import { color, font, mixin } from "../shared/utils/styles";

export default createGlobalStyle`

  html {
    height: 100%;
    min-height: 100%;
    font-size: 62.5%; // 1rem=10px
    
    // >1800px
    @media only screen and (min-width: 112.5em) {
      font-size: 75%;
    }

    //<1200px
    @media only screen and (max-width: 75em) {
      font-size: 56.25%;
    }

    //<900px
    @media only screen and (max-width: 56.25em) {
      font-size: 50%;
    }

    //<600px
    @media only screen and (max-width: 37.5em) {
      font-size: 43.75%;
    }
  }
  
  body {
    height: 100%;
    min-height: 100%;
    color: ${color.secondaryDarkest};
    -webkit-tap-highlight-color: transparent;
    line-height: 1.7;
    font-size: 1.6rem;
    ${font.regular}
    user-select: none;
  }

  *, *:after, *:before, input[type="search"] {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    ${font.semibold}
  }

  button {
    background: none;
    border: none;
  }

  button, input, select, textarea {
    outline: none;
    &:focus {
      outline: none;
    }
    &:disabled {
      opacity: 1;
    }
  }

  p {
    line-height: 1.4285;
    a {
      ${mixin.link()}
    }
  }

  textarea {
    line-height: 1.4285;
  }

  body, select {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${mixin.placeholderColor(color.secondaryDark)}

  
`;
