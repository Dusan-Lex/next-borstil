import { connectDatabase, getSomeReferences } from "../../shared/utils/mongoDb";

const handler = async (req, res) => {
  if (req.method === "GET") {
    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed" });
      return;
    }

    try {
      const documents = await getSomeReferences(client, "reference", [
        "1",
        "2",
        "3",
        "21",
        "4",
        "6",
        "7",
        "8",
        "9",
      ]);
      res.status(200).json(documents);
      return;
    } catch (error) {
      res.status(500).json({ message: "Finding home references failed" });
      return;
    }
  }
};

export default handler;
