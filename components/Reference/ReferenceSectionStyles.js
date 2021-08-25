import styled from "styled-components";
import { color, mixin } from "../../shared/utils/styles";

export const StyledReferenceSection = styled.section`
  background-color: ${mixin.lighten(color.secondary, 0.3)};
`;
export const ReferenceGrid = styled.div`
  display: grid;
  max-width: 1700px;
  padding: 3rem 4rem;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  row-gap: 6rem;
  column-gap: 4rem;

  @media only screen and (max-width: 1200px) {
    column-gap: 3rem;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const ReferenceGridItem = styled.div`
  background-color: ${mixin.lighten(color.secondary, 0.4)};
  color: white;
  padding: 2rem;
  ${mixin.center}
  border:1px solid  ${color.primaryDark};
  box-shadow: 0 0 1rem 2px ${color.primaryDark};

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  & > div {
    width: 50%;
    position: relative;

    &:first-child {
      background-color: ${mixin.rgba(color.primary, 0.8)};
      &::after {
        background: linear-gradient(
          45deg,
          ${mixin.rgba(color.primary, 0.9)} 0%,
          ${mixin.rgba(color.secondaryLight, 0.9)} 100%
        );
        content: "${(props) => props.index + 1}";
        font-size: 2rem;
        position: absolute;
        ${mixin.center}
        bottom: 0;
        right: 0;
        width: 7rem;
        height: 4rem;
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

export const ReferenceDescription = styled.div`
  margin-left: 2rem;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    color: ${mixin.lighten(color.primary, 0.15)};
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
  @media only screen and (max-width: 1200px) {
    margin-left: 0;
    padding-top: 1rem;
    width: 100%;
  }
`;

export const ReferenceCompleteDetails = styled.div`
  width: 100%;
  padding: 2rem 2rem 4rem;
  ${mixin.center}

  p {
    color: white;
    font-size: 2rem;
    text-align: center;
  }
  a {
    cursor: pointer;
    color: white;
    font-size: 0;
    svg {
      stroke: ${color.primaryLight};
      width: 6rem;
      margin-left: 1rem;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
