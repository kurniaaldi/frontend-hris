"use client";

import { Button, Card, Typography } from "@material-tailwind/react";
import React from "react";

const Page = () => {
  const dummy = [
    {
      id: "78344949",
      period: "2023-01-19",
      create_date: "2023-02-01 17:42:22",
      month: 1,
      slip_type: 1,
      cutoff_from: "2022-12-20",
      cutoff_to: "2023-01-19",
      published_1721vi: false,
      published_1721vii: false,
      period_name: "January",
    },
    {
      id: "82027362",
      period: "2023-02-19",
      create_date: "2023-03-09 16:55:15",
      month: 2,
      slip_type: 1,
      cutoff_from: "2023-01-20",
      cutoff_to: "2023-02-19",
      published_1721vi: false,
      published_1721vii: false,
      period_name: "February",
    },
    {
      id: "84474569",
      period: "2023-03-19",
      create_date: "2023-03-29 15:42:09",
      month: 3,
      slip_type: 1,
      cutoff_from: "2023-02-20",
      cutoff_to: "2023-03-19",
      published_1721vi: false,
      published_1721vii: false,
      period_name: "March",
    },
    {
      id: "88763489",
      period: "2023-04-19",
      create_date: "2023-05-16 10:59:28",
      month: 4,
      slip_type: 1,
      cutoff_from: "2023-03-20",
      cutoff_to: "2023-04-19",
      published_1721vi: false,
      published_1721vii: false,
      period_name: "April",
    },
    {
      id: "88768919",
      period: "2023-05-19",
      create_date: "2023-05-16 11:34:41",
      month: 5,
      slip_type: 1,
      cutoff_from: "2023-04-20",
      cutoff_to: "2023-05-19",
      published_1721vi: false,
      published_1721vii: false,
      period_name: "May",
    },
    {
      id: "94129549",
      period: "2023-06-19",
      create_date: "2023-06-27 15:46:56",
      month: 6,
      slip_type: 1,
      cutoff_from: "2023-05-20",
      cutoff_to: "2023-06-19",
      published_1721vi: false,
      published_1721vii: false,
      period_name: "June",
    },
    {
      id: "95882691",
      period: "2023-07-19",
      create_date: "2023-07-21 13:38:56",
      month: 7,
      slip_type: 1,
      cutoff_from: "2023-06-20",
      cutoff_to: "2023-07-19",
      published_1721vi: false,
      published_1721vii: false,
      period_name: "July",
    },
    {
      id: "100530103",
      period: "2023-08-19",
      create_date: "2023-08-26 18:14:02",
      month: 8,
      slip_type: 1,
      cutoff_from: "2023-07-20",
      cutoff_to: "2023-08-19",
      published_1721vi: false,
      published_1721vii: false,
      period_name: "August",
    },
    {
      id: "102613202",
      period: "2023-09-19",
      create_date: "2023-09-20 14:22:04",
      month: 9,
      slip_type: 1,
      cutoff_from: "2023-08-20",
      cutoff_to: "2023-09-19",
      published_1721vi: false,
      published_1721vii: false,
      period_name: "September",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        <Typography variant="h3">Payslip</Typography>
      </div>

      <div className="flex items-center justify-start w-full flex-col gap-2">
        <Card className="h-fit w-full grid grid-cols-5 shadow-md bg-blue-gray-100 p-4 border">
          <Typography className="font-bold">Month</Typography>
          <Typography className="font-bold">Payroll Cut Off</Typography>
          <div className="col-span-3" />
        </Card>

        {Array.from(dummy || []).map((item: any) => (
          <Card
            key={item.id}
            className="h-fit w-full grid grid-cols-5 items-center shadow-md p-4 py-2 border"
          >
            <Typography>{item.period_name}</Typography>
            <Typography>
              {item.cutoff_from} - {item.cutoff_to}
            </Typography>

            <div className="flex items-center justify-end col-span-3 gap-2 w-full">
              <Button variant="outlined" size="sm">
                Detail
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
