import styled from "styled-components";
import { color, mixin, font } from "../../shared/utils/styles";
import ToggleButton from "../../shared/components/Buttons/ToggleButton/ToggleButton";

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  ${mixin.boxShadowHeader};
  transform: ${(props) =>
    props.hideHeaderUp ? "translateY(-4.5vh)" : "translateY(0)"};
  transition: transform 0.4s linear;
  z-index: 100;
  transform: translateY(-100%);
  opacity: 0;
  animation: header-a1 1s 0.2s forwards;
  @media only screen and (max-width: 600px) {
    /* animation-delay: 0.7s; */
  }

  @keyframes header-a1 {
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HeaderUp = styled.div`
  height: 4vh;
  min-height: 3rem;
  transition: height 0.4s linear;
  background-color: ${color.primaryLightest};
  ${mixin.center}
  @media only screen and (max-width: 1200px) {
    display: none;
  }

  h2 {
    ${font.regular};
    font-size: 1.8rem;
    color: ${color.secondaryLight};
  }
`;

export const HeaderDown = styled.div`
  height: 6vh;
  min-height: 5.5rem;

  display: flex;
  width: 100%;

  background-color: ${(props) => props.theme.background};

  @media only screen and (max-width: 1200px) {
    background-color: ${color.primary};
    & > .header-icons {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    height: 8.5vh;
  }
`;

export const ThemeToggleButton = styled(ToggleButton)`
  position: absolute;
  right: 30rem;
`;
export const LangToggleButton = styled(ToggleButton)`
  display: inline-block;
  position: absolute;
  left: 30rem;
  @media only screen and (max-width: 1200px) {
    position: relative;
    left: initial;
  }
`;
export const LangSpan = styled.span`
  position: absolute;
  left: 10rem;
  color: ${color.secondary};
  font-size: 1.8rem;
  width: 19rem;
  text-align: right;
  @media only screen and (max-width: 1200px) {
    position: relative;
    color: ${color.primaryLightest};
    font-size: 3rem;
    text-transform: uppercase;
    left: initial;
    width: initial;
    margin-right: 1.5rem;

    @media screen and (min-height: 900px) {
      font-size: 3.5rem;
    }
    @media only screen and (max-height: 600px) {
      font-size: 2.5rem;
    }
    @media only screen and (max-height: 500px) {
      font-size: 2rem;
    }
  }
`;
export const ThemeSpan = styled.span`
  position: absolute;
  right: 15rem;
  color: ${color.secondary};
  font-size: 1.8rem;
  width: 14rem;
  text-align: left;
`;
