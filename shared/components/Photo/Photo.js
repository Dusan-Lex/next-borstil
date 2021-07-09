import Image from "next/image";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
// import Spinner from "../Spinner/Spinner";
import {
  StyledPhoto,
  LoadingDiv,
  HoverDiv,
  ImageWrapper,
  TitleDiv,
} from "./PhotoStyles";

const Photo = ({ item, loading, quality }) => {
  const [load, setLoad] = useState(true);
  const { t } = useTranslation();
  return (
    <StyledPhoto>
      {load && (
        <LoadingDiv ratio={(item.height / item.width) * 100}>
          {/* <Spinner /> */}
        </LoadingDiv>
      )}
      <ImageWrapper load={load}>
        <Image
          src={item.imgSrc}
          width={item.width}
          height={item.height}
          layout="responsive"
          quality={quality}
          loading={loading}
          onLoad={(event) => {
            if (event.target.src.indexOf("data:image/gif;base64") < 0) {
              setLoad(false);
            }
          }}
          onClick={() => {
            console.log("click");
          }}
        />
        <HoverDiv className="hover-div" />
        <TitleDiv>
          <span>{t(`home:gallery.${item.title}`)}</span>
        </TitleDiv>
      </ImageWrapper>
    </StyledPhoto>
  );
};

export default Photo;
