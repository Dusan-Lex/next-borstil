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
    width: 34%;
    text-align: center;
    &.first {
      width: 46%;
    }
    &.last {
      width: 20%;
      font-size: 1.7rem;
      font-weight: 500;
    }
  }
`;
