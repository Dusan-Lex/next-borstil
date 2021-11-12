import styled from "styled-components";
import { color } from "../../../../../shared/utils/styles";

export const StyledDoorItems = styled.div`
  img {
    width: 3rem;
    margin-right: 1rem;
  }
`;

export const DoorItem = styled.div`
  background-color: ${color.primaryLightest};
  color: ${color.secondaryDark};
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > div {
    width: 40%;
    text-align: center;
    &.first {
      width: 40%;
    }
    &.last {
      width: 20%;
      font-size: 1.7rem;
      font-weight: 500;
      text-align: right;
      padding-right: 2rem;
    }
  }
`;

export const Total = styled.div`
  width: 50%;
  margin-left: auto;
  text-align: right;
  font-size: 1.8rem;
  padding: 1rem 3rem 1rem 0;
  background-color: ${color.primaryLightest};
  span {
    margin-left: 1rem;
    font-weight: 500;
    /* padding: 0.4rem;
    background-color: ${color.secondary};
    color: ${color.primary}; */
  }
`;
