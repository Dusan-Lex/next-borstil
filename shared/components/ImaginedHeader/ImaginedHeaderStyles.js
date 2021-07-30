import styled from "styled-components";

export const StyledImaginedHeader = styled.div`
  background-color: ${(props) => props.bgColor};
  transform: scaleY(1.01);
  .up {
    height: 4vh;
    min-height: 3rem;
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }
  .down {
    height: 6vh;
    min-height: 5.5rem;
    @media only screen and (max-width: 600px) {
      height: 8.5vh;
    }
  }
`;
