import { XButton } from "./CloseButtonStyles";

const CloseButton = (props) => {
  return (
    <XButton onClick={props.onClose} className={props.className}>
      <span></span>
      <span></span>
    </XButton>
  );
};

export default CloseButton;
