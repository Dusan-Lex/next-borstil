import { useState, useRef, useEffect, Fragment } from "react";
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
  NextSlide,
} from "./AboutSectionStyles";
import { color, mixin } from "../../shared/utils/styles";
import ImaginedHeader from "../../shared/components/ImaginedHeader/ImaginedHeader";

const AboutSection = () => {
  const [index, setIndex] = useState(0);
  const firmRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      clickHandler(null);
    }, 20000);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      firmRef.current.classList.add("overlay-animation");
      firmRef.current.classList.add("start");
    }, 300);
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
    <Fragment>
      {/* <ImaginedHeader /> */}
      <AboutFirm>
        <Firm ref={firmRef}>
          <FirmDesc>
            <FirmDesc1 className="first-description">
              <h3>{t(`about:${index}.heading1`)}</h3>
              <h5>{t(`about:${index}.heading2`)}</h5>
              <p>{t(`about:${index}.paragraph1`)}</p>
              <p>{t(`about:${index}.paragraph2`)}</p>
            </FirmDesc1>
            <FirmDesc2 className="second-description">
              <p>{t(`about:${index}.paragraph3`)}</p>
              <NextSlide onClick={() => clickHandler(null)}>
                <ArrowRightRegular width="25" height="25" />
              </NextSlide>
            </FirmDesc2>
          </FirmDesc>
          <FirmImageBox className="about-img-box">
            <FirmImage
              src={`/images/about/Borstil-about-${index}.jpg`}
              bgPos={!index ? "right" : ""}
            />
          </FirmImageBox>
        </Firm>
        <FirmSideImages>
          {[0, 1, 2].map((item) => (
            <FirmSideImage
              key={item}
              className={index === item ? "select" : ""}
              src={`/images/about/Borstil-about-${item}.jpg`}
              bgPos="right"
              onClick={() => clickHandler(item)}
            ></FirmSideImage>
          ))}
        </FirmSideImages>
      </AboutFirm>
    </Fragment>
  );
};

export default AboutSection;
