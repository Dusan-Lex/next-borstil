import { useState, useRef, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import ArrowRightRegular from "../../shared/components/svgs/ArrowRightRegular";
import {
  AboutFirm,
  Firm,
  FirmDesc,
  FirmDesc1,
  FirmDesc2,
  FirmImageBox,
  FirmImage,
  FirmSideImages,
  FirmSideImage,
} from "./FirmSectionStyles";

const FirmSection = () => {
  const [index, setIndex] = useState(0);
  const firmRef = useRef();
  const { t } = useTranslation();
  useEffect(() => {}, [index]);
  useEffect(() => {
    firmRef.current.classList.add("start");
    const timerId = setTimeout(() => {
      firmRef.current.classList.add("overlay-animation");
      console.log("running");
      firmRef.current.classList.remove("start");
    }, 350);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const clickHandler = (i) => {
    if (i !== index) {
      firmRef.current.classList.remove("overlay-animation");
      firmRef.current.classList.add("opacity-animation");
    }

    setTimeout(() => {
      firmRef.current.classList.remove("opacity-animation");
      firmRef.current.classList.add("overlay-animation");
      if (i === null) {
        setIndex((prevIndex) => (prevIndex + 1) % 3);
      } else if (index !== i) {
        setIndex(i);
      }
    }, 500);
  };

  return (
    <AboutFirm>
      <Firm ref={firmRef}>
        <FirmDesc>
          <FirmDesc1 className="first-description">
            <h3>{t(`about:${index}.header1`)}</h3>
            <h5>{t(`about:${index}.header2`)}</h5>
            <p>{t(`about:${index}.paragraph1`)}</p>
            <p>{t(`about:${index}.paragraph2`)}</p>
          </FirmDesc1>
          <FirmDesc2 className="second-description">
            <p>{t(`about:${index}.paragraph3`)}</p>
            <div onClick={() => clickHandler(null)}>
              <ArrowRightRegular width="25" height="25" />
            </div>
          </FirmDesc2>
        </FirmDesc>
        <FirmImageBox className="about-img-box">
          <FirmImage
            src={`/images/About/Borstil-about-${index}.jpg`}
            bgPos={!index ? "right" : ""}
          />
        </FirmImageBox>
      </Firm>
      <FirmSideImages>
        {[0, 1, 2].map((item) => (
          <FirmSideImage
            key={item}
            className={index === item ? "select" : ""}
            src={`/images/About/Borstil-about-${item}.jpg`}
            bgPos="right"
            onClick={() => clickHandler(item)}
          ></FirmSideImage>
        ))}
      </FirmSideImages>
    </AboutFirm>
  );
};

export default FirmSection;
