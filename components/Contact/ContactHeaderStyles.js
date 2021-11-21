import styled from "styled-components";
import { mixin, color } from "../../shared/utils/styles";

export const StyledContactHeader = styled.div`
  position: relative;
  height: 76vh;
  color: white;
  background-image: url("images/contact/Borstil-contact-2.jpg");
  background-size: cover;
  background-position: 50% 0%;
  ${mixin.center}
  flex-direction: column;
  padding-top: 8.5rem;
  text-align: center;
  overflow: hidden;

  @media only screen and (max-width: 1200px) {
    padding-top: 7.5rem;
    height: 70rem;
  }

  &:after {
    content: "";
    ${mixin.coverParent};
    background-color: ${mixin.rgba(color.secondary, 0.65)};
  }
`;

export const ContactHeaderTitle = styled.h3`
  font-size: 3.8rem;
  line-height: 4rem;
  margin-bottom: 1rem;
  z-index: 1;
  animation: moveInRight 0.9s ease-out 0.4s both;
  @keyframes moveInRight {
    0% {
      transform: translateX(10rem);
      opacity: 0;
    }
    80% {
      transform: translateX(-1rem);
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
export const ContactHeaderSubtitle = styled.h6`
  font-size: 2.1rem;
  font-weight: 500;
  z-index: 1;

  animation: moveInLeft 0.9s ease-out 0.4s both;
  @keyframes moveInLeft {
    0% {
      transform: translateX(-10rem);
      opacity: 0;
    }
    80% {
      transform: translateX(1rem);
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
