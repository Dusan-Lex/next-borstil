import styled from "styled-components";

export const StyledIndividualForm = styled.form`
  padding: 2rem 0;
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  @media only screen and (max-width: 500px) {
    display: block;
  }
`;

export const PostalcodeCityBox = styled.div`
  grid-column: 1/-1;
`;
