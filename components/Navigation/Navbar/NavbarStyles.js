import styled from "styled-components";

export const StyledNavbar = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
