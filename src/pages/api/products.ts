import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const products = await prisma.product.findMany();

  res.status(200).json(products);
};

export default handler;
