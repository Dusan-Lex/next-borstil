import styled from "styled-components";
import { color } from "../../../../../shared/utils/styles";

export const StyledPreview = styled.div`
  overflow: hidden;
  margin-bottom: 0.4rem;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  h3 {
    text-transform: uppercase;
    color: ${color.primaryDark};
  }
`;
