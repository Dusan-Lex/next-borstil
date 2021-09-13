import styled from "styled-components";
import { color } from "../../shared/utils/styles";

export const DoorsContainer = styled.div`
  max-width: 1600px;
  margin: auto;
  padding: 1rem 4rem 3rem;
  display: flex;

  @media only screen and (max-width: 1200px) {
    padding: 1rem 1rem 3rem;
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const DoorsBackground = styled.div`
  position: relative;
  width: 70%;
  transform: translateX(-30%);

  opacity: 0;
  animation: doors-in 0.7s 1s ease forwards;
  @keyframes doors-in {
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    margin-bottom: -0.8rem;
  }
  @media only screen and (max-width: 1200px) {
    width: 65%;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const Door = styled.div`
  position: absolute;
  bottom: 15.8%;
  right: 49%;
  width: 17%;
  height: 67%;
`;

export const DoorDescription = styled.div`
  position: absolute;
  bottom: 52%;
  transform: translateY(50%);
  left: 2%;
  width: 28%;
  text-align: center;
  border-radius: 1rem;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${color.secondary};
  div:first-child {
    color: ${color.primaryDark};
  }
  div:nth-child(2) {
    font-weight: 600;
  }
  div:nth-child(3) {
    font-size: 1.6rem;
  }
  div:nth-child(4) {
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    @media only screen and (max-width: 600px) {
      font-size: 1.5rem;
      width: 120%;
      transform: translateX(-1rem);
    }
  }
`;
