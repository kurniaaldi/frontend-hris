"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Bars3Icon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  IconButton,
  Tab,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const data = [1, 2, 3, 4, 5, 6];

const Pages = () => {
  const [active, setActive] = React.useState(1);
  const [activeTab, setActiveTab] = React.useState("html");
  const dataTab = [
    {
      label: "Time Off Request",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Delegation",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Time Off Taken",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  const getItemProps = (index: React.SetStateAction<number>) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
      className: "rounded-full",
    }) as any;

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        <Typography variant="h3">Your attendance information</Typography>
        <Typography variant="small" className="font-bold italic">
          This is a summary of your attendance information
        </Typography>
      </div>
      <div className="flex items-center justify-start gap-2 w-full py-4">
        <Button variant="outlined" size="sm">
          Request Time Off
        </Button>
        <Button variant="outlined" size="sm">
          Request Delegation
        </Button>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="border h-44 w-44 p-4 flex items-center justify-start flex-col">
          <Typography className="text-center h-16">
            Cuti Tahunan HO (PRORATE)
          </Typography>
          <Typography variant="h1" className="text-center">
            4 <span className="text-xs">Days</span>{" "}
          </Typography>
        </div>
        <div className="border h-44 w-44 p-4 flex items-center justify-start flex-col">
          <Typography className="text-center h-16">Cuti Tahunan HO</Typography>
          <Typography variant="h1" className="text-center">
            4 <span className="text-xs">Days</span>{" "}
          </Typography>
        </div>
      </div>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 mb-2"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {dataTab.map(({ label, value }) => (
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
          <div className="flex items-center justify-start w-full flex-col gap-2">
            <Card className="h-fit w-full grid grid-cols-12 shadow-md p-4 bg-blue-gray-100">
              <Typography variant="small" className="font-bold text-start">
                Create Date
              </Typography>
              <Typography variant="small" className="font-bold text-start">
                Policy Code
              </Typography>
              <Typography variant="small" className="font-bold text-start">
                Start Date
              </Typography>
              <Typography variant="small" className="font-bold text-start">
                End Date
              </Typography>
              <Typography variant="small" className="font-bold text-start">
                Notes
              </Typography>
              <Typography variant="small" className="font-bold text-start">
                Status
              </Typography>
              <Typography variant="small" className="font-bold text-start">
                Taken
              </Typography>
              <Typography variant="small" className="font-bold text-start">
                Canceled
              </Typography>
              <Typography variant="small" className="font-bold text-start">
                Detail
              </Typography>
              <Typography variant="small" className="font-bold text-start">
                Approval
              </Typography>
              <Typography variant="small" className="font-bold text-start">
                File
              </Typography>
            </Card>
            <Card className="h-fit w-full grid grid-cols-12 shadow-md p-4 bg-yellow-100 items-center">
              <Typography className="font-bold text-start">
                2023-10-11
              </Typography>
              <Typography className="font-bold text-start">CTHOP</Typography>
              <Typography className="font-bold text-start">
                2023-10-11
              </Typography>
              <Typography className="font-bold text-start">
                2023-10-11
              </Typography>
              <Typography className="font-bold text-start underline text-red-300">
                Show
              </Typography>
              <Typography className="font-bold text-start">Approve</Typography>
              <Typography className="font-bold text-start">1day</Typography>
              <Typography className="font-bold text-start">-</Typography>
              <IconButton variant="text" className="rounded-full">
                <DocumentMagnifyingGlassIcon className="w-5 h-5" />
              </IconButton>
              <IconButton variant="text" className="rounded-full">
                <Bars3Icon className="w-5 h-5" />
              </IconButton>
              <Typography className="font-bold text-start">-</Typography>
              <Button variant="text" size="sm">
                Cancel
              </Button>
            </Card>

            {Array.from(data || []).map((el: any) => (
              <Card
                key={el}
                className="h-fit w-full grid grid-cols-12 shadow-md p-4 bg-green-100 items-center"
              >
                <Typography className="font-bold text-start">
                  2023-10-11
                </Typography>
                <Typography className="font-bold text-start">CTHOP</Typography>
                <Typography className="font-bold text-start">
                  2023-10-11
                </Typography>
                <Typography className="font-bold text-start">
                  2023-10-11
                </Typography>
                <Typography className="font-bold text-start underline text-red-300">
                  Show
                </Typography>
                <Typography className="font-bold text-start">
                  Approve
                </Typography>
                <Typography className="font-bold text-start">1day</Typography>
                <Typography className="font-bold text-start">-</Typography>
                <IconButton variant="text" className="rounded-full">
                  <DocumentMagnifyingGlassIcon className="w-5 h-5" />
                </IconButton>
                <IconButton variant="text" className="rounded-full">
                  <Bars3Icon className="w-5 h-5" />
                </IconButton>
                <Typography className="font-bold text-start">-</Typography>
                <Button variant="text" size="sm">
                  Cancel
                </Button>
              </Card>
            ))}
          </div>
          <div className="flex items-center justify-end w-full py-4 gap-4">
            <Button
              variant="text"
              className="flex items-center gap-2 rounded-full"
              onClick={prev}
              disabled={active === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
              <IconButton {...getItemProps(1)}>1</IconButton>
              <IconButton {...getItemProps(2)}>2</IconButton>
              <IconButton {...getItemProps(3)}>3</IconButton>
              <IconButton {...getItemProps(4)}>4</IconButton>
              <IconButton {...getItemProps(5)}>5</IconButton>
            </div>
            <Button
              variant="text"
              className="flex items-center gap-2 rounded-full"
              onClick={next}
              disabled={active === 5}
            >
              Next
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </div>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Pages;
