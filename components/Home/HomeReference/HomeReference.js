import React from "react";
import TouchSlider from "../../../shared/components/TouchSlider/TouchSlider";
import { StyledHomeReference } from "./HomeReferenceStyles";
import { HomeTitle } from "../HomeGallery/HomeGaleryStyles";
const data = [
  {
    title: "kjkj1",
    description: "sdfsdf cxvxcv 1",
    srcImg: "/images/Home/Swiper-image-1.jpg",
  },
  {
    title: "kjkj2",
    description: "dfh fgsd gfdfg 2",
    srcImg: "/images/Home/Swiper-image-2.jpg",
  },
  {
    title: "kjkj3",
    description: "fsdf sdfsdf sdf 3",
    srcImg: "/images/Home/Swiper-image-3.jpg",
  },
  {
    title: "kjkj3",
    description: "fsdf sdfsdf sdf 3",
    srcImg: "/images/Home/Swiper-image-4.jpg",
  },
  {
    title: "kjkj3",
    description: "fsdf sdfsdf sdf 3",
    srcImg: "/images/Home/Swiper-image-5.jpg",
  },
  {
    title: "kjkj3",
    description: "fsdf sdfsdf sdf 3",
    srcImg: "/images/Home/Swiper-image-6.jpg",
  },
];
const HomeReference = () => {
  return (
    <StyledHomeReference>
      <HomeTitle>Izdvojeni projekti</HomeTitle>
      <TouchSlider data={data} />
    </StyledHomeReference>
  );
};

export default HomeReference;
