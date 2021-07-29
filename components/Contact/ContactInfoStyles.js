import styled from "styled-components";
import { mixin, color } from "../../shared/utils/styles";

export const StyledContactInfo = styled.div`
  height: 50rem;
  padding: 0 2rem 2rem;
  display: flex;
  overflow: hidden;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: 90rem;
  }
`;

export const Contact = styled.div`
  flex: 1;
  display: flex;
  /* border: 0.15rem solid ${color.secondaryLight}; */
  margin-right: 1rem;
  flex-direction: column;
  animation: fadeInLeft 0.9s ease-out 2s both;
  @keyframes fadeInLeft {
    0% {
      transform: translate(-100%);
      opacity: 0;
    }

    100% {
      transform: translate(0);
      opacity: 1;
    }
  }
  @media only screen and (max-width: 900px) {
    margin-bottom: 2rem;
    border: 0.15rem solid ${color.secondary};
  }
`;

export const ContactBox = styled.div`
  height: 33.33%;
  color: ${color.secondary};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-size: 2rem;
    width: 35rem;
  }
  svg {
    width: 5.5rem;
    height: 5.5rem;
    margin: 2rem;
    stroke: ${color.primaryDark};
  }
`;

export const MapIFrame = styled.iframe`
  flex: 1;
  border: none;
  /* border: 0.15rem solid ${color.secondaryLight}; */
  animation: fadeInRight 0.9s ease-out 2s both;
  @keyframes fadeInRight {
    0% {
      transform: translate(100%);
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;
