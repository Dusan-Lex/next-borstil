import styled from "styled-components";
import { color } from "../../shared/utils/styles";

export const StyledGallery = styled.div`
  padding: 1.5rem 10rem;
  max-width: 1600px;
  margin: auto;

  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;

  @media screen and (max-width: 1100px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
  @media screen and (max-width: 650px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    padding: 1.5rem 15rem;
  }

  @media screen and (max-width: 500px) {
    padding: 1.5rem 6rem;
  }
`;
