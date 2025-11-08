import React, { useState, ReactNode } from "react";
import Accordion from "./Accordion";

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionGroupProps {
  items: AccordionItem[];
  color?: "orange" | "amber" | "blue" | "green";
  defaultOpenIndex?: number | null;
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({
  items,
  color = "orange",
  defaultOpenIndex = null,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="divide-y divide-gray-200 rounded-lg shadow-md bg-white overflow-hidden">
      {items.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={item.content}
          color={color}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
