"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
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
    <div className="space-y-4">
      <div className="flex flex-col">
        <Typography variant="h3">Your attendance information</Typography>
        <Typography variant="small" className="font-bold italic">
          This is a summary of your attendance information
        </Typography>
      </div>
      <div className="flex items-center justify-start gap-2 w-full py-4">
        <Button variant="outlined" size="sm">
          Request Overtime
        </Button>
        <Button variant="outlined" size="sm">
          Export
        </Button>
      </div>

      <div className="flex items-center justify-start w-full flex-col gap-2">
        <Card className="h-fit w-full grid grid-cols-6 shadow-md p-4 bg-blue-gray-100">
          <Typography variant="small" className="font-bold text-start">
            Create Date
          </Typography>
          <Typography variant="small" className="font-bold text-start">
            Overtime Date
          </Typography>
          <Typography variant="small" className="font-bold text-start">
            Status
          </Typography>
          <Typography variant="small" className="font-bold text-start">
            Compensation Type
          </Typography>
          <Typography variant="small" className="font-bold text-start">
            Approval
          </Typography>
          <Typography variant="small" className="font-bold text-start">
            Action
          </Typography>
        </Card>
        <Card className="h-fit w-full grid grid-cols-6 shadow-md p-4 bg-yellow-100 items-center">
          <Typography className="font-bold text-start">2023-10-11</Typography>
          <Typography className="font-bold text-start">CTHOP</Typography>
          <Typography className="font-bold text-start">2023-10-11</Typography>
          <Typography className="font-bold text-start">2023-10-11</Typography>

          <Typography className="font-bold text-start">Approve</Typography>

          <Typography className="text-start font-bold cursor-pointer">
            Cancel
          </Typography>
        </Card>

        {Array.from(data || []).map((el: any) => (
          <Card
            key={el}
            className="h-fit w-full grid grid-cols-6 shadow-md p-4 bg-green-100 items-center"
          >
            <Typography className="font-bold text-start">2023-10-11</Typography>
            <Typography className="font-bold text-start">CTHOP</Typography>
            <Typography className="font-bold text-start">2023-10-11</Typography>
            <Typography className="font-bold text-start">2023-10-11</Typography>

            <Typography className="font-bold text-start">Approve</Typography>

            <Typography className="text-start font-bold cursor-pointer">
              Cancel
            </Typography>
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
