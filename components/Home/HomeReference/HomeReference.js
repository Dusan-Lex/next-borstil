import React from "react";
import SliderTouch from "../../../shared/components/TouchSlider/TouchSlider";
import { StyledHomeReference } from "./HomeReferenceStyles";
import { HomeTitle } from "../HomeGallery/HomeGalleryStyles";
import ArrowButton from "../../../shared/components/Buttons/ArrowButton/ArrowButton";
import useTranslation from "next-translate/useTranslation";

const data = [
  {
    title: "Gimnazija 'Stevan Sremac'",
    investor: "Investitor: Gramont",
    subject: "Predmet: Fasadna stolarija",
    date: "Jun 2010",
    srcImg: "/images/Home/Swiper-image-8.jpg",
  },
  {
    title: "OŠ 'Sveti Sava' u Pirotu",
    investor: "Investitor: Expertuniversal",
    subject: "Predmet: Unutrašnja vrata",
    srcImg: "/images/Home/Swiper-image-9.jpg",
  },
  {
    title: "Banovina u Nišu",
    investor: "Investitor: Gramont ",
    subject: "Predmet: Fasadna stolarija",
    date: "Septembar 2010",
    srcImg: "/images/Home/Swiper-image-2.jpg",
  },

  {
    title: "Porodična kuća",
    subject: "Predmet: Fasadna stolarija",
    srcImg: "/images/Home/Swiper-image-1.jpg",
  },

  {
    title: "Dom JNA u Vranju",
    investor: "Investitor: Tončev gradnja",
    subject: "Predmet: Fasadna stolarija",
    srcImg: "/images/Home/Swiper-image-6.jpg",
  },
  {
    title: "OŠ 'Ivan Goran Kovačić' u Beogradu",
    investor: "Investitor: Zlatibor-gradnja",
    subject: "Predmet: Unutrašnja vrata",
    date: "April 2015",
    srcImg: "/images/Home/Swiper-image-7.jpg",
  },

  {
    title: "Stambena zgrada",
    investor: "Investitor: Gramont ",
    subject: "Predmet: Fasadna stolarija",
    srcImg: "/images/Home/Swiper-image-4.jpg",
  },
  {
    title: "Stambena zgrada",
    investor: "Investitor: Gramont",
    subject: "Predmet: Fasadna stolarija",
    srcImg: "/images/Home/Swiper-image-3.jpg",
  },
];
const HomeReference = () => {
  const { t } = useTranslation();
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
