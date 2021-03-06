import styled from "styled-components";
import { color } from "../../../shared/utils/styles";
export const StyledHeaderLogo = styled.div`
  width: 18%;
  min-width: 22rem;
  height: 100%;
  align-self: center;
  display: flex;
  align-items: center;
  -webkit-tap-highlight-color: transparent;

  @media only screen and (max-width: 1200px) {
    width: 10rem;
    min-width: 0;
  }

  div {
    overflow: hidden;
    @media only screen and (max-width: 1200px) {
      display: none;
    }

    p {
      height: 100%;
      font-family: "Playfair Display", serif;
      font-size: 2.3rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      transform: translateX(-12rem);
      transition: transform 0.7s ease-in-out;
      color: ${color.primaryLightest};
    }
  }
  a {
    width: 30%;
    min-width: 8rem;
    height: 100%;
    margin-left: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0;

    svg {
      width: 90%;
      height: 90%;
    }

    @media only screen and (max-width: 1200px) {
      width: 100%;
      min-width: 0;
    }

    @media only screen and (max-width: 600px) {
      margin-left: 1rem;
    }
  }

  .pine {
    fill: ${(props) => props.theme.text.regular};
    @media only screen and (max-width: 1200px) {
      fill: ${color.secondary};
    }
  }
  &:active {
    .pine:not(.center) {
      fill: ${color.secondaryLight};
    }
  }

  @media only screen and (min-width: 1201px) {
    &:hover {
      .pine {
        fill: ${(props) => props.theme.text.hover};
      }
      div p {
        transform: translateX(0);
      }
    }
    &:active {
      .pine {
        fill: ${(props) => props.theme.text.regular} !important;
      }
    }
  }
`;
