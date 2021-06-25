import styled from "styled-components";
import Phone from "../../../shared/components/svgs/Phone";
import Mail from "../../../shared/components/svgs/Mail";
import Follow from "../../../shared/components/svgs/Follow";
import { color } from "../../../shared/utils/styles";

export const StyledHeaderIcons = styled.div`
  width: 18%;
  min-width: 22rem;
  height: 100%;
  display: ${(props) => (props.small ? "none" : "flex")};
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: ${(props) => (props.small ? "flex" : "none")};
    position: relative;
    width: 40rem;
    height: 10rem;
    margin: auto;
    margin-top: 2rem;

    ${(props) =>
      props.small && props.sidebar
        ? "transition: all 0.65s 0.7s ease-out;opacity:1;transform:translateX(0)"
        : "transition: opacity 0.6s ease-out,transform 0.6s 0.6s ease-out;opacity:0;transform:translateX(100%)"};

    @media screen and (max-height: 600px) {
      margin-top: 0rem;
      width: 40rem;
      height: 8rem;
    }
    @media screen and (max-height: 400px) {
      width: 40rem;
      height: 6rem;
    }
  }
`;

export const HeaderIcon = styled.div`
  width: 33%;
  height: 62%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 1rem;
  -webkit-tap-highlight-color: transparent;

  svg {
    height: 100%;
    width: 100%;
    opacity: 0.9;
    stroke: ${(props) => props.theme.text.regular};
    @media screen and (max-width: 1200px) {
      stroke: ${color.primaryLightest};
    }
  }
`;

export const PhoneAnimate = styled(Phone)`
  .animate {
    stroke: ${(props) => props.theme.text.hover};
    stroke-dasharray: 69 71;
    stroke-dashoffset: 70;
    animation: aeugHgjR_draw 600ms linear 0ms forwards;
    @media screen and (max-width: 1200px) {
      stroke: ${color.primary};
    }
  }
  @keyframes aeugHgjR_draw {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes aeugHgjR_fade {
    0% {
      stroke-opacity: 1;
    }
    92.15686274509804% {
      stroke-opacity: 1;
    }
    100% {
      stroke-opacity: 0;
    }
  }
`;

export const MailAnimate = styled(Mail)`
  .animate_0 {
    stroke: ${(props) => props.theme.text.hover};
    stroke-dasharray: 69 71;
    stroke-dashoffset: 70;
    animation: BbwHnTZM_draw 666ms linear 0ms forwards;
    @media screen and (max-width: 1200px) {
      stroke: ${color.primary};
    }
  }
  .animate_1 {
    stroke: ${(props) => props.theme.text.hover};
    stroke-dasharray: 25 27;
    stroke-dashoffset: 26;
    animation: BbwHnTZM_draw 666ms linear 333ms forwards;
    @media screen and (max-width: 1200px) {
      stroke: ${color.primary};
    }
  }
  @keyframes BbwHnTZM_draw {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes BbwHnTZM_fade {
    0% {
      stroke-opacity: 1;
    }
    92.3076923076923% {
      stroke-opacity: 1;
    }
    100% {
      stroke-opacity: 0;
    }
  }
`;

export const FollowAnimate = styled(Follow)`
  .animate_0 {
    stroke: ${(props) => props.theme.text.hover};
    stroke-dasharray: 31 33;
    stroke-dashoffset: 32;
    animation: VHMRIhZM_draw 600ms linear 0ms forwards;
    @media screen and (max-width: 1200px) {
      stroke: ${color.primary};
    }
  }
  .animate_1 {
    stroke: ${(props) => props.theme.text.hover};
    stroke-dasharray: 31 33;
    stroke-dashoffset: 32;
    animation: VHMRIhZM_draw 600ms linear 300ms forwards;
    @media screen and (max-width: 1200px) {
      stroke: ${color.primary};
    }
  }
  @keyframes VHMRIhZM_draw {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes VHMRIhZM_fade {
    0% {
      stroke-opacity: 1;
    }
    92.15686274509804% {
      stroke-opacity: 1;
    }
    100% {
      stroke-opacity: 0;
    }
  }
`;
