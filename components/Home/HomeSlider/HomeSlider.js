import { useState, useEffect, useRef } from "react";

import useTranslation from "next-translate/useTranslation";
import useOffsetY from "../../../shared/hooks/useOffsetY";

import {
  StyledHomeSlider,
  Wrapper,
  Slide,
  Slider,
  SlideContent,
  SliderArrow,
} from "./HomeSliderStyles";

const HomeSlider = (props) => {
  const [slide, setSlide] = useState(0);
  const timeout = useRef(null);
  const [first, setFirst] = useState(true);
  const { t } = useTranslation();
  const offSetY = useOffsetY();
  const length = 3; // number of slides

  useEffect(() => {
    const next = () => {
      setSlide((slide) => (slide === length - 1 ? 0 : slide + 1));
    };
    timeout.current = setTimeout(next, 4600);
    if (first && props.loadingTime) {
      setTimeout(() => setFirst(false), 3600);
    }
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, [slide, props.loadingTime]);

  const nextSlide = () => {
    timeout.current && clearTimeout(timeout.current);
    setSlide((slide) => (slide === length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    timeout.current && clearTimeout(timeout.current);
    setSlide((slide) => (slide === 0 ? length - 1 : slide - 1));
  };

  return (
    <StyledHomeSlider time={props.loadingTime / 1000}>
      <img src={`/images/Slider-Image-1.webp`} style={{ display: "none" }} />
      <img src={`/images/Slider-Image-2.webp`} style={{ display: "none" }} />
      <img src={`/images/Slider-Image-3.webp`} style={{ display: "none" }} />
      <Wrapper>
        {[0, 1, 2].map((el) => {
          return (
            <Slider key={el}>
              {el === slide && (
                <Slide first={first} time={props.loadingTime / 1000}>
                  <img
                    src={`/images/Slider-Image-${el + 1}.webp`}
                    alt={t(`home:slider.${el}.alt`)}
                    style={{
                      transform: `translateY(${0.2222 * offSetY}px) scale(${
                        1 + 0.00012 * offSetY
                      })`,
                    }}
                  />
                  <SlideContent first={first} time={props.loadingTime / 1000}>
                    <div style={{ overflow: "hidden" }}>
                      <h3>{t(`home:slider.${el}.subtitle`)}</h3>
                    </div>
                    <h1>{t(`home:slider.${el}.title`)}</h1>
                  </SlideContent>
                </Slide>
              )}
            </Slider>
          );
        })}
      </Wrapper>
      <SliderArrow onClick={prevSlide} left>
        <span>&#10095;</span>
      </SliderArrow>
      <SliderArrow onClick={nextSlide}>
        <span>&#10095;</span>
      </SliderArrow>
    </StyledHomeSlider>
  );
};

export default HomeSlider;
