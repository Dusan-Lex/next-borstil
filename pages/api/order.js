const handler = async (req, res) => {
  if (req.method === "POST") {
    const order = req.body;
    console.log(order);
  }
};

export default handler;
