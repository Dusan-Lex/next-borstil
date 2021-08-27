import React, { useContext } from "react";
import DoorsContext from "../../../store/doorContext";
import { doorFeatures } from "../DoorsData";
import {
  StyledDoorsSelection,
  SelectionItems,
  SelectionItem,
} from "./DoorsSelectionStyles";

const DoorsSelection = () => {
  const doorCtx = useContext(DoorsContext);
  console.log(doorCtx);
  return (
    <StyledDoorsSelection>
      <SelectionItems>
        <div className="title">Tip:</div>
        <div className="items">
          {doorFeatures.map((item, index) => {
            return (
              <SelectionItem
                key={index}
                onClick={() => {
                  doorCtx.dispatch({
                    type: "CHANGE_DOORTYPE",
                    value: item.doortype,
                  });
                }}
              >
                <img
                  src={`/images/Products/selectdoor-${item.doortype}.jpg`}
                  alt="vrata"
                />
              </SelectionItem>
            );
          })}
        </div>
      </SelectionItems>
      <SelectionItems>
        Boja:
        {doorFeatures
          .find((item) => item.doortype === doorCtx.door.doortype)
          .doorcolors.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  doorCtx.dispatch({
                    type: "CHANGE_DOORCOLOR",
                    value: item,
                  });
                }}
              >
                {item}
              </div>
            );
          })}
      </SelectionItems>
      <SelectionItems>
        Brava:
        {doorFeatures
          .find((item) => item.doortype === doorCtx.door.doortype)
          .doorhandles.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  doorCtx.dispatch({
                    type: "CHANGE_DOORHANDLE",
                    value: item,
                  });
                }}
              >
                {item}
              </div>
            );
          })}
      </SelectionItems>
      <SelectionItems>
        Kvaka:
        {doorFeatures
          .find((item) => item.doortype === doorCtx.door.doortype)
          .doorlocks.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  doorCtx.dispatch({
                    type: "CHANGE_DOORLOCK",
                    value: item,
                  });
                }}
              >
                {item}
              </div>
            );
          })}
      </SelectionItems>
    </StyledDoorsSelection>
  );
};

export default DoorsSelection;
