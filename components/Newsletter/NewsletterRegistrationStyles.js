import styled from "styled-components";
import { color, mixin } from "../../shared/utils/styles";
export const Newsletter = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.background};
  width: 100%;
  text-align: center;
  padding: 4rem 2rem;
  z-index: 1;
  margin-bottom: ${(props) =>
    props.theme.background === "#563727" ? "4rem" : "0"};
  @media only screen and (max-width: 1200px) {
    margin-bottom: 0;
  }

  &::after {
    content: "";
    ${mixin.coverParent};
    max-width: 1200px;
    z-index: -1;
    transform: translate(calc((100vw - 1200px) / 2), 4rem);
    border-bottom: ${(props) =>
        props.theme.background === "#563727" ? "4rem" : "0"}
      solid ${(props) => props.theme.backgroundRev};
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }
`;
export const NewsletterTitle = styled.h4`
  font-size: 4rem;
  color: ${(props) => props.theme.backgroundRev};
`;
export const NewsletterSubtitle = styled.h5`
  font-size: 2.5rem;
  color: ${color.primaryLightest};
  font-weight: 400;
`;
export const NewsletterForm = styled.form`
  padding: 3rem 0;
  ${mixin.center}
`;
export const NewsletterInput = styled.input`
  ${mixin.placeholderColor(color.secondaryLight)};
  color: ${color.secondary};
  width: 37rem;
  height: 4.5rem;
  line-height: 3.5rem;
  font-size: 1.8rem;
  padding: 0.25rem 1rem;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 0.1rem solid ${color.primaryLightest};
`;
export const NewsletterButton = styled.button`
  height: 4.5rem;
  padding: 0.25rem 2rem;
  background-color: ${(props) => props.theme.backgroundRev};
  border-radius: 6px;
  color: ${color.primaryLightest};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-size: 1.8rem;
  cursor: pointer;
  transition: 0.1s ease-out;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => mixin.darken(props.theme.background, 0.4)};
    color: ${(props) => props.theme.text.hover};
  }

  &:disabled {
    background-color: ${(props) => mixin.darken(props.theme.background, 0.4)};
    cursor: not-allowed;
  }
`;

export const NewsletterNotification = styled.div`
  width: 60%;
  margin: auto;
  height: 8rem;
  background-color: ${mixin.darken(color.primary, 0.4)};
  border: 1px solid ${color.primaryLightest};
  ${mixin.center}
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    width: 93%;
  }

  h5 {
    color: ${color.secondaryDark};
    font-size: 1.8rem;
    animation: newsletterA1 0.3s ease;
  }
  @keyframes newsletterA1 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  p {
    color: ${color.primaryLightest};
    font-size: 1.7rem;
    animation: newsletterA1 0.3s ease both;
  }
  @media only screen and (min-width: 1201px) {
    display: none;
  }
`;
