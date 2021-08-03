import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import {
  TouchSliderContainer,
  TouchSlider,
  TouchSlide,
  TouchSlideTitle,
  TouchSlideDescription,
  TouchSlideContent,
  TouchImageWrapper,
  TouchSliderArrow,
} from "./TouchSliderStyles";
import ArrowLeft from "../svgs/ArrowLeft";
import ArrowRight from "../svgs/ArrowRight";

const SliderTouch = ({ data }) => {
  const sliderRef = useRef();
  const windowSize = useWindowSize();
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationId = useRef(0);
  const currentIndex = useRef(0);
  const middleIndex = useRef(1);
  const firstClientX = useRef(0);
  const rightArrowRef = useRef();
  const leftArrowRef = useRef();

  const numberOfSlides =
    windowSize.width > 1200 ? 3 : windowSize.width > 700 ? 2 : 1;

  leftArrowRef.current?.classList.add("not-allowed");

  useEffect(() => {
    const currentSliderRef = sliderRef.current;

    const saveCursorPositionWhenTouchBegins = (e) => {
      firstClientX.current = e.touches[0].clientX;
    };

    const preventVerticalSliding = (e) => {
      const threshold = 15;
      const clientX = e.touches[0].clientX - firstClientX.current;

      if (Math.abs(clientX) > threshold) {
        e.preventDefault();
        return false;
      }

      return true;
    };

    if (currentSliderRef) {
      currentSliderRef.addEventListener(
        "touchstart",
        saveCursorPositionWhenTouchBegins
      );
      currentSliderRef.addEventListener("touchmove", preventVerticalSliding, {
        passive: false,
      });
    }

    return () => {
      if (currentSliderRef) {
        currentSliderRef.removeEventListener(
          "touchstart",
          saveCursorPositionWhenTouchBegins
        );

        currentSliderRef.removeEventListener(
          "touchmove",
          preventVerticalSliding
        );
      }
    };
  }, []);

  const translateSlider = (type) => {
    if (type === "plus") {
      currentTranslate.current =
        prevTranslate.current - window.innerWidth / numberOfSlides;
      prevTranslate.current = currentTranslate.current;
      middleIndex.current++;
      if (middleIndex.current === data.length - numberOfSlides + 1) {
        rightArrowRef.current.classList.add("not-allowed");
      } else {
        leftArrowRef.current.classList.remove("not-allowed");
        rightArrowRef.current.classList.remove("not-allowed");
      }
    } else {
      currentTranslate.current =
        prevTranslate.current + window.innerWidth / numberOfSlides;
      prevTranslate.current = currentTranslate.current;
      middleIndex.current--;
      if (middleIndex.current === 1) {
        leftArrowRef.current.classList.add("not-allowed");
      } else {
        rightArrowRef.current.classList.remove("not-allowed");
        leftArrowRef.current.classList.remove("not-allowed");
      }
    }
  };

  const getPositionX = (event) => {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  };

  const animation = () => {
    sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    if (isDragging.current) {
      requestAnimationFrame(animation);
    }
  };

  const touchStartHandler = (event, index) => {
    currentIndex.current = index;
    startPos.current = getPositionX(event);
    isDragging.current = true;
    animationId.current = requestAnimationFrame(animation);
    sliderRef.current.classList.add("grabbing");
  };

  const touchMoveHandler = (event) => {
    if (isDragging.current) {
      const currentPos = getPositionX(event);

      currentTranslate.current =
        prevTranslate.current + currentPos - startPos.current;
    }
  };

  const touchEndHandler = () => {
    isDragging.current = false;
    cancelAnimationFrame(animationId.current);

    const diff = currentTranslate.current - prevTranslate.current;

    if (
      diff < -100 &&
      middleIndex.current !== data.length - numberOfSlides + 1
    ) {
      translateSlider("plus");
    } else if (diff > 100 && middleIndex.current !== 1) {
      translateSlider("minus");
    } else {
      currentTranslate.current = prevTranslate.current;
    }

    sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;

    sliderRef.current.classList.remove("grabbing");
  };

  const rightClickHandler = () => {
    if (middleIndex.current !== data.length - numberOfSlides + 1) {
      translateSlider("plus");
      sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  const leftClickHandler = () => {
    if (middleIndex.current !== 1) {
      translateSlider("minus");
      sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  return (
    <TouchSliderContainer>
      <TouchSlider ref={sliderRef} onContextMenu={(e) => e.preventDefault()}>
        {data.map((slide, index) => (
          <TouchSlide
            key={index}
            dragging={isDragging.current}
            onTouchStart={(event) => {
              touchStartHandler(event, index);
            }}
            onTouchMove={touchMoveHandler}
            onTouchEnd={touchEndHandler}
            onMouseDown={(event) => {
              touchStartHandler(event, index);
            }}
            onMouseUp={touchEndHandler}
            onMouseLeave={touchEndHandler}
            onMouseMove={touchMoveHandler}
          >
            <TouchSlideContent>
              <TouchSlideTitle>{slide.title}</TouchSlideTitle>
              <TouchSlideDescription>
                <p>{slide.investor}</p>
                <p>{slide.subject}</p>
              </TouchSlideDescription>
            </TouchSlideContent>
            <TouchImageWrapper>
              <Image
                width="800"
                height="600"
                loading="eager"
                onDragStart={(e) => {
                  e.preventDefault();
                }}
                src={slide.srcImg}
              ></Image>
            </TouchImageWrapper>
          </TouchSlide>
        ))}
      </TouchSlider>
      <TouchSliderArrow
        ref={leftArrowRef}
        onClick={leftClickHandler}
        left
        allowed={middleIndex.current !== data.length - numberOfSlides + 1}
      >
        <ArrowLeft
          width={`${windowSize.width < 500 ? "65" : "75"}`}
          height={`${windowSize.width < 500 ? "65" : "75"}`}
        />
      </TouchSliderArrow>
      <TouchSliderArrow
        ref={rightArrowRef}
        onClick={rightClickHandler}
        allowed={middleIndex.current !== data.length - numberOfSlides + 1}
      >
        <ArrowRight
          width={`${windowSize.width < 500 ? "65" : "75"}`}
          height={`${windowSize.width < 500 ? "65" : "75"}`}
        />
      </TouchSliderArrow>
    </TouchSliderContainer>
  );
};

export default SliderTouch;
