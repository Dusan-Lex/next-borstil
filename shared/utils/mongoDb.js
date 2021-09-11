import { MongoClient } from "mongodb";
const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.szwyi.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(connectionString, {
    useUnifiedTopology: true,
  });
  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};

export const findByEmail = async (client, collection, email) => {
  const db = client.db();
  const result = await db.collection(collection).findOne({ email: email });
  return result;
};

export const getAllReferences = async (client) => {
  const db = client.db();
  const documents = await db
    .collection("reference")
    .find({ srcImgId: { $ne: "21" } })
    .toArray();
  return documents;
};

export const getSomeReferences = async (client, collection, indexArray) => {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find({ srcImgId: { $in: indexArray } })
    .toArray();
  return documents;
};
