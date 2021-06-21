import { useContext, Fragment } from "react";
import PopupContext from "../../../store/popupContext";
import { StyledPopup, Title, Text } from "./PopupStyles";

const Popup = () => {
  const popupCtx = useContext(PopupContext);
  return (
    <StyledPopup className={`${popupCtx.popup ? "animate" : ""}`}>
      {popupCtx.popup && (
        <Fragment>
          <Title>{popupCtx.popup.title}:</Title>
          <div style={{ overflow: "hidden" }}>
            <Text>{popupCtx.popup.text1}</Text>
          </div>
          <div style={{ overflow: "hidden" }}>
            <Text text2>{popupCtx.popup.text2}</Text>
          </div>
        </Fragment>
      )}
    </StyledPopup>
  );
};

export default Popup;
