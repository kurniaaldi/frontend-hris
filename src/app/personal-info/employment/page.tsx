"use client";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Pages = () => {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Approve line",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Manager",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <div>
      <Typography variant="h3">Employment</Typography>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <Typography>Personal data</Typography>
          <Typography variant="small">
            Your data information related to company.
          </Typography>
        </div>
        <div className="col-span-9 grid grid-cols-3 gap-2">
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Company name
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">PT. Citta Parama Guna</Typography>
          </div>
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Employee ID
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">CPG21020030</Typography>
          </div>
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Barcode
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">-</Typography>
          </div>
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Organization name
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">Paramatech Head Office</Typography>
          </div>
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Job position
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">Software Developer (HO)</Typography>
          </div>
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Job level
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">Staff</Typography>
          </div>
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Employment status
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">Permanent</Typography>
          </div>
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Branch
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">Paramatech</Typography>
          </div>
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Join date
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">
              12 Dec 2022 0 Year 10 Month 5 Day
            </Typography>
          </div>
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Sign date
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">-</Typography>
          </div>
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Grade
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">-</Typography>
          </div>
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Class
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">-</Typography>
          </div>
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Approval line
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">
              CPG21018888 - Achmad Michael
            </Typography>
          </div>
          <div className="col-span-1">
            <Typography variant="small" className="font-semibold">
              Manager
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography variant="small">
              CPG21018888 - Achmad Michael
            </Typography>
          </div>
        </div>

        <hr className="col-span-12" />
        <div className="col-span-3">
          <Typography>Subordinate</Typography>
        </div>
        <div className="col-span-9 w-full">
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
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Pages;
