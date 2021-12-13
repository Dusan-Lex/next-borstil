import React, { useContext } from "react";
import DoorsContext from "../../../context-store/doorContext";
import { doorFeatures } from "../DoorsData";
import AddButton from "./AddButton";
import {
  StyledDoorsSelection,
  SelectionItems,
  SelectionItem,
  HandleLockGroup,
} from "./DoorsSelectionStyles";

const DoorsSelection = () => {
  const doorCtx = useContext(DoorsContext);

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
                  src={`/images/products/door-${item.doortype}${active}.jpg`}
                  alt="vrata"
                />
                <img
                  src={`/images/products/door-${item.doortype}-active.jpg`}
                  alt="vrata"
                  style={{ display: "none" }}
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
                  <img src={`/images/products/color-${item}.jpg`} alt={item} />
                </SelectionItem>
              );
            })}
        </div>
      </SelectionItems>
      <HandleLockGroup>
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
      </HandleLockGroup>
      <AddButton />
    </StyledDoorsSelection>
  );
};

export default React.memo(DoorsSelection);
