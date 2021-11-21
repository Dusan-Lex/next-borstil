import styled from "styled-components";

export const Item = styled.li`
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  height: 100%;

  .visible {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 1.4rem 0rem;
    transition: all 0.65s;
    transition-property: transform, text-decoration, top;
    color: ${(props) => props.theme.text.regular};
  }

  .invisible {
    display: flex;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: -100%;
    padding: 1.4rem 0rem;
    transition: all 0.65s;
    transition-property: transform, text-decoration, top;
    color: ${(props) => props.theme.text.hover};
  }

  a:hover .visible {
    color: ${(props) => props.theme.text.hover};
  }

  a.active .visible {
    transform: translateY(100%);
    text-decoration: line-through;
  }
  a.active .invisible {
    top: 0;
  }
`;
