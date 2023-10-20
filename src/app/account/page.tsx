/* eslint-disable @next/next/no-img-element */

"use client";

import { CameraIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Page = () => (
  <div className="w-full">
    <div className="w-full space-y-4 max-w-7xl mx-auto">
      <Typography variant="h3">Setting</Typography>
      <Card className="p-4 w-full">
        <div className="grid grid-cols-3 gap-8 w-full">
          <div className="w-full flex items-center justify-center">
            <div className="w-60 h-60 flex items-center justify-center relative">
              <img
                className="h-60 w-60 rounded-full object-cover object-center"
                src="https://media.licdn.com/dms/image/D5603AQEDb68RQ5wvlw/profile-displayphoto-shrink_800_800/0/1678033571728?e=1702512000&v=beta&t=iQ88nfKuhOcNHkSe9HYbeAMGWCpaUiRspFpkmSUURhI"
                alt="photo profile"
              />
              <div className="absolute bottom-0 right-12 z-10">
                <IconButton size="sm" className="rounded-full">
                  <CameraIcon className="w-5 h-5" color="white" />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-4 w-full">
            <Typography variant="h4" color="blue-gray" className="-mb-3">
              Change Password
            </Typography>
            <form className="w-full">
              <div className="mb-1 flex flex-col gap-4">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Old Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={undefined}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  New Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={undefined}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Confirm new password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={undefined}
                />
              </div>

              <Button className="mt-6" fullWidth>
                Save
              </Button>
            </form>
          </div>
          {/* <div className="col-span-2 space-y-4 w-full">
            <Typography variant="h4" color="blue-gray" className="-mb-3">
              Change Password Payslip PDF
            </Typography>
            <form className="w-full">
              <div className="mb-1 flex flex-col gap-4">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Old Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={undefined}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  New Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={undefined}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Confirm new password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={undefined}
                />
              </div>

              <Button className="mt-6" fullWidth>
                Change Pasword PDF
              </Button>
            </form>
          </div> */}
        </div>
      </Card>
    </div>
  </div>
);

export default Page;
