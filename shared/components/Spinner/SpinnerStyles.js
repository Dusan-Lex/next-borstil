import styled from "styled-components";
import { color } from "../../utils/styles";
export const Roller = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8rem;
  height: 8rem;

  div {
    animation: roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 4rem 4rem;
  }
  div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: ${color.primary};
    margin: -0.4rem 0 0 -0.4rem;
  }
  div:nth-child(1) {
    animation-delay: -0.036s;
  }
  div:nth-child(1):after {
    top: 6.3rem;
    left: 6.3rem;
  }
  div:nth-child(2) {
    animation-delay: -0.072s;
  }
  div:nth-child(2):after {
    top: 6.8rem;
    left: 5.6rem;
  }
  div:nth-child(3) {
    animation-delay: -0.108s;
  }
  div:nth-child(3):after {
    top: 7.1rem;
    left: 4.8rem;
  }
  div:nth-child(4) {
    animation-delay: -0.144s;
  }
  div:nth-child(4):after {
    top: 7.2rem;
    left: 4rem;
  }
  div:nth-child(5) {
    animation-delay: -0.18s;
  }
  div:nth-child(5):after {
    top: 7.1rem;
    left: 3.2rem;
  }
  div:nth-child(6) {
    animation-delay: -0.216s;
  }
  div:nth-child(6):after {
    top: 6.8rem;
    left: 2.4rem;
  }
  div:nth-child(7) {
    animation-delay: -0.252s;
  }
  div:nth-child(7):after {
    top: 6.3rem;
    left: 1.7rem;
  }
  div:nth-child(8) {
    animation-delay: -0.288s;
  }
  div:nth-child(8):after {
    top: 5.6rem;
    left: 1.2rem;
  }

  @keyframes roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
