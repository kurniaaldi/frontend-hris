"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import React from "react";

const Page = () => {
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

  const TABLE_HEAD = [
    "Transaction ID",
    "Loan Name",
    "Loan Amount",
    "Installment",
    "Interest",
    "Effective Date",
  ];

  const TABLE_ROWS = [
    {
      name: "141241231213",
      job: "Transport",
      date: "23/04/18",
      effectiveDate: "23/04/18",
      detail: "-",
      total: "1.000.000",
      status: "done",
      approval: "kopet",
      file: "-",
    },
    {
      name: "1412412312132",
      job: "Transport",
      date: "23/04/18",
      effectiveDate: "23/04/18",
      detail: "-",
      total: "1.000.000",
      status: "done",
      approval: "kopet",
      file: "-",
    },
    {
      name: "141241231223",
      job: "Transport",
      date: "23/04/18",
      effectiveDate: "23/04/18",
      detail: "-",
      total: "1.000.000",
      status: "done",
      approval: "kopet",
      file: "-",
    },
    {
      name: "141241251213",
      job: "Transport",
      date: "23/04/18",
      effectiveDate: "23/04/18",
      detail: "-",
      total: "1.000.000",
      status: "done",
      approval: "kopet",
      file: "-",
    },
  ];

  return (
    <div className="space-y-6">
      <Typography variant="h3">Your Loan</Typography>
      <Typography variant="small">
        Your data information related to company.
      </Typography>
      <div className="w-full space-y-4">
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  {
                    name,
                    job,
                    date,
                    file,
                    approval,
                    detail,
                    effectiveDate,
                    status,
                    total,
                  },
                  index
                ) => (
                  <tr key={name} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {job}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {total}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {detail}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {effectiveDate}
                      </Typography>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </Card>
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
    </div>
  );
};

export default Page;
