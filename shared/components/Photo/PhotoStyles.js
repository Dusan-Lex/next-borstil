import styled from "styled-components";
import { color, mixin } from "../../utils/styles";

export const StyledPhoto = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 1.5rem;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;

  &::before {
    content: "";
    position: absolute;
    top: 1rem;
    left: 2.5rem;
    right: 2.5rem;
    bottom: 1rem;
    border-right: 0.3rem solid ${(props) => props.theme.backgroundRev};
    border-left: 0.3rem solid ${(props) => props.theme.backgroundRev};
    transform: scaleY(0);
    transition: transform 0.6s;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 2.5rem;
    left: 1rem;
    right: 1rem;
    bottom: 2.5rem;
    border-top: 0.3rem solid ${(props) => props.theme.backgroundRev};
    border-bottom: 0.3rem solid ${(props) => props.theme.backgroundRev};
    transform: scaleX(0);
    transition: transform 0.6s;
  }
  &:hover::before {
    transform: scaleY(1);
  }
  &:hover::after {
    transform: scaleX(1);
  }

  &:hover .hover-div {
    opacity: 0.6;
  }

  &:hover svg {
    transform: translateY(0);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  visibility: ${(props) => (props.load ? "hidden" : "visible")};
  max-height: ${(props) => (props.load ? "0" : "100%")};
`;

export const LoadingDiv = styled.div`
  width: 100%;
  position: relative;
  padding-top: ${(props) => `${props.ratio}%`};
  /* background-color: ${color.primaryLightest}; */
  ${mixin.center}
  animation: blinkA 0.8s infinite;
  @keyframes blinkA {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: ${color.primaryLightest};
    }
    100% {
      background-color: transparent;
    }
  }
`;

export const HoverDiv = styled.div`
  ${mixin.coverParent};
  ${mixin.center};
  opacity: 0;
  background-color: ${(props) => props.theme.background};
  transition: opacity 0.6s;
`;

export const ZoomDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${mixin.center};
  overflow: hidden;
  svg {
    stroke: ${(props) => props.theme.backgroundRev};
    transform: translateY(100%);
    transition: transform 0.6s;

    @media only screen and (min-width: 1500px) {
      stroke-width: 1.25;
      width: 4.5rem;
      height: 4.5rem;
    }

    @media only screen and (max-width: 1200px) {
      stroke-width: 1.25;
    }

    @media only screen and (max-width: 600px) {
      stroke-width: 1;
    }
  }
`;
