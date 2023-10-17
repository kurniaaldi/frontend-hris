"use client";

import {
  UserCircleIcon,
  DocumentTextIcon,
  ClockIcon,
  PresentationChartLineIcon,
  LightBulbIcon,
  BuildingStorefrontIcon,
  BriefcaseIcon,
  ArrowLongRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
/* eslint-disable @next/next/no-img-element */

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  List,
  ListItem,
  ListItemPrefix,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import { locateCurrentPosition } from "@/utils/constant";

const Page = () => {
  const [activeTab, setActiveTab] = React.useState("html");

  const data = [
    {
      label: "Announcement",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Tasks",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  useEffect(() => {
    locateCurrentPosition();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex items-start justify-start flex-col gap-8 w-full">
        <div className="w-full h-full">
          <Card className="overflow-hidden relative h-full w-full">
            <div className="flex flex-col items-start justify-start p-8 gap-8">
              <div className="mb-10 flex items-start justify-start gap-2 flex-col">
                <Typography variant="h3">Good Morning, Reza</Typography>
                <Typography>It's Tuesday, 10 October</Typography>
              </div>
              <div className="flex items-start justify-start gap-2 flex-col">
                <Typography variant="small">shorcut</Typography>
                <div className="flex items-start justify-center gap-4">
                  <Link href="/live-attendance">
                    <Button
                      variant="outlined"
                      size="sm"
                      className="rounded-full normal-case"
                    >
                      Live Attendance
                    </Button>
                  </Link>
                  <Button
                    variant="outlined"
                    size="sm"
                    className="rounded-full normal-case"
                  >
                    Request Reimbursement
                  </Button>
                  <Button
                    variant="outlined"
                    size="sm"
                    className="rounded-full normal-case"
                  >
                    Request time Off
                  </Button>
                  <Menu
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                  >
                    <MenuHandler>
                      <Button
                        variant="outlined"
                        size="sm"
                        className="flex items-center gap-2 rounded-full normal-case"
                      >
                        More request <ChevronDownIcon className="w-4 h-4" />
                      </Button>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem>Overtime</MenuItem>
                      <MenuItem>Attendance</MenuItem>
                      <MenuItem>Change shift</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
            </div>

            <div className="right-0 absolute overflow-hidden bottom-0 h-full w-80">
              <Image
                src={"/images/achieve.jpg"}
                alt={"work.png"}
                fill
                objectFit="fill"
              />
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-2 h-fit">
            <Card className="w-full p-2 shadow-xl shadow-blue-gray-900/5">
              <Typography variant="paragraph" color="blue-gray">
                Quick Links
              </Typography>
              <List className="min-w-fit p-0">
                <Link href="/personal-info">
                  <ListItem className="text-sm">
                    <ListItemPrefix>
                      <UserCircleIcon className="h-4" />
                    </ListItemPrefix>
                    My Info
                  </ListItem>
                </Link>
                <ListItem className="text-sm">
                  <ListItemPrefix>
                    <ClockIcon className="h-4" />
                  </ListItemPrefix>
                  My Attendance Logs
                </ListItem>
              </List>
              <hr className="border-blue-gray-50 mb-4" />
              <Typography variant="paragraph" color="blue-gray">
                Applications
              </Typography>

              <List className="min-w-fit">
                <ListItem className="text-sm">
                  <ListItemPrefix>
                    <DocumentTextIcon className="h-4" />
                  </ListItemPrefix>
                  Form
                </ListItem>
                <ListItem className="text-sm">
                  <ListItemPrefix>
                    <PresentationChartLineIcon className="h-4" />
                  </ListItemPrefix>
                  Performance Review
                </ListItem>
                <ListItem className="text-sm">
                  <ListItemPrefix>
                    <LightBulbIcon className="h-4" />
                  </ListItemPrefix>
                  Insight
                </ListItem>
                <ListItem className="text-sm">
                  <ListItemPrefix>
                    <BriefcaseIcon className="h-4" />
                  </ListItemPrefix>
                  Advance Recruitment
                </ListItem>
                <ListItem className="text-sm">
                  <ListItemPrefix>
                    <BuildingStorefrontIcon className="h-4" />
                  </ListItemPrefix>
                  Marketplace
                </ListItem>
              </List>
            </Card>
          </div>
          <div className="col-span-6 w-full flex flex-col gap-4">
            <div className="w-full">
              <Carousel className="rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="h-40 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="image 2"
                  className="h-40 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                  alt="image 3"
                  className="h-40 w-full object-cover"
                />
              </Carousel>
            </div>
            <Card>
              <div className="shadow rounded px-2 py-2">
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
                        } w-fit px-14`}
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
            </Card>
            <div className="w-full flex flex-col gap-2">
              <Card className="w-full overflow-hidden">
                <CardBody>
                  <Typography variant="h4" color="blue-gray">
                    UI/UX Review Check
                  </Typography>
                  <Typography
                    variant="lead"
                    color="gray"
                    className="mt-3 font-normal"
                  >
                    Because it&apos;s about motivating the doers. Because
                    I&apos;m here to follow my dreams and inspire others.
                  </Typography>
                </CardBody>
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                >
                  <div className="relative overflow-hidden w-full h-96">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                      alt="ui/ux review check"
                      fill
                      objectFit="cover"
                    />
                  </div>
                  {/* <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="ui/ux review check"
                  /> */}
                </CardHeader>

                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center -space-x-3">
                    <Tooltip content="Natali Craig">
                      <Avatar
                        size="sm"
                        variant="circular"
                        alt="natali craig"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                        className="border-2 border-white hover:z-10"
                      />
                    </Tooltip>
                    <Tooltip content="Tania Andrew">
                      <Avatar
                        size="sm"
                        variant="circular"
                        alt="tania andrew"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        className="border-2 border-white hover:z-10"
                      />
                    </Tooltip>
                  </div>
                  <Typography className="font-normal">January 10</Typography>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="col-span-2 w-full">
            <Card>
              <div className="p-4 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <Typography variant="paragraph">Sakit Used</Typography>
                  <Typography variant="h5">0 Day</Typography>
                  <div className="cursor-pointer underline gap-2 text-blue-800 flex items-center justify-start">
                    Request sakit <ArrowLongRightIcon className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Typography variant="paragraph">Izin Used</Typography>
                  <Typography variant="h5">0 Day</Typography>
                  <div className="cursor-pointer underline gap-2 text-blue-800 flex items-center justify-start">
                    Request izin <ArrowLongRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <hr className="w-full" />
              <div className="p-4 cursor-pointer underline gap-2 text-blue-800 flex items-center justify-start">
                View All
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
