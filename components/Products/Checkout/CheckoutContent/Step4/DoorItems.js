import { StyledDoorItems, DoorItem } from "./DoorItemsStyles";

const DoorItems = (props) => {
  return (
    <StyledDoorItems>
      {props.doors.map((item, index) => (
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
      ))}
    </StyledDoorItems>
  );
};

export default DoorItems;
