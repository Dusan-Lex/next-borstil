import { StyledHomeGallery } from "./HomeGaleryStyles";
import { homeGalleryData } from "../../Gallery/GalleryData";
import Photo from "../../../shared/components/Photo/Photo";

const HomeGallery = () => {
  return (
    <StyledHomeGallery>
      {homeGalleryData.map((item, index) => {
        return <Photo key={index} item={item} priority={true} />;
      })}
    </StyledHomeGallery>
  );
};

export default HomeGallery;
