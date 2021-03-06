import styled from "styled-components";
import { color, mixin } from "../../../../../shared/utils/styles";
import QuantityButton from "../../../../../shared/components/Buttons/QuantityButton/QuantityButton";

export const StyledOrderItem = styled.div`
  position: relative;
  display: flex;
  margin: 0.5rem;
  border-bottom: 0.1rem solid ${color.secondary};
  font-size: 1.7rem;
  font-weight: 500;
  padding: 0.5rem;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const OrderFirstBox = styled.div`
  width: 81%;
  display: flex;

  @media only screen and (max-width: 400px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const OrderDoor = styled.div`
  width: 16%;
  ${mixin.center}
  padding: 0.5rem 0;

  img {
    width: 50%;
    @media only screen and (max-width: 1200px) {
      width: 60%;
    }
    @media only screen and (max-width: 500px) {
      width: 70%;
    }
    @media only screen and (max-width: 400px) {
      width: 6rem;
    }
  }

  @media only screen and (max-width: 400px) {
    margin: auto;
  }
`;

export const OrderHandleLockBox = styled.div`
  width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 400px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const OrderPriceQuantityBox = styled.div`
  width: 41%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 400px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const OrderDiv = styled.div`
  text-align: center;

  span {
    background-color: ${color.secondaryLight};
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 2px;
    margin-left: 0.5rem;
    width: 10rem;
    display: inline-block;
  }

  &.price {
    text-align: right;
    span {
      width: 8rem;
    }
    @media only screen and (max-width: 400px) {
      text-align: center;
    }
  }
  @media only screen and (max-width: 400px) {
    padding: 1rem;
  }
`;

export const OrderRemoveTotalPriceBox = styled.div`
  width: 19%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  margin-right: 1rem;
  svg {
    stroke: red;
    @media only screen and (min-width: 401px) {
      &:hover {
        stroke: ${mixin.darken("red", 0.3)};
        cursor: pointer;
      }
    }

    @media only screen and (max-width: 400px) {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }

  @media only screen and (max-width: 400px) {
    align-items: center;
    width: 100%;
    margin-right: 0;
  }
`;

export const OrderRemoveBtn = styled.div``;

export const OrderQuantityButton = styled(QuantityButton)`
  button {
    width: 33%;
    max-width: 6rem;
    background-color: ${color.primaryDark};
    color: white;
  }
  input {
    font-weight: 500;
    width: 33%;
    max-width: 6rem;
  }
`;
