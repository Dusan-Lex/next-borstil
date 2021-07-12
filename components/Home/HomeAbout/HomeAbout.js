import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PlusButton from "../../../shared/components/Buttons/PlusButton/PlusButton";
import {
  StyledHomeAbout,
  ImagesWrapper,
  ImageBox,
  AboutImage,
  AboutContentBox,
  Features,
} from "./HomeAboutStyles";

const HomeAbout = () => {
  const [play, setPlay] = useState("paused");
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  useEffect(() => {
    inView && setPlay("running");
  }, [inView]);

  return (
    <StyledHomeAbout ref={ref}>
      <Features>
        <ImagesWrapper>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <ImageBox key={index}>
                <AboutImage
                  src="/images/Home/Borstil-about.jpg"
                  item={item}
                  play={play}
                />
              </ImageBox>
            );
          })}
        </ImagesWrapper>
        <ul>
          {[
            ["isplativa", "rešenja"],
            ["dugogodišnje", "iskustvo"],
            ["čist", "proizvod"],
          ].map((item, index) => (
            <li key={index}>
              <div>
                {item[0]} <span>{item[1]}</span>
              </div>
              <PlusButton
                onClick={() => {
                  console.log("click");
                }}
              />
            </li>
          ))}
        </ul>
      </Features>

      <AboutContentBox>
        <p>
          <span>Bor Stil</span> je poznata stolarska firma koja se od 2000.
          godine bavi proizvodnjom građevinske stolarije i delove nameštaja.
          Proizvodnja se odvija na lokaciji Durmitorska bb u Leskovcu. Naši
          prozori i vrata pretvaraju kuću u dom ili ugodan poslovni prostor. Od
          samog početka se trudimo da vam ponudimo NAJVEĆI STEPEN KVALITETA UZ
          NAJNIŽE CENE.
        </p>
        <p>
          Proizvodni pogoni Bor Stil stolarije prostiru se na 1500 m<sup>2</sup>{" "}
          , u čijem sklopu je odvojeno više segmenata procesa proizvodnje. Naš
          proces proizvodnje počinje kod Vas na Vašem objektu, stanu, poslovnom
          prostoru, vikendici... Stručni tim je za Vas uvek tu da pomogne
          savetom i iskustvom, te da pronađe najbolje i najoptimalnije rešenje
          za svaki zadatak koji nam postavite.
        </p>
      </AboutContentBox>
    </StyledHomeAbout>
  );
};

export default HomeAbout;
