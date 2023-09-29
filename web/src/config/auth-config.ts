import type { AuthOptions } from "next-auth";
import FusionAuthProvider from "next-auth/providers/fusionauth"

const fusionAuthIssuer = process.env.FUSIONAUTH_ISSUER;
const fusionAuthClientId = process.env.FUSIONAUTH_CLIENT_ID;
const fusionAuthClientSecret = process.env.FUSIONAUTH_CLIENT_SECRET;
const fusionAuthUrl = process.env.FUSIONAUTH_URL;
const fusionAuthTenantId = process.env.FUSIONAUTH_TENANT_ID;

const missingError = 'missing in environment variables.';
if (!fusionAuthIssuer) {
  throw Error('FUSIONAUTH_ISSUER' + missingError)
}
if (!fusionAuthClientId) {
  throw Error('FUSIONAUTH_CLIENT_ID' + missingError)
}
if (!fusionAuthClientSecret) {
  throw Error('FUSIONAUTH_CLIENT_SECRET' + missingError)
}
if (!fusionAuthUrl) {
  throw Error('FUSIONAUTH_URL' + missingError)
}
if (!fusionAuthTenantId) {
  throw Error('FUSIONAUTH_TENANT_ID' + missingError)
}
//pnqaysxznqywxtwp
export const authOptions =
  {
    providers: [
      FusionAuthProvider({
        issuer: fusionAuthIssuer,
        clientId: fusionAuthClientId,
        clientSecret: fusionAuthClientSecret,
        wellKnown: `${fusionAuthUrl}/.well-known/openid-configuration/${fusionAuthTenantId}`,
        tenantId: fusionAuthTenantId, // Only required if you're using multi-tenancy
        client: {
          authorization_signed_response_alg: 'HS256',
          id_token_signed_response_alg: 'HS256'
        }
      }),
    ],
    session: {
      strategy: "jwt"
    },
    pages: {
      signIn: "/auth/signin"
    }

  } satisfies AuthOptions