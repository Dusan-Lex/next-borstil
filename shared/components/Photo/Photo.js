import Image from "next/image";
import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import { StyledPhoto, LoadingDiv, ImageWrapper } from "./PhotoStyles";

const Photo = (props) => {
  const [loading, setLoading] = useState(true);
  return (
    <StyledPhoto>
      {loading && (
        <LoadingDiv ratio={(props.height / props.width) * 100}>
          <Spinner />
        </LoadingDiv>
      )}
      <ImageWrapper load={loading}>
        <Image
          src={props.imgSrc}
          width={props.width}
          height={props.height}
          layout="responsive"
          quality={60}
          onLoad={(event) => {
            if (event.target.src.indexOf("data:image/gif;base64") < 0) {
              setLoading(false);
            }
          }}
        />
      </ImageWrapper>
    </StyledPhoto>
  );
};

export default Photo;
