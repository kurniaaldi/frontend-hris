"use client";

import { Tabs, TabsHeader, Tab, TabsBody } from "@material-tailwind/react";
import React from "react";

import {
  ContentBasic,
  ContentFamily,
  ContentEmergencyContact,
} from "../_components";

const Page = () => {
  const [activeTab, setActiveTab] = React.useState("basic");
  const data = [
    {
      label: "Basic Info",
      value: "basic",
      content: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Family",
      value: "family",
      content: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Emergency Contact",
      value: "emergency",
      content: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`${
              activeTab === value ? "text-gray-900" : ""
            } w-fit px-14 py-2`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        <ContentBasic value="basic" />
        <ContentFamily value="family" />
        <ContentEmergencyContact value="emergency" />
      </TabsBody>
    </Tabs>
  );
};

export default Page;
