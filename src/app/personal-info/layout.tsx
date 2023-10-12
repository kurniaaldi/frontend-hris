"use client";

import HiLayout from "@/components/layout/index";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HiLayout>{children}</HiLayout>;
}
