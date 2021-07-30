import { TEBox, TESpan } from "./TitleEffectStyles";

const TitleEffect = (props) => {
  return (
    <TEBox className={props.className}>
      {props.children.split("").map((item, index) => (
        <TESpan delay={props.startDelay + index * 0.05} key={index}>
          {item}
        </TESpan>
      ))}
    </TEBox>
  );
};

export default TitleEffect;
