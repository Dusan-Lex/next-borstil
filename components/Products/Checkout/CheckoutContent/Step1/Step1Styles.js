import styled from "styled-components";
import { color, mixin } from "../../../../../shared/utils/styles";

export const StyledStep1 = styled.div`
  height: 100%;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
`;
export const TotalAmount = styled.div`
  font-size: 1.9rem;
  font-weight: 500;
  color: ${color.secondary};
  text-align: right;
  margin-right: 2rem;
  margin-top: 1rem;
  span {
    background-color: green;
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 2px;
    margin-left: 0.5rem;
    display: inline-block;
    width: 8rem;
    margin-left: 1rem;
  }
`;
