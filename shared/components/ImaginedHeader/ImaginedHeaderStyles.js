import styled from "styled-components";

export const StyledImaginedHeader = styled.div`
  background-color: ${(props) => props.bgColor};
  transform: scaleY(1.01);
  .up {
    height: 3.5rem;
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }
  .down {
    height: 5rem;
    @media only screen and (max-width: 1200px) {
      height: 7.5rem;
    }
  }
`;
