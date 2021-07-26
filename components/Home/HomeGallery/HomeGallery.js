import useTranslation from "next-translate/useTranslation";
import { homeGalleryData } from "../../Gallery/GalleryData";
import Photo from "../../../shared/components/Photo/Photo";
import ArrowButton from "../../../shared/components/Buttons/ArrowButton/ArrowButton";
import { HomePhotos, StyledHomeGallery, HomeTitle } from "./HomeGalleryStyles";

const HomeGallery = () => {
  const { t } = useTranslation();
  return (
    <StyledHomeGallery>
      <HomeTitle>{t(`home:gallery.title`)}</HomeTitle>
      <HomePhotos>
        {homeGalleryData.map((item, index) => {
          return <Photo key={index} item={item} loading="eager" />;
        })}
      </HomePhotos>
      <ArrowButton path="/gallery" dark className="home-gallery-arrow">
        {t(`home:gallery.button`)}
      </ArrowButton>
    </StyledHomeGallery>
  );
};

export default HomeGallery;
