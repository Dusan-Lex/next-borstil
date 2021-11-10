import { useState, useEffect, useRef } from "react";
import useOffsetY from "../../hooks/useOffsetY";

import { StyledSlider, Slide, SlideContent, SliderArrow } from "./SliderStyles";

const Slider = ({ sliderArr }) => {
  const [slide, setSlide] = useState(0);
  const timeout = useRef(null);
  const offSetY = useOffsetY();
  const length = sliderArr.length;

  useEffect(() => {
    const next = () => {
      setSlide((slide) => (slide === length - 1 ? 0 : slide + 1));
    };

    timeout.current = setTimeout(next, 4600);

    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, [slide]);

  const nextSlide = () => {
    timeout.current && clearTimeout(timeout.current);
    setSlide((slide) => (slide === length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    timeout.current && clearTimeout(timeout.current);
    setSlide((slide) => (slide === 0 ? length - 1 : slide - 1));
  };

  return (
    <StyledSlider>
      {sliderArr.map((item, index) => (
        <img src={item.imgSrc} key={index} style={{ display: "none" }} />
      ))}

      {sliderArr.map((el, index) => {
        return (
          index === slide && (
            <Slide key={index}>
              <img
                src={el.imgSrc}
                alt={el.alt}
                style={{
                  transform: `translateY(${0.2222 * offSetY}px) scale(${
                    1 + 0.00012 * offSetY
                  })`,
                }}
              />
              <SlideContent>
                <div style={{ overflow: "hidden" }}>
                  <h3>{el.subtitle}</h3>
                </div>
                <h1>{el.title}</h1>
              </SlideContent>
            </Slide>
          )
        );
      })}

      <SliderArrow onClick={prevSlide} left>
        <span>&#10095;</span>
      </SliderArrow>
      <SliderArrow onClick={nextSlide}>
        <span>&#10095;</span>
      </SliderArrow>
    </StyledSlider>
  );
};

export default Slider;
