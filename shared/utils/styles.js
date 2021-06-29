import { css } from "styled-components";
import Color from "color";

export const color = {
  primaryDark: "#b16e17",
  primary: "#de9e48",
  primaryLight: "#f5deb3",
  primaryLightest: "#faf1e4",
  secondaryDarkest: "#272223",
  secondaryDark: "#372c2e",
  secondary: "#563727",
  secondaryLight: "#7a431d",
  backdrop: "rgba(55, 44, 46, 0.6)",
};

export const font = {
  light: 'font-family: "Poppins",sans-serif; font-weight: 300;',
  regular: 'font-family: "Poppins",sans-serif; font-weight: 400;',
  medium: 'font-family: "Poppins",sans-serif; font-weight: 500;',
  semibold: 'font-family: "Poppins",sans-serif; font-weight: 600;',
  bold: 'font-family: "Poppins",sans-serif; font-weight: 700;',
  black: 'font-family: "Poppins",sans-serif; font-weight: 900;',
};

export const zIndexValues = {
  modal: 101,
  dropdown: 100,
  sidebar: 10000,
  burgerBtn: 10001,
  header: 1000,
};

export const mixin = {
  center: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  darken: (colorValue, amount) => Color(colorValue).darken(amount).string(),
  lighten: (colorValue, amount) => Color(colorValue).lighten(amount).string(),
  rgba: (colorValue, opacity) => Color(colorValue).alpha(opacity).string(),

  boxShadowHeader: css`
    box-shadow: 0 0.3rem 1.4rem -0.8rem ${(props) => props.theme.backgroundRev};
  `,
  boxShadowPopup: css`
    box-shadow: 0 0 0.5rem -1px ${(props) => props.theme.background};
  `,
  boxShadowDropdown: css`
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.31) 0px 0px 1px;
  `,

  coverViewport: css`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  `,
  coverParent: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
  placeholderColor: (colorValue) => css`
    ::-webkit-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    ::-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-ms-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
  `,
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  backgroundImage: (imageURL) => css`
    background-image: url("${imageURL}");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${color.backgroundLight};
  `,
  link: (colorValue = color.textLink) => css`
    cursor: pointer;
    color: ${colorValue};
    ${font.medium}
    &:hover, &:visited, &:active {
      color: ${colorValue};
    }
    &:hover {
      text-decoration: underline;
    }
  `,
  tag: (
    background = color.backgroundMedium,
    colorValue = color.textDarkest
  ) => css`
    display: inline-flex;
    align-items: center;
    height: 24px;
    padding: 0 8px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    color: ${colorValue};
    background: ${background};
    ${font.bold}
    ${font.size(12)}
    i {
      margin-left: 4px;
    }
  `,
};
