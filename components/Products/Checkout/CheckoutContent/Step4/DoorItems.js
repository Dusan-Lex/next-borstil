import { StyledDoorItems, DoorItem, Total } from "./DoorItemsStyles";

const DoorItems = (props) => {
  let sum = 0;
  return (
    <StyledDoorItems>
      {props.doors.map((item, index) => {
        sum = sum + item.doorquantity * item.doorprice;
        return (
          <DoorItem key={index}>
            <img src={`/images/Products/door-${item.doorid}.jpg`} alt="vrata" />
            <div className="first">
              <div>Kvaka: {item.doorhandle}</div>
              <div>Brava: {item.doorlock}</div>
            </div>
            <div>
              ({item.doorquantity} X {item.doorprice}&#8364;)
            </div>
            <div className="last">
              {item.doorquantity * item.doorprice}&#8364;
            </div>
          </DoorItem>
        );
      })}
      <Total>
        Ukupno: <span>{sum}&#8364;</span>{" "}
      </Total>
    </StyledDoorItems>
  );
};

export default DoorItems;
