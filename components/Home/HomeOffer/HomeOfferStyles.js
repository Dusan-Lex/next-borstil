import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const Offer = styled.section`
  background-color: ${(props) => props.theme.background};
  position: relative;
  padding-top: 4.5rem;
  padding-bottom: 6rem;
  animation: offerA1 1.5s ${(props) => `${props.time + 0.8}s`} forwards;
  opacity: 0.5;
  @keyframes offerA1 {
    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 1200px) {
    margin-top: -2px;
    padding-top: 0;
    background-color: ${color.secondary};
  }
`;

export const OfferContainer = styled.div`
  background-color: ${color.secondary};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const OfferList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 3rem;
  @media only screen and (max-width: 1200px) {
    padding: 3rem 0rem;
  }
`;

export const OfferListItem = styled.li`
  min-width: 270px;
  padding: 4rem 2rem;
  font-size: 15px;
  text-transform: uppercase;
  color: ${color.primaryLightest};
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 1200px) {
    padding: 2rem 2rem;
    font-size: 14px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

export const OfferText = styled.span`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.6s ease;
    border-bottom: 2px solid ${color.primary};
  }
`;

export const OfferSvgBox = styled.figure`
  ${mixin.center}
  position: relative;
  width: 70px;
  height: 70px;
  margin-right: 1.5rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &::after {
    content: "";
    ${mixin.coverParent}
    border: 2px solid ${color.primary};
    border-radius: 50%;
    transition: transform 0.2s cubic-bezier(0.32, 2.56, 0.64, 2.56);
  }

  svg {
    stroke: ${color.primaryLightest};
    width: 40px;
    height: 40px;
  }

  &:hover::after {
    transform: scale(1.08);
  }
  &:hover + span::after {
    transform: scale(1);
    border-bottom: 2px solid ${color.primary};
  }
`;
