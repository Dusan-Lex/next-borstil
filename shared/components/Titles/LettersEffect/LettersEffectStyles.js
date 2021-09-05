import styled from "styled-components";

export const LEBox = styled.ul`
  z-index: 1;
  list-style: none;
  border-bottom: 0;
  &.hidden {
    li.spaced {
      padding-left: 0;
    }
    li.ghost {
      opacity: 0;
      max-width: 0;
    }
  }

  li {
    display: inline-block;

    font-size: 2em;
    color: #fff;
    opacity: 1;
    transition: all 0.5s ease-in-out;
    max-width: 2em;
    &.spaced {
      padding-left: 0.5em;
    }
  }
`;
