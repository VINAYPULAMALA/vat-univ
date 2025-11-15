import React from "react";
import { useState } from "react";

interface Step {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

interface StepTimelineProps {
  steps: Step[];
}

interface TestEvidenceTableProps {
  columns: string[];
  data: (string | number)[][];
}

// Step Timeline Component
const StepTimeline: React.FC<StepTimelineProps> = ({ steps }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-orange-600 text-2xl mb-6 font-bold ">
        Note:{" "}
        <span className="text-gray-900">
          Units marked with an *asterisk have one or more prerequisites. Please
          contact <span className="text-orange-600">VAT’s team</span> for more
          information.{" "}
        </span>
      </h1>{" "}
      <ol className="">
        {steps.map((step, index) => {
          const isOpen = openIndex === index;

          return (
            <li key={index} className="mb-5 relative">
              {/* Timeline Icon */}
              {/* <span className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg">
          {step.icon}
        </span> */}

              {/* Accordion Box */}
              <div className="p-4 bg-white rounded-xl shadow-md border border-gray-100">
                {/* Clickable Title */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    {step.title}
                  </h3>

                  {/* Arrow */}
                  <span className="text-orange-600 text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "max-h-[500px] opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-gray-700 text-sm space-y-2">
                    {step.content}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

// Test Evidence Table Component (named export)
export const TestEvidenceTable: React.FC<TestEvidenceTableProps> = ({
  columns,
  data,
}) => {
  return (
    <>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md bg-white my-8">
        <table className="min-w-full table-auto">
          <thead className="bg-orange-50 border-b border-gray-200">
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-700"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={`transition-colors duration-200 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-orange-50`}
              >
                {row.map((cell, i) => (
                  <td key={i} className="px-4 py-3 text-sm text-gray-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StepTimeline;
