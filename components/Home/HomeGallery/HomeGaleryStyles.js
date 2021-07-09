import styled from "styled-components";
import { color } from "../../../shared/utils/styles";

export const StyledHomeGallery = styled.div`
  padding: 5rem 10rem;
  /* max-width: 1800px; */
  margin: auto;
  background-color: ${color.primaryLightest};

  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
  @media screen and (max-width: 1200px) {
    padding: 1.5rem;
  }
  @media screen and (max-width: 650px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
`;
