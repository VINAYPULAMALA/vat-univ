import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionProps {
  title: string;
  content: React.ReactNode;
  color?: "orange" | "amber" | "blue" | "green";
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isOpen,
  onToggle,
  color = "orange",
}) => {
  const colorMap: Record<string, string> = {
    orange: "text-orange-600",
    amber: "text-amber-500",
    blue: "text-blue-600",
    green: "text-green-600",
  };

  return (
    <div className="transition-all duration-300 bg-white hover:shadow-md">
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-300"
      >
        <span
          className={`font-medium text-gray-900 pr-4 text-base sm:text-lg transition-all duration-300 ${
            isOpen ? colorMap[color] : "text-gray-900"
          }`}
        >
          {title}
        </span>

        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? (
            <ChevronUp className={`w-5 h-5 ${colorMap[color]}`} />
          ) : (
            <ChevronDown className={`w-5 h-5 ${colorMap[color]}`} />
          )}
        </span>
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base animate-fade-in">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
