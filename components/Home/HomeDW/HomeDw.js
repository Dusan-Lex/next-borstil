import { useState } from "react";
import { useInView } from "react-intersection-observer";

import { StyledHomeDW } from "./HomeDWStyles";

const HomeDw = () => {
  const [button, setButton] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const dwClass = inView ? "animate" : "";

  return (
    <StyledHomeDW className={`section-dw ${dwClass}`} ref={ref}>
      {/* <DwButtons button={button} setButton={setButton} /> */}
      <div className="section-dw__container">
        <div className="section-dw__svg-box">
          {/* {dwSection[button].svg} */}
        </div>
        <div className="section-dw__details angles">
          {/* {dwSection[button].text} */}
          {/* <DwButton text="Detaljnije" path="/proizvodi" /> */}
        </div>
      </div>
    </StyledHomeDW>
  );
};

export default HomeDw;
