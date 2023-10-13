/* eslint-disable @next/next/no-img-element */
import { CameraIcon } from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";
import React from "react";

const PhotoProfile = () => (
  <div className="w-full flex flex-col items-center justify-center gap-2">
    <div className="relative h-32 w-32">
      <img
        className="h-32 w-32 rounded-full object-cover object-center"
        src="https://media.licdn.com/dms/image/D5603AQEDb68RQ5wvlw/profile-displayphoto-shrink_800_800/0/1678033571728?e=1702512000&v=beta&t=iQ88nfKuhOcNHkSe9HYbeAMGWCpaUiRspFpkmSUURhI"
        alt="photo profile"
      />
      <div className="absolute bottom-0 right-4 z-10">
        <IconButton size="sm" className="rounded-full">
          <CameraIcon className="w-5 h-5" color="white" />
        </IconButton>
      </div>
    </div>
    <div className="flex items-center justify-center flex-col mb-4">
      <Typography variant="lead">Reza Sofyan</Typography>
      <Typography variant="small">Software Lead (HO)</Typography>
    </div>
  </div>
);

export default PhotoProfile;
