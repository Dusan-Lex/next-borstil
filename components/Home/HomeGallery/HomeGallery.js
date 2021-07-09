import { StyledHomeGallery } from "./HomeGaleryStyles";
import { homeGalleryData } from "../../Gallery/GalleryData";
import Photo from "../../../shared/components/Photo/Photo";

const HomeGallery = () => {
  return (
    <StyledHomeGallery>
      {homeGalleryData.map((item, index) => {
        return (
          <Photo
            key={index}
            width={item.width}
            height={item.height}
            imgSrc={item.imgSrc}
          />
        );
      })}
    </StyledHomeGallery>
  );
};

export default HomeGallery;
