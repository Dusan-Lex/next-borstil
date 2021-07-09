import styled from "styled-components";
import { mixin, color } from "../../shared/utils/styles";

export const StyledPhotoSearch = styled.div`
  height: 9vh;
  max-width: 1000px;
  margin: 11.5vh auto 0;
  background-color: ${(props) => props.theme.backgroundRev};
  ${mixin.center};

  @media only screen and (max-width: 1200px) {
    margin-top: 7vh;
    height: 7vh;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 8.5vh;
    height: 8.5vh;
  }
`;

export const PhotoSearchForm = styled.form`
  ${mixin.center}
  svg {
    margin-left: -4rem;
    stroke: ${color.secondary};
    opacity: 0.8;
  }
`;
export const PhotoSearchInput = styled.input`
  ${mixin.placeholderColor(color.secondaryLight)};
  color: ${color.secondary};
  width: 37rem;
  height: 4.5rem;
  line-height: 3.5rem;
  font-size: 1.8rem;
  padding: 0.25rem 1rem;
  border-radius: 4px;
  border: 0.1rem solid ${color.primaryLightest};
`;
