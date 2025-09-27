import React from "react";

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
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h1 className="text-orange-600 text-2xl py-12 font-bold ">
        Note:{" "}
        <span className="text-gray-900">
          Units marked with an *asterisk have one or more prerequisites. Please
          contact <span className="text-orange-600">VAT’s team</span> for more
          information.{" "}
        </span>
      </h1>{" "}
      <ol className="relative border-l-2 border-orange-300">
        {steps.map((step, index) => (
          <li key={index} className="mb-10 ml-8">
            <span className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg">
              {step.icon}
            </span>
            <div className="p-5 bg-white rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                {step.title}
              </h3>
              <div className="text-gray-700 text-sm space-y-2">
                {step.content}
              </div>
            </div>
          </li>
        ))}
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
