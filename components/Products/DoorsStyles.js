import styled from "styled-components";
import { color, mixin } from "../../shared/utils/styles";

export const DoorsContainer = styled.div`
  max-width: 1600px;
  margin: auto;
  padding: 4rem;
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
  img {
    width: 100%;
  }
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;
export const Door = styled.div`
  position: absolute;
  bottom: 17.2%;
  right: 50%;
  width: 17%;
  height: 68%;
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

export const DoorSelection = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${color.primaryLightest};
  display: flex;
  @media only screen and (max-width: 1200px) {
    height: 40rem;
    width: 100%;
  }
`;
export const DoorSelectionItem = styled.div`
  width: 5rem;
  height: 8rem;

  margin: 0.5rem;
  cursor: pointer;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;
