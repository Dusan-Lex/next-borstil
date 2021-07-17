import PhotoGallery from "../../components/Gallery/PhotoGallery";
import PhotoSearch from "../../components/Gallery/PhotoSearch";
import { galleryData } from "../../components/Gallery/GalleryData";
import { useState } from "react";

const Gallery = () => {
  const [photos, setPhotos] = useState(galleryData);

  const searchHandler = (inputString) => {
    const words = inputString.split(" ");

    const newPhotos = galleryData.filter((item) => {
      return item.tags.some(
        (tag) =>
          tag.indexOf(words[0].toLowerCase()) >= 0 ||
          words[0].toLowerCase().indexOf(tag) >= 0
      );
    });

    if (words.length > 1) {
      const newPhotos1 = newPhotos.filter((item) => {
        return item.tags.some(
          (tag) =>
            tag.indexOf(words[1].toLowerCase()) >= 0 ||
            words[1].toLowerCase().indexOf(tag) >= 0
        );
      });

      setPhotos(newPhotos1);
    } else {
      setPhotos(newPhotos);
    }
  };

  return (
    <main>
      <div style={{ height: "10vh", minHeight: "8.5rem" }}></div>
      <PhotoSearch onSearch={searchHandler} />
      <PhotoGallery photos={photos} />
    </main>
  );
};

export default Gallery;
