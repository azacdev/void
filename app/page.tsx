import { headers } from "next/headers";
import Image from "next/image";

import { auth } from "@/lib/auth";
import { Navbar } from "@/components/navbar";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Navbar user={session?.user} />
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {!session ? "Not authenticated" : session.user.name}
      </main>
    </div>
  );
}
