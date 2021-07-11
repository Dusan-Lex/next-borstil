import { HomePhotos, StyledHomeGallery, HomeTitle } from "./HomeGaleryStyles";
import { homeGalleryData } from "../../Gallery/GalleryData";
import Photo from "../../../shared/components/Photo/Photo";
import ArrowButton from "../../../shared/components/Buttons/ArrowButton/ArrowButton";

const HomeGallery = () => {
  return (
    <StyledHomeGallery>
      <HomeTitle>Ovo su neki od naših radova</HomeTitle>
      <HomePhotos>
        {homeGalleryData.map((item, index) => {
          return <Photo key={index} item={item} loading="eager" />;
        })}
      </HomePhotos>
      <ArrowButton path="/gallery" dark className="home-gallery-arrow">
        Pogledaj galeriju
      </ArrowButton>
    </StyledHomeGallery>
  );
};

export default HomeGallery;
