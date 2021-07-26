import styled from "styled-components";
import { mixin, color } from "../../shared/utils/styles";

export const StyledContactInfo = styled.div`
  height: 45rem;
  padding: 0 2rem 2rem;
  display: flex;
  overflow: hidden;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: 90rem;
  }
`;

export const Contact = styled.div`
  background-color: ${(props) => props.theme.background};
  flex: 1;
  animation: fadeInLeft 0.9s ease-out 0.9s both;
  @keyframes fadeInLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const MapIFrame = styled.iframe`
  flex: 1;
  border: none;
  animation: fadeInRight 0.9s ease-out 0.9s both;
  @keyframes fadeInRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
