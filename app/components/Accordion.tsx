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
  const [open, setOpen] = React.useState<number | null>(null);

  const handleOpen = (value: number) => setOpen(open === value ? null : value);

  const items = [
    {
      id: 1,
      title: "The Legacy of Mercedes-Benz",
      content:
        "Founded in 1926, Mercedes-Benz pioneered the automobile industry with innovation, luxury, and craftsmanship. Its iconic three-pointed star represents mobility on land, sea, and air — a vision that still drives the brand today.",
    },
    {
      id: 2,
      title: "Design & Craftsmanship",
      content:
        "Mercedes design blends elegance with performance. Every curve, line, and interior detail reflects precision and innovation — from the iconic S-Class to the rugged G-Class.",
    },
    {
      id: 3,
      title: "Power & Performance",
      content:
        "AMG performance models redefine speed and control. Handcrafted engines, precision handling, and dynamic power deliver the “One Man, One Engine” philosophy of Mercedes-AMG.",
    },
    {
      id: 4,
      title: "Innovation & Technology",
      content:
        "From MBUX voice control to advanced driver assistance and electric EQ models, Mercedes-Benz leads the future of smart, sustainable, and connected mobility.",
    },
  ];

  return (
    <div className=" w-fit max-w-2xl mx-auto px-4 md:ml-5 sm:px-6 lg:px-8">
      {items.map((item) => (
        <Accordion
          key={item.id}
          open={open === item.id}
          animate={CUSTOM_ANIMATION}
        >
          <AccordionHeader
            onClick={() => handleOpen(item.id)}
            className="flex  border-t-1 border-b-gray-500 justify-between items-center w-full text-lg text-black hover:text-gray-700 transition text-left"
          >
            <span className="flex-1 text-left pt-3 pb-3">{item.title}</span>
            <span className="ml-4  text-sm text-neutral-600/70">
              {open === item.id ? "∧" : "∨"}
            </span>
          </AccordionHeader>

          <AccordionBody className="text-black leading-relaxed text-center sm:text-left pt-5 pb-3">
            {item.content}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
