import styled from "styled-components";
import { color, mixin } from "../../shared/utils/styles";

export const StyledReferenceSection = styled.section`
  background-color: ${mixin.lighten(color.secondary, 0.3)};
`;
export const ReferenceGrid = styled.div`
  display: grid;
  max-width: 1600px;
  padding: 3rem;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  row-gap: 6rem;
  column-gap: 4rem;

  @media only screen and (max-width: 1200px) {
    column-gap: 0;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const ReferenceGridItem = styled.div`
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  & > div {
    width: 50%;
    padding-left: 2rem;

    &.description {
      margin-left: 2rem;
      padding: 1rem;
      text-align: center;

      h4 {
        font-size: 1.8rem;
        color: ${color.primary};
        margin: 1rem 0 0.5rem;
        @media only screen and (max-width: 1200px) {
          font-size: 2.2rem;
        }
      }
      p {
        font-size: 1.7rem;
      }
    }

    @media only screen and (max-width: 1200px) {
      width: 70%;
    }

    @media only screen and (max-width: 900px) {
      width: 80%;
    }
    @media only screen and (max-width: 600px) {
      width: 70%;
    }
    @media only screen and (max-width: 400px) {
      width: 80%;
    }
  }
`;
