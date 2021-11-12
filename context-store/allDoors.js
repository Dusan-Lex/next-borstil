import { useState, createContext } from "react";

const AllDoorsContext = createContext({
  alldoors: [],
  setAllDoors: () => {},
});

export const AllDoorsContextProvider = (props) => {
  const [allDoorsState, setAllDoorsState] = useState([]);
  console.log(allDoorsState);
  const setAllDoorsHandler = (allDoors) => {
    setAllDoorsState(allDoors);
  };

  const context = {
    alldoors: allDoorsState,
    setAllDoors: setAllDoorsHandler,
  };
  return (
    <AllDoorsContext.Provider value={context}>
      {props.children}
    </AllDoorsContext.Provider>
  );
};
export default AllDoorsContext;
