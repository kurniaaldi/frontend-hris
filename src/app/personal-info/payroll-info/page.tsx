"use client";

import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";

const Pages = () => (
  <div className="space-y-4">
    <div className="flex flex-col">
      <Typography variant="h3">Payroll info</Typography>
    </div>
    <div className="w-full flex items-center justify-end">
      <Button variant="outlined" className="normal-case">
        Request Change Data
      </Button>
    </div>
    <div className="w-full grid grid-cols-2 gap-4">
      <div className="flex items-start justify-start flex-col w-full gap-2">
        <Typography>BPJS Ketenagakerjaan</Typography>
        <Input
          variant="outlined"
          label="BPJS Ketenagakerjaan"
          name="bpjstk"
          crossOrigin={undefined}
        />
      </div>
      <div className="flex items-start justify-start flex-col w-full gap-2">
        <Typography>BPJS Kesehatan</Typography>
        <Input
          variant="outlined"
          label="BPJS Kesehatan"
          name="bpjstk"
          crossOrigin={undefined}
        />
      </div>
      <div className="flex items-start justify-start flex-col w-full gap-2">
        <Typography>NPWP</Typography>
        <Input
          variant="outlined"
          label="NPWP"
          name="bpjstk"
          crossOrigin={undefined}
        />
      </div>
      <div className="flex items-start justify-start flex-col w-full gap-2">
        <Typography>Bank Name</Typography>
        <Input
          variant="outlined"
          label="Bank Name"
          name="bpjstk"
          crossOrigin={undefined}
        />
      </div>
      <div className="flex items-start justify-start flex-col w-full gap-2">
        <Typography>Bank Account</Typography>
        <Input
          variant="outlined"
          label="Bank Account"
          name="bpjstk"
          crossOrigin={undefined}
        />
      </div>
      <div className="flex items-start justify-start flex-col w-full gap-2">
        <Typography>Bank Account Holder</Typography>
        <Input
          variant="outlined"
          label="Bank Account Holder"
          name="bpjstk"
          crossOrigin={undefined}
        />
      </div>
      <div className="flex items-start justify-start flex-col w-full gap-2">
        <Typography>PTKP Status</Typography>
        <Input
          variant="outlined"
          label="PTKP Status"
          name="bpjstk"
          crossOrigin={undefined}
        />
      </div>
    </div>
  </div>
);

export default Pages;
