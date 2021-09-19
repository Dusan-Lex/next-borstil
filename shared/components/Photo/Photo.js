import Image from "next/image";
import { useContext, useState } from "react";
import ModalContext from "../../../store/modalContext";
import Zoom from "../svgs/Zoom";
// import Spinner from "../Spinner/Spinner";
import {
  StyledPhoto,
  LoadingDiv,
  HoverDiv,
  ImageWrapper,
  ZoomDiv,
} from "./PhotoStyles";

const Photo = ({ item, loading, quality }) => {
  // const [load, setLoad] = useState(true);

  const modalCtx = useContext(ModalContext);
  return (
    <StyledPhoto
      onClick={() => {
        modalCtx.changeToPhoto(true);
        modalCtx.showModal(
          <Image src={item.imgSrc} layout="fill" objectFit="contain" />
        );
      }}
    >
      {/* {load && (
        <LoadingDiv ratio={(item.height / item.width) * 100}>
          <Spinner />
        </LoadingDiv>
      )} */}

      <ImageWrapper
      // load={load}
      >
        <Image
          src={item.imgSrc}
          alt={item.tags[0]}
          width={item.width}
          height={item.height}
          layout="responsive"
          quality={quality}
          loading={loading}
          // onLoad={(event) => {
          //   event.target.src.indexOf("data:image/gif;base64") < 0 &&
          //     setLoad(false);
          // }}
        />
        <HoverDiv className="hover-div" />
        <ZoomDiv>
          <Zoom width={35} height={35} strokeWidth={1.5} />
        </ZoomDiv>
      </ImageWrapper>
    </StyledPhoto>
  );
};

export default Photo;
