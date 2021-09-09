import styled from "styled-components";
import { color, mixin } from "../../shared/utils/styles";
import TitleEffect from "../../shared/components/Titles/TitleEffect/TitleEffect";
import ShoppingCartButton from "./ShoppingCart/ShoppingCartButton";

export const DoorsSection = styled.div`
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
  margin: auto;
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

export const DoorsContainer = styled.div`
  max-width: 1600px;
  margin: auto;
  padding: 1rem 4rem 3rem;
  display: flex;

  @media only screen and (max-width: 1200px) {
    padding: 1rem 1rem 3rem;
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const DoorsBackground = styled.div`
  position: relative;
  width: 70%;
  transform: translateX(-30%);

  opacity: 0;
  animation: doors-in 0.7s 1s ease forwards;
  @keyframes doors-in {
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    margin-bottom: -0.8rem;
  }
  @media only screen and (max-width: 1200px) {
    width: 65%;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const Door = styled.div`
  position: absolute;
  bottom: 15.8%;
  right: 49%;
  width: 17%;
  height: 67%;
`;

export const DoorDescription = styled.div`
  position: absolute;
  bottom: 52%;
  transform: translateY(50%);
  left: 2%;
  width: 28%;
  text-align: center;
  border-radius: 1rem;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${color.secondary};
  div:first-child {
    color: ${color.primaryDark};
  }
  div:nth-child(2) {
    font-weight: 600;
  }
  div:nth-child(3) {
    font-size: 1.6rem;
  }
  div:nth-child(4) {
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    @media only screen and (max-width: 600px) {
      font-size: 1.5rem;
      width: 120%;
      transform: translateX(-1rem);
    }
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
