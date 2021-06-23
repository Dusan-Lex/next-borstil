import styled from "styled-components";

import { color } from "../../../../shared/utils/styles";

export const Item = styled.li`
  text-transform: uppercase;
  font-size: 3rem;
  ${(props) =>
    props.sidebar
      ? "transition: all 1s 0.7s ease-out;opacity:1"
      : "transition: all 1s ease-out;opacity:0"};

  /* opacity: ${(props) => (props.sidebar ? 1 : 0)}; */
  -webkit-tap-highlight-color: transparent;

  @media screen and (min-height: 900px) {
    font-size: 3.5rem;
  }
  @media screen and (max-height: 600px) {
    font-size: 2.5rem;
  }
  @media screen and (max-height: 500px) {
    font-size: 2rem;
  }

  a {
    color: ${color.primaryLightest};
    text-decoration: none;
    &:hover {
      color: ${color.primary};
    }
  }
`;
