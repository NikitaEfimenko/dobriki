
import * as Ably from "ably/promises";
import { getServerSession } from 'next-auth';

import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/config/auth-config";

async function handler(
  req: NextRequest,
  res: NextResponse
) {

  if (!process.env.ABLY_API_KEY) {
    return new NextResponse(JSON.stringify({
        errorMessage: "Missing ABLY_API_KEY environment variable"
      }), {
        status: 500
      })
  }
  const session = await getServerSession(authOptions)

  const clientId = session?.user?.email || "GUEST_TOKEN";
  const client = new Ably.Rest(process.env.ABLY_API_KEY);
  const tokenRequestData = await client.auth.createTokenRequest({ clientId: clientId });

  return new NextResponse(JSON.stringify(tokenRequestData), {
    status: 200
  })
}

export { handler as POST, handler as PUT, handler as PATCH}