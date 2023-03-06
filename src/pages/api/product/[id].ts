import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.query.id as string,
    },
  });

  console.log("product", product);

  if (!product) return res.status(404).end();

  res.status(200).json(product);
};

export default handler;
