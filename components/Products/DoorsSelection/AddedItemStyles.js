import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const StyledAddedItem = styled.div`
  height: 100%;
  min-height: 42rem;
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
  width: 50%;
  ${mixin.center};
  img {
    padding: 0.5rem;
    border: 0.3rem solid ${color.primaryDark};
    height: 80%;
  }
`;
export const ItemDiv = styled.div`
  height: 80%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ItemDesc = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    span {
      color: ${color.primaryDark};
    }
  }
`;
export const ItemButtons = styled.div`
  display: flex;
  justify-content: space-between;
  /* transform: translatex(-3rem); */
  button {
    width: 45%;
    padding: 0 1rem;
    background-color: ${color.primary};
    cursor: pointer;
  }
`;
