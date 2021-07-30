import { StyledImaginedHeader } from "./ImaginedHeaderStyles";
const ImaginedHeader = (props) => {
  return (
    <StyledImaginedHeader bgColor={props.bgColor}>
      <div className="up"></div>
      <div className="down"></div>
    </StyledImaginedHeader>
  );
};
export default ImaginedHeader;
