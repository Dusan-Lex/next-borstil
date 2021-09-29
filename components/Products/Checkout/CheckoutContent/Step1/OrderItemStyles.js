import styled from "styled-components";
import { color, mixin } from "../../../../../shared/utils/styles";
import QuantityButton from "../../../../../shared/components/Buttons/QuantityButton/QuantityButton";

export const StyledOrderItem = styled.div`
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
    span {
      width: 8rem;
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
    &:hover {
      stroke: ${color.secondary};
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 400px) {
    align-items: center;
    width: 100%;
  }
`;

export const OrderRemoveBtn = styled.div`
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;

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
