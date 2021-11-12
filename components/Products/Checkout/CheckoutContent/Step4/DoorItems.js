const DoorItems = (props) => {
  console.log(props);
  return (
    <div>
      {props.doors.map((item, index) => (
        <p key={index}>{item.doortype}</p>
      ))}
    </div>
  );
};

export default DoorItems;
