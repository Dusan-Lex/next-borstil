import styled from "styled-components";
import { color } from "../../shared/utils/styles";

export const BoxError = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    /* font-weight: 600; */
    font-size: 22rem;
    color: ${color.secondary};
    @media screen and (max-width: 600px) {
      font-size: 20rem;
    }
  }
  p {
    font-size: 3rem;
    font-weight: 500;
    color: ${color.primaryDark};
    margin-top: -3rem;
    margin-bottom: 4rem;
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    background-color: ${color.secondary};
    padding: 1rem 2rem;
    color: ${color.primary};
    border-radius: 3px;
  }
`;
