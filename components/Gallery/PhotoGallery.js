import { StyledGallery } from "./PhotoGalleryStyles";
import Photo from "../../shared/components/Photo/Photo";

const PhotoGallery = ({ photos }) => {
  return (
    <StyledGallery>
      {photos.map((item, index) => {
        return (
          <Photo
            key={index}
            width={item.width}
            height={item.height}
            imgSrc={item.imgSrc}
          />
        );
      })}
    </StyledGallery>
  );
};

export default PhotoGallery;
