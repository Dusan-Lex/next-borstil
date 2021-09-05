import { useEffect, useState } from "react";
import { LEBox } from "./LettersEffectStyles";

const LettersEffect = (props) => {
  const [lettersClass, setLettersClass] = useState("hidden");
  useEffect(() => {
    const timer = setTimeout(() => {
      setLettersClass("");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  let letter;
  return (
    <LEBox className={props.className + " " + lettersClass}>
      {props.children.split("").map((item, index) => {
        const letterClass =
          index === 0 ? "" : letter === " " ? "spaced" : "ghost";
        letter = item;
        return item !== " " ? <li className={letterClass}>{item}</li> : null;
      })}
    </LEBox>
  );
};

export default LettersEffect;
