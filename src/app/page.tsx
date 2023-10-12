import Link from "next/link";

import { Button } from "@/components/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-800">
      <Button>
        <Link href="/signin">Button</Link>
      </Button>
    </main>
  );
}
