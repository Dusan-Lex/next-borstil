import styled from "styled-components";
import { color } from "../../shared/utils/styles";

export const DoorsSection = styled.div`
  .products-title {
    margin-top: 3rem;
    text-transform: uppercase;
  }
`;

export const DoorsContainer = styled.div`
  max-width: 1600px;
  margin: auto;
  padding: 3rem 4rem;
  display: flex;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 1rem;
  }
`;
export const DoorsBackground = styled.picture`
  position: relative;
  width: 70%;
  /* border: 0.5rem solid ${(props) => props.theme.background}; */
  transform: translateX(-30%);
  opacity: 0;
  animation: doors-in 0.7s 0.1s ease forwards;
  @keyframes doors-in {
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;
export const Door = styled.div`
  position: absolute;
  bottom: 15.8%;
  right: 50%;
  width: 17%;
  height: 68%;
  @media only screen and (max-width: 1200px) {
    bottom: 17%;
  }
`;

export const DoorDescription = styled.div`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  left: 2%;
  width: 29%;
  text-align: center;
  padding: 0.5rem;
  border-radius: 1rem;
  font-size: 2rem;
  font-weight: 500;
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
    font-weight: 400;
  }
`;
