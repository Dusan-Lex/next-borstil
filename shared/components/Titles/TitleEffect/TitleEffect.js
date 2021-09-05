import { TEBox, TESpan } from "./TitleEffectStyles";

const TitleEffect = (props) => {
  return (
    <TEBox className={props.className}>
      {props.children.split("").map((item, index) => (
        <TESpan
          delay={props.startDelay + index * 0.05}
          key={index}
          className={props.effectClass}
          color1={props.color1}
          color2={props.color2}
          id={props.id}
        >
          {item}
        </TESpan>
      ))}
    </TEBox>
  );
};

export default TitleEffect;
