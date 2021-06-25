import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { StyledHomeSlider, Wrapper, Slide, Slider } from "./HomeSliderStyles";
import useOffsetY from "../../shared/hooks/useOffsetY";

const HomeSlider = () => {
  const [slide, setSlide] = useState(0);
  const timeout = useRef(null);
  const offSetY = useOffsetY();

  useEffect(() => {
    const next = () => {
      setSlide((slide) => (slide === length - 1 ? 0 : slide + 1));
    };
    timeout.current = setTimeout(next, 114000);
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
    <StyledHomeSlider>
      <Wrapper>
        {[0, 1, 2].map((slideEl, index) => {
          return (
            <Slide key={index}>
              {
                <Slide>
                  <Image
                    src={`/images/Slider-Image-${index + 1}.jpg`}
                    width={300}
                    height={200}
                  />
                  <div className="section-slider__content">
                    <div style={{ overflow: "hidden" }}>
                      <h3>{slideEl.subtitle}</h3>
                    </div>
                    <h1>{slideEl.title}</h1>
                    {/* <ButtonSlider/> */}
                  </div>
                </Slide>
              }
            </Slide>
          );
        })}
      </Wrapper>
      <div
        onClick={prevSlide}
        className="section-slider__arrow section-slider__arrow--1"
      >
        <span>&#10095;</span>
      </div>
      <div
        onClick={nextSlide}
        className="section-slider__arrow section-slider__arrow--2"
      >
        <span>&#10095;</span>
      </div>
    </StyledHomeSlider>
  );
};

export default HomeSlider;
