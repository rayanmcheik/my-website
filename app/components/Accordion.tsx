import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export function DefaultAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8">
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="flex justify-center items-center w-full text-center text-lg text-black hover:text-gray-700 transition"
        >
          The Legacy of Mercedes-Benz !
        </AccordionHeader>
        <AccordionBody className="text-black leading-relaxed mx-auto max-w-6xl text-center sm:text-left">
          Founded in 1926, Mercedes-Benz pioneered the automobile industry with innovation,
          luxury, and craftsmanship. Its iconic three-pointed star represents mobility on
          land, sea, and air — a vision that still drives the brand today.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="flex justify-center items-center w-full text-center text-lg text-black hover:text-gray-700 transition"
        >
          Design & Craftsmanship !
        </AccordionHeader>
        <AccordionBody className="text-black leading-relaxed mx-auto max-w-6xl text-center sm:text-left">
          Mercedes design blends elegance with performance. Every curve, line, and interior
          detail reflects precision and innovation — from the iconic S-Class to the rugged G-Class.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="flex justify-center items-center w-full text-center text-lg text-black hover:text-gray-700 transition"
        >
          Power & Performance !
        </AccordionHeader>
        <AccordionBody className="text-black leading-relaxed mx-auto max-w-6xl text-center sm:text-left">
          AMG performance models redefine speed and control. Handcrafted engines, precision
          handling, and dynamic power deliver the “One Man, One Engine” philosophy of Mercedes-AMG.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="flex justify-center items-center w-full text-center text-lg text-black hover:text-gray-700 transition"
        >
          Innovation & Technology !
        </AccordionHeader>
        <AccordionBody className="text-black leading-relaxed mx-auto max-w-6xl text-center sm:text-left">
          From MBUX voice control to advanced driver assistance and electric EQ models,
          Mercedes-Benz leads the future of smart, sustainable, and connected mobility.
        </AccordionBody>
      </Accordion>
    </div>
  );
}
