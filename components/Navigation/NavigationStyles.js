import styled, { keyframes } from "styled-components";
import { color, mixin, font } from "../../shared/utils/styles";
import ToggleButton from "../../shared/components/ToggleButton/ToggleButton";

const headerAnimation = keyframes`
  to {
    opacity: 1;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  opacity: 0;
  ${mixin.boxShadowHeader};
  transform: ${(props) =>
    props.hideHeaderUp ? "translateY(-4.5vh)" : "translateY(0)"};
  animation: ${headerAnimation} 1.5s forwards;
  transition: transform 0.4s linear;
  z-index: 100;
`;

export const HeaderUp = styled.div`
  height: 4.5vh;
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
  height: 7vh;
  min-height: 6rem;
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.background};

  @media only screen and (max-width: 1200px) {
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
  right: 10rem;
`;
export const LangToggleButton = styled(ToggleButton)`
  display: inline-block;
  position: absolute;
  left: 25rem;
  @media only screen and (max-width: 1200px) {
    position: relative;
    left: initial;
  }
`;
export const Span = styled.span`
  position: absolute;
  left: 5rem;
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
