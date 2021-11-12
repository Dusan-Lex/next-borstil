import React, { useContext, useEffect } from "react";
import Products from "../../components/Products/Products";
import AllDoorsContext from "../../context-store/allDoors";
import { connectDatabase, getAllDoors } from "../../shared/utils/mongoDb";

const Proizvodi = ({ doors }) => {
  const allDoorsCtx = useContext(AllDoorsContext);

  useEffect(() => {
    allDoorsCtx.setAllDoors(JSON.parse(doors));
  }, []);
  return (
    <main>
      <Products />
    </main>
  );
};

export default Proizvodi;

export async function getStaticProps() {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return { props: { error: "error500" } };
  }

  const allDoors = await getAllDoors(client);
  client.close();
  return {
    props: { doors: JSON.stringify(allDoors) },
  };
}
