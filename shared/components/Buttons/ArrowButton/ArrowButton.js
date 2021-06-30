import Link from "next/link";
import { StyledAnchor } from "./ArrowButtonStyles";

const ArrowButton = (props) => {
  return (
    <Link href={props.path}>
      <StyledAnchor dark={props.dark}>
        {props.children}
        <span className="first">&#9866;</span>
        <span className="second">&#10095;</span>
      </StyledAnchor>
    </Link>
  );
};

export default ArrowButton;
