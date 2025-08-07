import { betterAuth } from "better-auth";
import { magicLink } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db/drizzle";
import { verification, account, session, user } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";
import { sendEmailAction } from "@/actions/send-email";

export const auth = betterAuth({
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      session,
      account,
      verification,
    },
  }),
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url }) => {
        await sendEmailAction({
          to: email,
          subject: "Your Magic Link",
          meta: {
            description:
              "Click the button below to sign in to your account. This link will expire in 10 minutes.",
            link: url,
          },
        });
      },
    }),
    nextCookies(),
  ],
});
