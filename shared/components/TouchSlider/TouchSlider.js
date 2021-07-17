import React, { useState, useEffect, useRef } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  TouchSliderContainer,
  TouchSlide,
  TouchSlideTitle,
  TouchSlideDescription,
  TouchSlideContent,
} from "./TouchSliderStyles";

const TouchSlider = ({ data }) => {
  const sliderRef = useRef();
  const windowSize = useWindowSize();
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationId = useRef(0);
  const currentIndex = useRef(0);
  const middleIndex = useRef(1);

  const numberOfSlides =
    windowSize.width > 1200 ? 3 : windowSize.width > 800 ? 2 : 1;

  const getPositionX = (event) => {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  };

  const animation = () => {
    console.log("animate");
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
    console.log(diff, middleIndex);

    if (
      diff < -100 &&
      middleIndex.current !== data.length - numberOfSlides + 1
    ) {
      currentTranslate.current =
        prevTranslate.current - window.innerWidth / numberOfSlides;
      prevTranslate.current = currentTranslate.current;
      middleIndex.current++;
    } else if (diff > 100 && middleIndex.current !== 1) {
      currentTranslate.current =
        prevTranslate.current + window.innerWidth / numberOfSlides;
      prevTranslate.current = currentTranslate.current;
      middleIndex.current--;
    } else {
      currentTranslate.current = prevTranslate.current;
    }
    console.log(middleIndex);
    sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;

    sliderRef.current.classList.remove("grabbing");
  };

  return (
    <TouchSliderContainer
      ref={sliderRef}
      onContextMenu={(e) => e.preventDefault()}
    >
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
          // onMouseLeave={touchEndHandler}
          onMouseMove={touchMoveHandler}
        >
          <TouchSlideContent>
            <TouchSlideTitle>{slide.title}</TouchSlideTitle>
            <TouchSlideDescription>{slide.description}</TouchSlideDescription>
          </TouchSlideContent>

          <img
            onDragStart={(e) => {
              e.preventDefault();
            }}
            src={slide.srcImg}
          ></img>
        </TouchSlide>
      ))}
    </TouchSliderContainer>
  );
};

export default TouchSlider;
