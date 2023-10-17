import Link from "next/link";

import { Button, Typography } from "@/components/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-800">
      <Typography> Landing Page </Typography>
      <Link href="/signin">
        <Button>masuk</Button>
      </Link>
    </main>
  );
}
