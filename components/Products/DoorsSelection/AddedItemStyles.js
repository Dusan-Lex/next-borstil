import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const StyledAddedItem = styled.div`
  height: 50rem;
  width: 100%;
  padding: 4rem 0;
  color: ${color.secondary};
  background-color: ${color.primaryLightest};
`;

export const ItemTitle = styled.h4`
  height: 15%;
  font-size: 1.9rem;
  font-weight: 600;
  padding: 1rem 0;
  ${mixin.center}
  span {
    width: 3rem;
    height: 3rem;
    ${mixin.center};
    background-color: ${color.primary};
    border-radius: 50%;
    margin-right: 1rem;
    svg {
      width: 2rem;
      stroke: ${color.primaryLightest};
    }
  }
`;

export const ItemInfo = styled.div`
  height: 85%;
  padding: 2rem;
  display: flex;
`;
export const ItemPhoto = styled.figure`
  height: 100%;
  width: 40%;
  ${mixin.center};
  img {
    padding: 0.5rem;
    border: 0.25rem solid ${color.primaryDark};
    height: 80%;
  }
`;
export const ItemDiv = styled.div`
  height: 80%;
  width: 60%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ItemDesc = styled.div`
  /* height: 60%; */
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    font-size: 2rem;
    font-weight: 500;
    span {
      color: ${color.primaryDark};
    }
  }
`;
export const ItemButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;

  button {
    width: 45%;
    padding: 1rem;
    background-color: ${color.primary};
    color: ${color.secondaryDark};
    border: 0.1rem solid ${color.secondaryDark};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
    &:hover {
      background-color: ${color.secondaryLight};
      color: ${color.primaryLightest};
    }
  }

  @media only screen and (max-width: 400px) {
    flex-direction: column;
    margin-right: 0;
    button {
      width: 100%;

      padding: 0.5rem;
      &:first-child {
        margin-bottom: 1.2rem;
      }
    }
  }
`;
