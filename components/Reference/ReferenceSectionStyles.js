import styled from "styled-components";
import { color, mixin } from "../../shared/utils/styles";

export const StyledReferenceSection = styled.section`
  background-color: ${mixin.lighten(color.secondary, 0.3)};
`;
export const ReferenceGrid = styled.div`
  display: grid;
  max-width: 1700px;
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
  ${mixin.center}
  overflow: hidden;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  & > div {
    width: 50%;

    animation: referenceA 0.8s ${(props) => 1 + props.index * 0.08}s ease-in-out
      backwards;

    @keyframes referenceA {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    &.description {
      margin-left: 2rem;
      text-align: center;
      animation: referenceA2 0.8s ${(props) => 0.5 + props.index * 0.13}s
        ease-out backwards;

      @keyframes referenceA2 {
        0% {
          transform: translateY(100%);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @media only screen and (max-width: 1200px) {
        margin-left: 0;
        padding-top: 1rem;
        width: 100%;
      }

      h4 {
        font-size: 1.8rem;
        color: ${color.primary};
        margin: 1rem 0 0.5rem;
        line-height: 1.6;
        text-decoration: underline;
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
      width: 92%;
    }
  }
`;
