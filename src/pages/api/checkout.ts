import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";

const postCheckout = async (req, res) => {
  const response = await prisma.transaction.create({
    data: {
      value: req.body.value,
    },
  });

  res.status(200).json(response);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      await postCheckout(req, res);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
