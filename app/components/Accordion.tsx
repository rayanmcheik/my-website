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
    <div className="flex flex-col items-center justify-center max-w-2xl px-4 mx-auto w-fit sm:px-6 lg:px-8">
      {items.map((item) => (
        <Accordion
          key={item.id}
          open={open === item.id}
          animate={CUSTOM_ANIMATION}
        >
          <AccordionHeader
            onClick={() => handleOpen(item.id)}
            className="flex items-center justify-between w-full text-lg text-left text-black transition border-t-1 border-b-gray-500 hover:text-gray-700"
          >
            <span className="flex-1 pt-3 pb-2 text-left">{item.title}</span>
            <span className="ml-4 text-sm text-neutral-600/70">
              {open === item.id ? (
                <img src="/topArrow.svg" alt="arrow up" className="inline w-4 h-4" />
              ) : (
                <img src="/downArrow.svg" alt="arrow down" className="inline w-4 h-4" />
              )}
            </span>
          </AccordionHeader>

          <AccordionBody className="pt-5 pb-3 leading-relaxed text-left text-black sm:text-left">
            {item.content}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
