import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useTranslation from "next-translate/useTranslation";
import PlusButton from "../../../shared/components/Buttons/PlusButton/PlusButton";
import {
  StyledHomeAbout,
  ImagesWrapper,
  ImageBox,
  AboutImage,
  AboutContentBox,
  Features,
  FeaturesDetails,
} from "./HomeAboutStyles";

const HomeAbout = () => {
  const [play, setPlay] = useState("paused");
  const [activeSlide, setActiveSlide] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { t } = useTranslation();

  useEffect(() => {
    inView && setPlay("running");
  }, [inView]);

  return (
    <StyledHomeAbout ref={ref}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <ImagesWrapper>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <ImageBox key={index}>
                <AboutImage
                  src="/images/Home/Borstil-about.jpg"
                  item={item}
                  play={play}
                />
              </ImageBox>
            );
          })}
        </ImagesWrapper>
        <Features>
          <ul>
            {[1, 2, 3].map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActiveSlide((prevState) => {
                    if (prevState === item) {
                      return null;
                    } else {
                      return item;
                    }
                  });
                }}
              >
                <div>
                  {t(`home:about.features.${item - 1}.feature.0`)}
                  <span>{t(`home:about.features.${item - 1}.feature.1`)}</span>
                </div>
                <PlusButton active={item === activeSlide} />
              </li>
            ))}
          </ul>

          <FeaturesDetails active={activeSlide}>
            {activeSlide && (
              <p key={t(`home:about.features.${activeSlide - 1}.details`)}>
                {t(`home:about.features.${activeSlide - 1}.details`)}
              </p>
            )}
          </FeaturesDetails>
        </Features>
      </div>

      <AboutContentBox>
        <p>
          <span>{t(`home:about.content1.span`)}</span>
          {t(`home:about.content1.text`)}
        </p>
        <p>{t(`home:about.content2`)}</p>
      </AboutContentBox>
    </StyledHomeAbout>
  );
};

export default HomeAbout;
