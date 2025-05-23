import { authClient } from "@/lib/auth-client";

export function useAuth() {
  const { data: session, ...rest } = authClient.useSession();
  const user = session?.user;

  return {
    session,
    user,
    ...rest,
  };
}
