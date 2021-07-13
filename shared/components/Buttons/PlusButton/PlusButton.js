import { Plus } from "./PlusButtonStyles";

const PlusButton = (props) => {
  return (
    <Plus
      onClick={props.onClick}
      className={props.className}
      active={props.active}
    >
      <div className="horizontal"></div>
      <div className="vertical"></div>
    </Plus>
  );
};

export default PlusButton;
