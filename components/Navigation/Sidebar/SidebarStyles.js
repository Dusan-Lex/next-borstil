import styled from "styled-components";
import { color } from "../../../shared/utils/styles";
import { mixin } from "../../../shared/utils/styles";

export const StyledSidebar = styled.div`
  @media screen and (min-width: 1201px) {
    display: none;
  }
`;

export const SidebarBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${color.backdrop};
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: all 0.7s ease-in-out;
`;

export const SidebarFront = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 600px;
  height: 100vh;
  color: white;
  background-color: transparent;
  ${mixin.center}
  flex-direction: column;
  z-index: 1;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(600px)")};
  transition: transform 1s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 101%;
    height: 101%;
    top: 0;
    z-index: -1;
    transform: ${(props) => (props.show ? "scaleX(1)" : "scaleX(0)")};
    transform-origin: right;
  }

  &::before {
    background-color: ${color.primaryLightest};
    transition: transform 0.4s ease-in-out;
  }
  &::after {
    background-color: ${color.secondaryDark};
    transition: transform 0.7s 0.3s ease-in-out;
  }
`;

export const SidebarBox = styled.div`
  width: 100%;
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 8rem 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-height: 700px) and (min-width: 700px) {
    justify-content: center;
    transform: translateY(-15rem);
  }
`;

export const SidebarItems = styled.ul`
  width: 100%;
  text-align: center;
`;

export const Lang = styled.div`
  ${mixin.center}
  flex-wrap: wrap;
  margin-bottom: 2rem;
  ${(props) =>
    props.sidebar
      ? `transition: all 0.55s 0.75s ease-out;opacity:1;transform:translateX(0)`
      : "transition: opacity 0.6s ease-out,transform 0.1s 0.6s ease-out;opacity:0;transform:translateX(-70%)"};
  @media screen and (max-height: 450px) {
    margin-bottom: 1rem;
  }
`;
