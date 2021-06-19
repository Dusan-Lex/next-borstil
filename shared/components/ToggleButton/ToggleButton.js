import {
  StyledToggleButton,
  Input,
  Label,
  RoundSlider,
  Wrapper,
} from "./ToggleButtonStyles";
const ToggleButton = (props) => {
  return (
    <StyledToggleButton className={props.className}>
      <Input
        type="checkbox"
        id={`checkbox-input-${props.id}`}
        onChange={props.onChangeInput}
      />
      <Label htmlFor={`checkbox-input-${props.id}`}>
        <Wrapper>{props.left}</Wrapper>
        <Wrapper>{props.right}</Wrapper>
        <RoundSlider />
      </Label>
    </StyledToggleButton>
  );
};

export default ToggleButton;
