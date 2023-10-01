
import * as Ably from "ably/promises";
import { getServerSession } from 'next-auth';

import { authOptions } from "@/config/auth-config-base";
import { NextRequest, NextResponse } from "next/server";

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

  const clientId = (session?.user as any)?.email;
  const client = new Ably.Rest(process.env.ABLY_API_KEY);
  try {
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: clientId || "ANON" });
    return NextResponse.json(tokenRequestData, {
      status: 200
    })
  } catch (e) {
    return NextResponse.json({ reason: e }, {
      status: 500
    })
  }
}

export { handler as PATCH, handler as POST, handler as PUT, handler as GET };
