import styled from "styled-components";
import { color, mixin } from "../../utils/styles";
export const StyledToggleButton = styled.div``;
export const Input = styled.input`
  display: none;
  &:checked + label div:last-child {
    transform: translateX(3.2rem);
  }
`;
export const Label = styled.label`
  position: relative;
  width: 6.2rem;
  height: 2.6rem;
  background: ${(props) => props.theme.background};
  border-radius: 5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 6.8rem;
    height: 3.2rem;
  }
`;

export const Wrapper = styled.div`
  ${mixin.center};
  color: ${(props) => props.theme.backgroundRev};
  @media screen and (max-width: 1200px) {
    font-size: 1.9rem;
    font-weight: 600;
  }
`;

export const RoundSlider = styled.div`
  position: absolute;
  width: 2.4rem;
  height: 2.2rem;
  background: ${color.primaryLightest};
  border-radius: 50%;
  top: 0.2rem;
  left: 0.2rem;
  transition: transform 0.2s linear;
  @media screen and (max-width: 1200px) {
    width: 3.1rem;
    height: 2.7rem;
  }
`;
