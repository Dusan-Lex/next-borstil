import styled from "styled-components";
import { color, mixin } from "../../utils/styles";

export const StyledPhoto = styled.div`
  transition: all 0.35s ease;
  cursor: pointer;
  margin-bottom: 1.5rem;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
`;

export const ImageWrapper = styled.div`
  visibility: ${(props) => (props.load ? "hidden" : "visible")};
  max-height: ${(props) => (props.load ? "0" : "100%")};
`;

export const LoadingDiv = styled.div`
  width: 100%;
  position: relative;
  padding-top: ${(props) => `${props.ratio}%`};
  background-color: ${color.primaryLightest};
  ${mixin.center}
`;
