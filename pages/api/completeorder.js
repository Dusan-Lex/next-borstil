import { ObjectId } from "bson";
import { connectToDatabase, insertDocument } from "../../shared/utils/mongoDb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { order, orderInfo } = req.body;
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
    const total = order.reduce((s, x) => s + x.doorquantity * x.doorprice, 0);

    try {
      await insertDocument(db, "orders", {
        order,
        orderInfo: {
          individualInfo: orderInfo.individualInfo.form,
          legalEntityInfo: orderInfo.legalEntity
            ? orderInfo.legalEntityInfo.form
            : "",
          payment: orderInfo.payment,
        },
        total,
      });
    } catch (error) {
      res.status(500).json({ message: "error" });
      return;
    }

    res.json({ message: "finished" });
  }
};

export default handler;
