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
