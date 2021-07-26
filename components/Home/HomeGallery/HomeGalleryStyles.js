import styled from "styled-components";
import { color } from "../../../shared/utils/styles";

export const StyledHomeGallery = styled.section`
  text-align: center;
  .home-gallery-arrow {
    border: none;
    padding: 1rem 5rem;
    margin: 1rem 0 3rem;
  }
`;

export const HomeTitle = styled.h4`
  font-size: 4.5rem;
  font-weight: 600;
  letter-spacing: 0.3rem;
  text-align: center;
  padding: 0 1rem;
  text-transform: uppercase;
  background-image: linear-gradient(
    to left,
    ${color.primary},
    ${color.secondaryLight}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

  @media only screen and (max-width: 900px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 3.5rem;
    letter-spacing: 0.2rem;
  }
`;

export const HomePhotos = styled.div`
  padding: 2rem 10rem;
  max-width: 1800px;
  margin: auto;

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
