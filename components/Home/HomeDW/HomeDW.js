import { useState } from "react";
import { useInView } from "react-intersection-observer";
import useTranslation from "next-translate/useTranslation";

import DWButtons from "./DWButtons/DWButtons";
import Door from "../../../shared/components/svgs/Door";
import Window from "../../../shared/components/svgs/Window";
import Kitchen from "../../../shared/components/svgs/Kitchen";
import { StyledHomeDW, HomeDWContainer } from "./HomeDWStyles";

const HomeDW = () => {
  const [button, setButton] = useState("doors");
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <StyledHomeDW ref={ref}>
      <DWButtons button={button} setButton={setButton} />
      <HomeDWContainer inView={inView}>
        <div className="svg-box">
          {button === "doors" ? (
            <Door width="17.5rem" />
          ) : button === "windows" ? (
            <Window width="13.5rem" />
          ) : (
            <Kitchen width="16rem" />
          )}
        </div>
        <div className="details">
          {t(`home:dw.${button}.text`)}
          {/* <DwButton text="Detaljnije" path="/proizvodi" /> */}
        </div>
      </HomeDWContainer>
    </StyledHomeDW>
  );
};

export default HomeDW;
