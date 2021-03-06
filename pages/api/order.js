import { ObjectId } from "bson";
import { connectToDatabase } from "../../shared/utils/mongoDb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { order } = req.body;
    const { db, error } = await connectToDatabase();
    if (error) {
      res.status(500).json({ message: "error" });
      return;
    }

    for (let i = 0; i < order.length; i++) {
      try {
        const response = await db
          .collection("doors")
          .findOne({ _id: ObjectId(order[i].doorid) });
        if (order[i].doorhandle !== "premium") {
          order[i].doorhandle = "classic";
        }
        if (order[i].doorlock !== "premium") {
          order[i].doorlock = "classic";
        }
        const handlePrice = order[i].doorhandle === "premium" ? 17 : 0;
        const lockPrice = order[i].doorlock === "premium" ? 7 : 0;

        order[i] = {
          ...order[i],
          doorprice: response.price + handlePrice + lockPrice,
          doorcolor: response.color,
          doorimageurl: response.image_url,
          doortype: response.type,
          doorhandle: order[i].doorhandle,
          doorlock: order[i].doorlock,
        };
      } catch (error) {
        res.status(500).json({ message: "error" });
        return;
      }
    }

    res.json(order);
  }
};

export default handler;
