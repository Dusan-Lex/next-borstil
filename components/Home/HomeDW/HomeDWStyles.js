import styled from "styled-components";
import { color } from "../../../shared/utils/styles";

export const StyledHomeDW = styled.section`
  max-width: 1200px;
  /* height: auto; */
  height: 60rem;
  background-color: ${(props) => props.theme.backgroundRev};
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem 4rem;
  position: relative;
  margin-top: -6.1rem;

  @media only screen and (max-width: 1200px) {
    background-color: white;
  }
`;
