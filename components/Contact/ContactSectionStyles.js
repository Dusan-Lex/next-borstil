import styled from "styled-components";
import { mixin, color } from "../../shared/utils/styles";

export const StyledContactSection = styled.section`
  opacity: 0;
  animation: fadeInOpacity 1s forwards;
  text-align: center;
  @keyframes fadeInOpacity {
    100% {
      opacity: 1;
    }
  }
`;
export const ContactTitle = styled.h4`
  display: inline-block;
  font-size: 4rem;

  margin: 2rem 0;
  background-image: linear-gradient(
    to right,
    ${color.secondary},
    ${color.primaryDark}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transform: scale(0);
  animation: scaleTitle 0.9s 0.8s both;
  border-bottom: 0.18rem solid ${color.secondaryLight};
  border-top: 0.18rem solid ${color.secondaryLight};
  @keyframes scaleTitle {
    100% {
      transform: scale(1);
    }
  }
`;
