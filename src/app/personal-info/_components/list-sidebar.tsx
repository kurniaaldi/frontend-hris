import {
  ChevronDownIcon,
  UserIcon,
  ClockIcon,
  CreditCardIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import {
  List,
  Accordion,
  ListItem,
  AccordionHeader,
  ListItemPrefix,
  Typography,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const ListSideBar = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <List>
      <Accordion
        open={open === 1}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${
              open === 1 ? "rotate-180" : ""
            }`}
          />
        }
      >
        <ListItem className="p-0" selected={open === 1}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="border-b-0 p-3"
          >
            <ListItemPrefix>
              <UserIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="mr-auto font-normal">
              General
            </Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="pl-4">
            <Link href="/personal-info/profile">
              <ListItem>Personal</ListItem>
            </Link>
            <Link href="/personal-info/employment">
              <ListItem>Employment</ListItem>
            </Link>
            <ListItem>Education & Experience</ListItem>
            <ListItem>Additional info</ListItem>
          </List>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${
              open === 2 ? "rotate-180" : ""
            }`}
          />
        }
      >
        <ListItem className="p-0" selected={open === 2}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="border-b-0 p-3"
          >
            <ListItemPrefix>
              <ClockIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="mr-auto font-normal">
              Time Management
            </Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="pl-4">
            <ListItem>Attendance</ListItem>
            <ListItem>Timeoff</ListItem>
            <ListItem>Overtime</ListItem>
          </List>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${
              open === 3 ? "rotate-180" : ""
            }`}
          />
        }
      >
        <ListItem className="p-0" selected={open === 3}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="border-b-0 p-3"
          >
            <ListItemPrefix>
              <CreditCardIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="mr-auto font-normal">
              Payroll
            </Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="pl-4">
            <ListItem>Payroll Info</ListItem>
            <ListItem>Payslip</ListItem>
          </List>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${
              open === 4 ? "rotate-180" : ""
            }`}
          />
        }
      >
        <ListItem className="p-0" selected={open === 4}>
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="border-b-0 p-3"
          >
            <ListItemPrefix>
              <BanknotesIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="mr-auto font-normal">
              Finance
            </Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="pl-4">
            <ListItem>Reimbursement</ListItem>
            <ListItem>Loan</ListItem>
            <ListItem>Cash Advance</ListItem>
          </List>
        </AccordionBody>
      </Accordion>
    </List>
  );
};

export default ListSideBar;
