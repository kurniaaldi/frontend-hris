/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";

import PersonalLayout from "../_components/personal-layout";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <PersonalLayout>{children}</PersonalLayout>
);

export default Layout;
