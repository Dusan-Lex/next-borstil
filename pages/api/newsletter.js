import { findByEmail, insertDocument } from "../../shared/utils/mongoDb";
import { connectToDatabase } from "../../shared/utils/mongoDb";
import { emailValidation } from "../../shared/utils/validation";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!emailValidation(userEmail)) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }
    const { db, error } = await connectToDatabase();

    if (error) {
      res.status(500).json({ message: "Connecting to the database failed" });
      return;
    }

    try {
      const email = await findByEmail(db, "newsletter", userEmail);
      console.log(email);
      if (email) {
        res.status(409).json({ message: "Email already exists" });
        return;
      }
    } catch (error) {
      res.status(500).json({ message: "Finding email failed" });
      return;
    }

    try {
      await insertDocument(db, "newsletter", { email: userEmail });
    } catch (error) {
      res.status(500).json({ message: "Inserting email failed" });
      return;
    }

    res.status(201).json({ message: "Signed up" });
  }
};

export default handler;
