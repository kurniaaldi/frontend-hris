/* eslint-disable @next/next/no-img-element */

"use client";

import { Breadcrumbs, Card } from "@material-tailwind/react";
import React from "react";

import { ListSideBar, PhotoProfile } from "@/app/personal-info/_components";

const PersonalLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full px-4">
    <Card className="px-4 rounded grid grid-cols-6">
      <div className="py-4 border-r flex flex-col">
        <PhotoProfile />
        <hr className="w-full" />
        <ListSideBar />
      </div>
      <div className="col-span-5 p-4 flex items-start justify-start flex-col gap-4">
        <Breadcrumbs>
          <a href="#" className="opacity-60">
            Docs
          </a>
          <a href="#" className="opacity-60">
            Components
          </a>
          <a href="#">Breadcrumbs</a>
        </Breadcrumbs>
        <div className="w-full h-full">{children}</div>
      </div>
    </Card>
  </div>
);

export default PersonalLayout;
