import type { NextApiRequest, NextApiResponse } from 'next'
import * as Ably from "ably/promises";
import { env } from '~/env.mjs';
import { getServerSession } from 'next-auth';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (!process.env.ABLY_API_KEY) {
    return res
            .status(500)
            .setHeader("content-type", "application/json")
            .json({
              errorMessage: "Missing ABLY_API_KEY environment variable"
            })
    }
  const session = await getServerSession(req, res, {})

  const clientId = session?.user?.email || "GUEST_TOKEN";
  const client = new Ably.Rest(env.ABLY_API_KEY);
  const tokenRequestData = await client.auth.createTokenRequest({ clientId: clientId });

  return res.status(200).json(tokenRequestData)
}