"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const data = [1, 2, 3, 4, 5, 6];
const Pages = () => {
  const [active, setActive] = React.useState(1);

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
    <div>
      <div className="flex flex-col mb-4">
        <Typography variant="h3">Your attendance information</Typography>
        <Typography variant="small" className="font-bold italic">
          This is a summary of your attendance information
        </Typography>
      </div>
      <div className="flex items-center justify-start gap-2 w-full py-4">
        <Button variant="outlined" size="sm">
          Request Attendance
        </Button>
        <Button variant="outlined" size="sm">
          View Attendance Log
        </Button>
        <Link href="/live-attendance">
          <Button variant="outlined" size="sm">
            Live Attendance
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-start w-full flex-col gap-2">
        <Card className="h-fit w-full grid grid-cols-5 shadow-md bg-blue-gray-100">
          <Button variant="text">Request Type</Button>
          <Button variant="text">Create Date</Button>
          <Button variant="text">Start Date</Button>
          <Button variant="text">Status</Button>
        </Card>
        <Card className="h-fit w-full grid grid-cols-5 shadow-md py-4 bg-yellow-100">
          <Typography className="font-bold text-center">Attendance</Typography>
          <Typography className="font-bold text-center">2023-10-11</Typography>
          <Typography className="font-bold text-center">2023-10-11</Typography>
          <Typography className="font-bold text-center">Pending</Typography>
          <div className="flex items-center justify-center gap-2 w-full">
            <Button variant="outlined" size="sm">
              Detail
            </Button>
            <Button variant="outlined" size="sm">
              Approval
            </Button>
            <Button variant="outlined" size="sm">
              Cancel
            </Button>
          </div>
        </Card>
        <Card className="h-fit w-full grid grid-cols-5 shadow-md py-4 bg-green-100">
          <Typography className="font-bold text-center">Attendance</Typography>
          <Typography className="font-bold text-center">2023-10-11</Typography>
          <Typography className="font-bold text-center">2023-10-11</Typography>
          <Typography className="font-bold text-center">Pending</Typography>
          <div className="flex items-center justify-center gap-2 w-full">
            <Button variant="outlined" size="sm">
              Detail
            </Button>
            <Button variant="outlined" size="sm">
              Approval
            </Button>
            <Button variant="outlined" size="sm">
              Cancel
            </Button>
          </div>
        </Card>
        {Array.from(data || []).map((el: any) => (
          <Card
            key={el}
            className="h-fit w-full grid grid-cols-5 shadow-md py-4 bg-green-100"
          >
            <Typography className="font-bold text-center">
              Attendance
            </Typography>
            <Typography className="font-bold text-center">
              2023-10-11
            </Typography>
            <Typography className="font-bold text-center">
              2023-10-11
            </Typography>
            <Typography className="font-bold text-center">Pending</Typography>
            <div className="flex items-center justify-center gap-2 w-full">
              <Button variant="outlined" size="sm">
                Detail
              </Button>
              <Button variant="outlined" size="sm">
                Approval
              </Button>
              <Button variant="outlined" size="sm">
                Cancel
              </Button>
            </div>
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
    </div>
  );
};

export default Pages;
