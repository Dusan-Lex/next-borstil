import React from "react";
import Doors from "../../components/Products/Doors";
import { DoorContextProvider } from "../../store/doorContext";

const Proizvodi = () => {
  return (
    <DoorContextProvider>
      <main>
        <Doors />
      </main>
    </DoorContextProvider>
  );
};

export default Proizvodi;
