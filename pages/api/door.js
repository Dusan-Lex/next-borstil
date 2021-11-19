import { connectToDatabase } from "../../shared/utils/mongoDb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { doortype, doorcolor, doorhandle, doorlock } = req.body;

    const { db, error } = await connectToDatabase();

    if (error) {
      res.status(500).json({ message: "Connecting to the database failed" });
      return;
    }

    try {
      const door = await db
        .collection("doors")
        .findOne({ type: doortype, color: doorcolor });
      if (door) {
        const handlePrice = doorhandle === "premium" ? 17 : 0;
        const lockPrice = doorlock === "premium" ? 7 : 0;
        res.json({
          doorprice: door.price + handlePrice + lockPrice,
          doorimageurl: door.image_url,
        });
        return;
      }
    } catch (error) {
      res.status(500).json({ message: "Finding door failed" });
      return;
    }
  }
};

export default handler;
