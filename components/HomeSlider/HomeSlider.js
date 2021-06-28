import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  StyledHomeSlider,
  Wrapper,
  Slide,
  Slider,
  SliderArrow,
} from "./HomeSliderStyles";
import useOffsetY from "../../shared/hooks/useOffsetY";

const HomeSlider = () => {
  const [slide, setSlide] = useState(0);
  const timeout = useRef(null);
  const offSetY = useOffsetY();
  const length = 3;
  console.log(slide);
  useEffect(() => {
    const next = () => {
      setSlide((slide) => (slide === length - 1 ? 0 : slide + 1));
    };
    timeout.current = setTimeout(next, 600000);
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
      <Image
        src={`/images/Slider-Image-1.jpg`}
        layout="fill"
        objectFit="cover"
        priority={true}
      />
      <Image
        src={`/images/Slider-Image-2.jpg`}
        layout="fill"
        objectFit="cover"
        priority={true}
      />
      <Image
        src={`/images/Slider-Image-3.jpg`}
        layout="fill"
        objectFit="cover"
        priority={true}
      />
      <Wrapper>
        {[0, 1, 2].map((slideEl, index) => {
          return (
            <Slide key={index}>
              {index === slide && (
                <Slider>
                  <Image
                    src={`/images/Slider-Image-${index + 1}.jpg`}
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                  />
                  <div className="section-slider__content">
                    <div style={{ overflow: "hidden" }}>
                      <h3>{slideEl.subtitle}</h3>
                    </div>
                    <h1>{slideEl.title}</h1>
                  </div>
                </Slider>
              )}
            </Slide>
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
