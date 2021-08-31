import { StyledGallery } from "./PhotoGalleryStyles";
import Photo from "../../shared/components/Photo/Photo";

const PhotoGallery = ({ photos }) => {
  return (
    <StyledGallery>
      {photos.map((item, index) => {
        return <Photo key={index} item={item} quality={60} />;
      })}
    </StyledGallery>
  );
};

export default PhotoGallery;
