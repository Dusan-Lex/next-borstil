import styled from "styled-components";
import { color, mixin } from "../../shared/utils/styles";

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${color.secondaryDark};
`;

export const FooterWrapper = styled.div`
  height: 100%;
  max-width: 1800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
`;

export const FooterNav = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  ul {
    color: ${color.primaryLightest};
    display: flex;
    justify-content: center;
    max-width: 800px;
    margin: auto;
    @media only screen and (max-width: 300px) {
      flex-direction: column;
    }

    li {
      flex: 1;
      font-size: 2rem;

      a {
        color: ${color.primaryLight};
        position: relative;

        span {
          color: ${color.primary};
          margin-left: 1rem;
        }
        &:hover {
          &::after {
            transform: scaleX(0.77);
          }
        }
        &::after {
          content: "";
          ${mixin.coverParent}
          border-bottom: 2px solid ${color.primary};
          transform: scaleX(0);
          transform-origin: left;
          transition: all 0.4s ease;
        }
      }
    }
  }
`;

export const FooterContact = styled.div`
  text-align: center;

  h3 {
    font-size: 3.4rem;
    text-transform: uppercase;
    color: ${color.primary};
    margin-bottom: 1.5rem;
  }
  ul {
    color: ${color.primaryLightest};
    display: flex;
    justify-content: center;
    max-width: 1400px;
    margin: auto;
    @media only screen and (min-width: 1800px) {
      max-width: 1800px;
    }
    @media only screen and (max-width: 1000px) {
      flex-direction: column;
    }

    li {
      flex: 1;
      font-size: 2rem;
      span {
        color: ${color.primaryLight};
      }
    }
  }
`;

export const FooterLogo = styled.div`
  ${mixin.center}
  flex-direction: column;
  margin: 5rem;

  h3 {
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.6;
    font-family: "Playfair Display", serif;
    letter-spacing: 0.7px;
    text-transform: uppercase;
    color: ${color.primary};
  }
  span {
    font-size: 2.2rem;
    text-transform: uppercase;
    color: ${color.primaryLightest};
    letter-spacing: 0.5px;
    border-bottom: 2px solid ${color.primary};
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  a:first-child {
    margin-right: 5rem;
  }
  svg {
    width: 4rem;
    fill: ${color.primary};
    &:hover {
      fill: ${color.primaryLight};
    }
  }
`;

export const FooterCopyright = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${color.primaryLight};
  .box {
    margin-bottom: 1rem;
  }
`;
