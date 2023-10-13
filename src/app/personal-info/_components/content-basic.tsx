import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TabPanel, Typography, Button } from "@material-tailwind/react";
import React from "react";

const ContentBasic = ({ value }: any) => (
  <TabPanel key={value} value={value}>
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-3">
        <Typography>Personal data</Typography>
        <Typography variant="small">
          Your email address is your identity on Talenta is used to log in.
        </Typography>
      </div>
      <div className="col-span-7 grid grid-cols-3 gap-2">
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            Full name
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">Reza Sofyan</Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            Mobile phone
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">+62 852-1091-4854</Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            Email
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">reza.reza@paramatech.id</Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            Phone
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">+62 852-1091-4854</Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            Place of birth
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">banten</Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            Birthdate
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small"> 1 okt 1989 33 years old</Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            Gender
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">Male</Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            Marital status
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">PK</Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            Blood type
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">O</Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            Religion
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">Islam</Typography>
        </div>
      </div>
      <div className="col-span-2 flex items-start justify-start">
        <Button
          variant="outlined"
          size="sm"
          className="flex items-center justify-center gap-2"
        >
          <PencilSquareIcon className="w-4 h-4" /> Edit
        </Button>
      </div>
      <hr className="col-span-12" />
      <div className="col-span-3">
        <Typography>Identity & Address</Typography>
      </div>
      <div className="col-span-7 grid grid-cols-3 gap-2">
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            ID type
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">KTP</Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            ID number
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">3201071606940006</Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            ID expiration date
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">Permanent</Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            Postal code
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">16821</Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            Citizen ID address
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">
            Griya Alam Sentosa N 18/16 RT/RW 09/10 Kel. Pasirangin Kec.
            Cileungsi Kab. Bogor
          </Typography>
        </div>
        <div className="col-span-1">
          <Typography variant="small" className="font-semibold">
            Residential address
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="small">
            Perum Griya Alam Sentosa, Blok N 8 No. 1, RT. 007 RW. 010, Kel.
            Pasirangin, Kec. Cileungsi, Kab. Bogor, Prov. Jawa Barat
          </Typography>
        </div>
      </div>
      <div className="col-span-2 flex items-start justify-start">
        <Button
          variant="outlined"
          size="sm"
          className="flex items-center justify-center gap-2"
        >
          <PencilSquareIcon className="w-4 h-4" /> Edit
        </Button>
      </div>
    </div>
  </TabPanel>
);

export default ContentBasic;
