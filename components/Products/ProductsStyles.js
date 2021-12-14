import styled from "styled-components";
import TitleEffect from "../../shared/components/Titles/TitleEffect/TitleEffect";
import ShoppingCartButton from "./ShoppingCart/ShoppingCartButton";

export const DoorsSection = styled.div`
  position: relative;
  overflow: hidden;
  .products-title {
    margin-top: 3rem;
    text-transform: uppercase;
    @media only screen and (max-width: 900px) {
      margin-top: 1rem;
    }
  }
`;

export const DoorsHeader = styled.div`
  max-width: 1600px;
  margin: 1rem auto 0;
  display: flex;
  margin-top: 1rem;
  padding: 0 4rem;
  @media only screen and (max-width: 900px) {
    margin-top: 1rem;
  }
`;

export const DoorsTitle = styled(TitleEffect)`
  width: 70%;
  text-transform: uppercase;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const ShoppingCartBtnNotNav = styled(ShoppingCartButton)`
  margin: auto;
  animation: sh-in 0.7s 1s ease both;
  @keyframes sh-in {
    0% {
      transform: translateY(-5rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media only screen and (max-width: 600px) {
    display: none !important;
  }
`;
