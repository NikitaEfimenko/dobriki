import type { AuthOptions, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios"


const SIGN_IN_HANDLERS = {
  "credentials": async (user: any, account: any, profile: any, email: any, credentials: any) => {
    return true;
  },
};
const SIGN_IN_PROVIDERS = Object.keys(SIGN_IN_HANDLERS);

const BACKEND_ACCESS_TOKEN_LIFETIME = 45 * 60;            // 45 minutes
const BACKEND_REFRESH_TOKEN_LIFETIME = 6 * 24 * 60 * 60;  // 6 days

const getCurrentEpochTime = () => {
  return Math.floor(new Date().getTime() / 1000);
};


//pnqaysxznqywxtwp
export const authOptions =
  {
    session: {
      strategy: "jwt",
      maxAge: BACKEND_REFRESH_TOKEN_LIFETIME,
    },
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          try {
            const response = await axios({
              url: process.env.NEXTAUTH_BACKEND_URL + "auth/login/",
              method: "post",
              data: credentials,
            });
            const data = response.data;
            if (data) return data;
          } catch (error) {
            console.error(error);
          }
          return null;
        },
      }),

    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if (account?.provider) {
        if (!SIGN_IN_PROVIDERS.includes(account.provider)) return false;
          return (SIGN_IN_HANDLERS as any)[account.provider](
          user, account, profile, email, credentials
          );
        }
      },
      async jwt({ user, token, account }) {

        if (user && account) {
          let backendResponse: any = account.provider === "credentials" ? user : account.meta;
          token["user"] = backendResponse.user;
          token["access_token"] = backendResponse.access;
          token["refresh_token"] = backendResponse.refresh;
          token["ref"] = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;
          return token;
        }
        // Refresh the backend token if necessary
        if (getCurrentEpochTime() > (token as any)["ref"]) {
          const response = await axios({
            method: "post",
            url: process.env.NEXTAUTH_BACKEND_URL + "auth/token/refresh/",
            data: {
              refresh: token["refresh_token"],
            },
          });
          token["access_token"] = response.data.access;
          token["refresh_token"] = response.data.refresh;
          token["ref"] = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;
        }
        return token;
      },
      // Since we're using Django as the backend we have to pass the JWT
      // token to the client instead of the `session`.
      async session({ token, user }) {
        return token as unknown as DefaultSession;
      },
    }
  } satisfies AuthOptions