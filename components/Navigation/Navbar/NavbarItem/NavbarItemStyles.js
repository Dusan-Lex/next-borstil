import styled from "styled-components";
import { color } from "../../../../shared/utils/styles";

export const Item = styled.li`
  text-transform: uppercase;
  position: relative;
  overflow: hidden;

  .visible {
    display: inline-block;
    padding: 1.4rem 0rem;
    transition: all 0.65s;
    transition-property: transform, text-decoration, top;
    color: ${(props) => props.theme.text.regular};

    /* @media screen and (min-width: 1200px) {
      &.opposite {
        color: var(--color-primary-dark-2);
        font-size: 1.65rem;
      }
    } */
  }

  .invisible {
    display: inline-block;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: -100%;
    padding: 1.4rem 0rem;
    transition: all 0.65s;
    transition-property: transform, text-decoration, top;
    color: ${(props) => props.theme.text.hover};

    /* @media screen and (min-width: 1200px) {
      &.opposite {
        color: var(--color-primary-light-2);
        font-size: 1.65rem;
      }
    } */
  }

  a:hover .visible {
    color: ${(props) => props.theme.text.hover};
    /* @media screen and (min-width: 1200px) {
      &.opposite {
        color: var(--color-primary-light-2);
        font-size: 1.65rem;
      }
    } */
  }

  a.active .visible {
    transform: translateY(100%);
    text-decoration: line-through;
  }
  a.active .invisible {
    top: 0;
  }
`;
