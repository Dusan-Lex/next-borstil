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
            const active =
              item.doortype === doorCtx.door.doortype ? "-active" : "";
            return (
              <SelectionItem
                className={active}
                key={index}
                onClick={() => {
                  doorCtx.dispatch({
                    type: "CHANGE_DOORTYPE",
                    value: item.doortype,
                  });
                }}
              >
                <img
                  src={`/images/Products/door-${item.doortype}${active}.jpg`}
                  alt="vrata"
                />
              </SelectionItem>
            );
          })}
        </div>
      </SelectionItems>
      <SelectionItems>
        <div className="title">Boja:</div>
        <div className="items">
          {doorFeatures
            .find((item) => item.doortype === doorCtx.door.doortype)
            .doorcolors.map((item, index) => {
              return (
                <SelectionItem
                  className={
                    item === doorCtx.door.doorcolor ? "color -active" : "color"
                  }
                  key={index}
                  onClick={() => {
                    doorCtx.dispatch({
                      type: "CHANGE_DOORCOLOR",
                      value: item,
                    });
                  }}
                >
                  <img src={`/images/Products/color-${item}.jpg`} alt={item} />
                </SelectionItem>
              );
            })}
        </div>
      </SelectionItems>
      <SelectionItems>
        <div className="title">Kvaka:</div>
        <div className="items">
          {doorFeatures
            .find((item) => item.doortype === doorCtx.door.doortype)
            .doorhandles.map((item, index) => {
              return (
                <SelectionItem
                  className={
                    item === doorCtx.door.doorhandle
                      ? "handle-lock -active"
                      : "handle-lock"
                  }
                  key={index}
                  onClick={() => {
                    doorCtx.dispatch({
                      type: "CHANGE_DOORHANDLE",
                      value: item,
                    });
                  }}
                >
                  {item}
                </SelectionItem>
              );
            })}
        </div>
      </SelectionItems>
      <SelectionItems>
        <div className="title">Brava:</div>
        <div className="items">
          {doorFeatures
            .find((item) => item.doortype === doorCtx.door.doortype)
            .doorlocks.map((item, index) => {
              return (
                <SelectionItem
                  className={
                    item === doorCtx.door.doorlock
                      ? "handle-lock -active"
                      : "handle-lock"
                  }
                  key={index}
                  onClick={() => {
                    doorCtx.dispatch({
                      type: "CHANGE_DOORLOCK",
                      value: item,
                    });
                  }}
                >
                  {item}
                </SelectionItem>
              );
            })}
        </div>
      </SelectionItems>
    </StyledDoorsSelection>
  );
};

export default DoorsSelection;