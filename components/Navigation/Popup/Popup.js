import { useContext, Fragment } from "react";
import PopupContext from "../../../context-store/popupContext";
import { StyledPopup, Title, Text } from "./PopupStyles";

const Popup = () => {
  const popupCtx = useContext(PopupContext);
  return (
    <StyledPopup className={`${popupCtx.popup ? "animate" : ""}`}>
      {popupCtx.popup && (
        <Fragment>
          <Title key={popupCtx.popup.title}>{popupCtx.popup.title}</Title>
          <div style={{ overflow: "hidden" }}>
            <Text key={popupCtx.popup.title}>{popupCtx.popup.text1}</Text>
          </div>
          <div style={{ overflow: "hidden" }}>
            <Text key={popupCtx.popup.title} text2>
              {popupCtx.popup.text2}
            </Text>
          </div>
        </Fragment>
      )}
    </StyledPopup>
  );
};

export default Popup;
