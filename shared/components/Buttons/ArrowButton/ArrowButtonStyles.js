import styled from "styled-components";
import { color } from "../../../utils/styles";

export const StyledAnchor = styled.a`
  border: 2px solid ${color.primaryLightest};
  color: white;
  background-color: ${(props) =>
    props.dark ? color.secondary : color.primary};
  padding: 0.3rem 4rem;
  font-size: 2rem;
  display: inline-block;
  transform: translateZ(0);
  transition: all 0.2s;
  box-shadow: 0 0 13px -7px ${color.primaryLightest};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  .first {
    display: inline-block;
    margin-left: 2.5rem;
    color: transparent;
    transform: translateX(-2.1rem);
    transition: all 0.45s 0.15s;
  }

  .second {
    display: inline-block;
    transform: translateX(-0.9rem);
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => (props.dark ? color.primary : color.secondary)};
    transform: translateX(-100%);
    transition: all 0.5s;
  }

  @media (hover: none) {
    background-color: ${(props) =>
      props.dark ? color.primary : color.secondary};
  }

  @media (hover: hover) and (pointer: fine) {
    .first {
      color: ${(props) => (props.dark ? color.secondary : color.primary)};
    }
    &:hover {
      color: ${(props) => (props.dark ? color.secondary : color.primary)};
      border: 2px solid transparent;
      box-shadow: none;

      .first {
        color: ${(props) => (props.dark ? color.secondary : color.primary)};
        transform: translateX(0);
      }
      .second {
        color: ${(props) => (props.dark ? color.secondary : color.primary)};
      }
      &::before {
        transform: translateX(0);
      }
    }
  }
`;
