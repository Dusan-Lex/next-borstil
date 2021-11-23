import React, { useEffect, useState } from "react";
import SliderTouch from "../../../shared/components/TouchSlider/TouchSlider";
import { StyledHomeReference } from "./HomeReferenceStyles";
import { HomeTitle } from "../HomeGallery/HomeGalleryStyles";
import ArrowButton from "../../../shared/components/Buttons/ArrowButton/ArrowButton";
import useTranslation from "next-translate/useTranslation";

const HomeReference = (props) => {
  const { t } = useTranslation();
  console.log(props.data);
  return (
    <StyledHomeReference>
      <HomeTitle>{t(`home:reference.title`)}</HomeTitle>
      <SliderTouch data={props.data} />
      <ArrowButton path="/reference" dark className="home-arrow">
        {t(`home:reference.button`)}
      </ArrowButton>
    </StyledHomeReference>
  );
};

export default HomeReference;
