"use client";

import HiLayout from "@/components/layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HiLayout>{children}</HiLayout>;
}
