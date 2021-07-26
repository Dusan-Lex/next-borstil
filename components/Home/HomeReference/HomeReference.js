import React from "react";
import SliderTouch from "../../../shared/components/TouchSlider/TouchSlider";
import { StyledHomeReference } from "./HomeReferenceStyles";
import { HomeTitle } from "../HomeGallery/HomeGalleryStyles";
const data = [
  {
    title: "Porodična kuća",
    description: "sdfsdf cxvxcv 1",
    srcImg: "/images/Home/Swiper-image-1.jpg",
  },
  {
    title: "Niški Univerzitet",
    description: "dfh fgsd gfdfg 2",
    srcImg: "/images/Home/Swiper-image-2.jpg",
  },
  {
    title: "Škola",
    description: "fsdf sdfsdf sdf 3",
    srcImg: "/images/Home/Swiper-image-3.jpg",
  },
  {
    title: "Stambena zgrada",
    description: "fsdf sdfsdf sdf 3",
    srcImg: "/images/Home/Swiper-image-4.jpg",
  },
  {
    title: "Stambena zgrada",
    description: "fsdf sdfsdf sdf 3",
    srcImg: "/images/Home/Swiper-image-6.jpg",
  },
  {
    title: "Stambena zgrada",
    description: "fsdf sdfsdf sdf 3",
    srcImg: "/images/Home/Swiper-image-5.jpg",
  },
];
const HomeReference = () => {
  return (
    <StyledHomeReference>
      <HomeTitle>Izdvojeni projekti</HomeTitle>
      <SliderTouch data={data} />
    </StyledHomeReference>
  );
};

export default HomeReference;
