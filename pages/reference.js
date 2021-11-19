import DatabaseError from "../components/DatabaseError/DatabaseError";
import ReferenceSection from "../components/Reference/ReferenceSection";
import { getAllReferences } from "../shared/utils/mongoDb";
import { connectToDatabase } from "../shared/utils/mongoDb";

const Reference = (props) => {
  return props.error ? (
    <main>
      <DatabaseError />
    </main>
  ) : (
    <main>
      <ReferenceSection referenceData={JSON.parse(props.documents)} />
    </main>
  );
};

export default Reference;

export async function getStaticProps() {
  const { db, error } = await connectToDatabase();

  if (error) {
    return { props: { error } };
  }
  const data = await getAllReferences(db);

  return {
    props: { documents: JSON.stringify(data) },
  };
}
