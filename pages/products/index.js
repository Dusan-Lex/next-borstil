import Products from "../../components/Products/Products";
import { connectToDatabase } from "../../shared/utils/mongoDb";

const Proizvodi = ({ doors }) => {
  return (
    <main>
      <Products doors={JSON.parse(doors)} />
    </main>
  );
};

export default Proizvodi;

export async function getStaticProps() {
  const { db, error } = await connectToDatabase();

  if (error) {
    return { props: { error: "error500" } };
  }

  const allDoors = await db.collection("doors").find().toArray();

  return {
    props: { doors: JSON.stringify(allDoors) },
  };
}
