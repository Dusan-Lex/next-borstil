import React, { useEffect, useState } from "react";
import SliderTouch from "../../../shared/components/TouchSlider/TouchSlider";
import { StyledHomeReference } from "./HomeReferenceStyles";
import { HomeTitle } from "../HomeGallery/HomeGalleryStyles";
import ArrowButton from "../../../shared/components/Buttons/ArrowButton/ArrowButton";
import useTranslation from "next-translate/useTranslation";

const HomeReference = () => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/homereference", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <StyledHomeReference>
      <HomeTitle>{t(`home:reference.title`)}</HomeTitle>
      <SliderTouch data={data} />
      <ArrowButton path="/reference" dark className="home-reference-arrow">
        {t(`home:reference.button`)}
      </ArrowButton>
    </StyledHomeReference>
  );
};

export default HomeReference;
