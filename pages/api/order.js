const handler = async (req, res) => {
  if (req.method === "POST") {
    const order = req.body;
    res.json(order);
  }
};

export default handler;
