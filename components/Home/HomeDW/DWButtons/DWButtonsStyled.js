import styled from "styled-components";
import { color, mixin } from "../../../../shared/utils/styles";

export const StyledDwButtons = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;

  @media only screen and (min-width: 600px) {
    width: 90%;
    margin: 2rem auto;
  }
  @media only screen and (min-width: 800px) {
    padding-bottom: 2rem;
  }
`;

export const DwButton = styled.button`
  padding: 1rem 6rem;
  font-size: 1.7rem;
  text-transform: uppercase;
  background-color: transparent;
  color: ${(props) => props.theme.text.regularRev};
  border: 1.8px solid ${(props) => props.theme.background};
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: all 0.1s;
  animation: 0.7s ${(props) => props.index * 0.15}s ease-out backwards
    ${(props) => (props.inView ? "running" : "paused")} dwButtonsA1;

  @keyframes dwButtonsA1 {
    from {
      opacity: 0;
      transform: translateY(260%);
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media only screen and (max-width: 1200px) {
    border: 1.6px solid ${color.secondary};
    color: ${color.secondary};
  }
  @media only screen and (max-width: 800px) {
    animation: none;
  }
  @media only screen and (max-width: 600px) {
    width: 30%;
    padding: 1rem 0;
  }

  @media only screen and (min-width: 1800px) {
    font-size: 1.5rem;
  }

  &.active {
    background-color: ${(props) => props.theme.background};
    color: white;
    box-shadow: 0 1px 9px -2px ${(props) => mixin.rgba(props.theme.background, 0.5)};
    @media only screen and (max-width: 600px) {
      border: 1.6px solid ${color.secondary};
      background-color: ${color.primary};
    }
  }

  &:hover {
    @media only screen and (min-width: 1200px) {
      color: ${color.primaryLightest};
      border: 1.8px solid ${color.primaryLightest};
      box-shadow: 0 1px 9px -2px ${(props) => mixin.rgba(props.theme.background, 0.5)};
      @media only screen and (max-width: 600px) {
        border: 1.6px solid ${color.primaryLightest};
      }
    }
  }
`;
