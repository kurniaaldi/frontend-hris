"use client";

import { Button, Card, Textarea, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

import { useDate } from "@/utils/constant";

const Page = () => {
  const { time, fullDate } = useDate();

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex items-start justify-start flex-col gap-8 w-full max-w-screen-2xl">
        <Card className="w-full rounded flex items-center justify-center flex-col p-8 gap-4">
          <Typography variant="h4" className="text-left w-full">
            Live Attendance
          </Typography>
          <Card className="shadow w-full max-w-lg rounded flex items-center justify-center flex-col gap-4">
            <div className="p-8 space-y-4">
              <Typography className="text-center" variant="lead">
                {time}
              </Typography>
              <Typography className="text-center" variant="small">
                {fullDate}
              </Typography>
            </div>
            <hr className="w-full" />
            <div className="p-8 space-y-4 w-full">
              <div className="flex flex-col items-center justify-center">
                <Typography className="text-center" variant="small">
                  Schedule {fullDate}
                </Typography>
                <Typography className="text-center" variant="paragraph">
                  N
                </Typography>
                <Typography className="text-center" variant="lead">
                  09:00 AM - 05:30 PM
                </Typography>
                <Typography className="text-center" variant="small">
                  {fullDate}
                </Typography>
              </div>
              <Textarea label="Message" className="w-full" />
              <div className="flex items-center justify-between w-full gap-6">
                <Button fullWidth>Clock In</Button>
                <Button fullWidth>Clock Out</Button>
              </div>
            </div>
          </Card>
          <div className="w-full max-w-lg rounded flex items-start justify-start flex-col gap-4 py-4">
            <Typography variant="h4">Attendance log</Typography>
            <div className="flex items-center justify-between w-full border p-2 rounded">
              <div className="flex items-start justify-start gap-8">
                <div className="flex flex-col items-start justify-start">
                  <Typography>10:04 AM</Typography>
                  <Typography variant="small">11 Oct</Typography>
                </div>
                <Typography>Clock In</Typography>
              </div>
              <Button variant="text" color="blue">
                Detail
              </Button>
            </div>
            <div className="flex items-center justify-center flex-col w-full gap-2">
              <div className="relative overflow-hidden h-80 w-80">
                <Image
                  src={"/images/attendance.jpg"}
                  alt={"work.png"}
                  objectFit="fill"
                  fill
                />
              </div>
              <Typography>No attendance log today</Typography>
              <Typography>
                Your Clock In/Out activity will show up here.
              </Typography>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Page;
