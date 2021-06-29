import { useInView } from "react-intersection-observer";
import useTranslation from "next-translate/useTranslation";
import { StyledDwButtons, DwButton } from "./DWButtonsStyled";

const DWButtons = (props) => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <StyledDwButtons ref={ref}>
      {["doors", "windows", "kitchens"].map((btn, index) => (
        <DwButton
          inView={inView}
          key={index}
          index={index}
          className={`${props.button === btn ? "active" : ""}`}
          onClick={() => props.setButton(btn)}
        >
          {t(`home:dw.${btn}.title`)}
        </DwButton>
      ))}
    </StyledDwButtons>
  );
};

export default DWButtons;
