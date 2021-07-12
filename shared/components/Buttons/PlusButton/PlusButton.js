import { Plus } from "./PlusButtonStyles";

const PlusButton = (props) => {
  return (
    <Plus onClick={props.onClick} className={props.className}>
      <span></span>
      <span></span>
    </Plus>
  );
};

export default PlusButton;
