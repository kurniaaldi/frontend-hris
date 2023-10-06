"use client";

import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded flex items-center justify-start flex-col shadow gap-8">
        <Typography className="w-full text-center text-xl">Sign In</Typography>
        <div className="flex items-start justify-center flex-col gap-4 w-full">
          <div className="flex items-center justify-start flex-col w-full gap-2">
            <Typography className="w-full text-base">Email</Typography>
            <Input label="Email" type="email" color="black" crossOrigin={""} />
          </div>
          <div className="flex items-center justify-start flex-col w-full gap-2">
            <Typography className="w-full text-base">Password</Typography>
            <Input
              label="Password"
              type="password"
              color="black"
              crossOrigin={""}
            />
          </div>
        </div>
        <Button fullWidth>Signin</Button>
        <div className="w-full flex items-center justify-center">
          <hr className="w-full" />
          <Typography color="gray" className="w-full text-center">
            Atau
          </Typography>
          <hr className="w-full" />
        </div>
        <Button variant="outlined" fullWidth>
          Sign in Google
        </Button>
        <Button variant="outlined" fullWidth>
          Sign in ID Karyawan
        </Button>
        <Button variant="outlined" fullWidth>
          Sign in Nomor Telepon
        </Button>
      </div>
    </div>
  );
};

export default Page;
