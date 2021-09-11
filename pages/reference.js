import ReferenceSection from "../components/Reference/ReferenceSection";
import { connectDatabase, getAllReferences } from "../shared/utils/mongoDb";

const Reference = (props) => {
  return (
    <main>
      <ReferenceSection referenceData={JSON.parse(props.documents)} />
    </main>
  );
};

export default Reference;

export async function getStaticProps(context) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return { props: { error: "error500" } };
  }
  const allData = await getAllReferences(client);
  return {
    props: { documents: JSON.stringify(allData) },
  };
}
