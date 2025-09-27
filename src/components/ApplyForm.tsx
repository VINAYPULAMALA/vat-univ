import React, { useState } from "react";
import StepTimeline from "./StepTimelineWithIcons";
import { X, Search, Info, ChevronRight } from "lucide-react";

interface CourseInfo {
  code: string;
  title: string;
  provider: string;
  rtoNumber: string;
  cricos: string;
  abn: string;
}

interface CourseDetail {
  label: string;
  value?: string;
  isLink?: boolean;
  linkText?: string;
  link?: string;
}

interface Unit {
  no: number;
  unitCode: string;
  unitTitle: string;
  type: "C" | "E";
}
interface Step {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

interface ApplyFormProps {
  courseInfo: CourseInfo;
  courseDetails: CourseDetail[];
  description: string;
  smallDescription?: string;
  onClose?: () => void;
  isModal?: boolean;
  units: Unit[];
  courseRequirementSteps: Step[];
}

const ApplyForm: React.FC<ApplyFormProps> = ({
  courseInfo,
  courseDetails,
  description,
  smallDescription,
  onClose,
  isModal = false,
  units,
  courseRequirementSteps,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    citizenship: "",
    previousEducation: "",
    employmentStatus: "",
    additionalInfo: "",
  });

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"core" | "elective">("core");
  const [showAll, setShowAll] = useState(false);

  // filter units based on active tab
  const filteredUnits = units.filter((unit) =>
    activeTab === "core" ? unit.type === "C" : unit.type === "E"
  );

  // show only 5 unless showAll is true
  const visibleUnits = showAll ? filteredUnits : filteredUnits.slice(0, 5);

  const content = (
    <div
      className={`bg-white ${
        isModal
          ? "rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          : ""
      }`}
    >
      {/* Header for modal */}
      {isModal && onClose && (
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center rounded-t-2xl z-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Course Application
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
        {/* Left Side - Course Information */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 lg:p-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-300 rounded-full opacity-20 -ml-24 -mb-24"></div>

          <div className="relative">
            <div className="flex items-center mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg transform -rotate-3">
                <Search className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Find out more about the{" "}
                  <span className="text-orange-600">{courseInfo.title}</span>
                </h1>
              </div>
            </div>

            <div className="mb-10 bg-white bg-opacity-70 p-6 rounded-2xl shadow-sm backdrop-blur-sm">
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>

            <div className="mb-10 bg-white bg-opacity-70 p-6 rounded-2xl shadow-sm backdrop-blur-sm">
              <h5 className="text-orange-600">Course Structure</h5>
              <p className="text-gray-700 leading-relaxed">
                {smallDescription}
              </p>
            </div>

            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 transform hover:-translate-y-1">
              <span>ENQUIRE NOW</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Side - Course Details */}
        <div className="p-8 lg:p-12 bg-white">
          <div className="mb-10">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-3">
              {courseInfo.code}
            </div>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              {courseInfo.title}
            </h2>
            <p className="text-sm text-gray-600 mb-8 border-l-4 border-orange-200 pl-4 italic">
              This course is delivered by {courseInfo.provider} | RTO No.{" "}
              {courseInfo.rtoNumber} | CRICOS Provider Code: {courseInfo.cricos}{" "}
              | ABN: {courseInfo.abn}
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center">
              <Info className="w-5 h-5 mr-2 text-orange-500" />
              Course Information
            </h3>

            <div className="space-y-5 mb-10">
              {courseDetails.map((detail, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-2 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  <div className="border-l-2 border-orange-300 font-semibold pl-2 text-gray-900">
                    {detail.label}
                  </div>
                  <div className="sm:col-span-2 text-gray-700">
                    {detail.isLink && detail.link ? (
                      <span>
                        {detail.value ? detail.value.split("(")[0] : ""}
                        <a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:text-orange-700 font-medium hover:underline transition-all"
                        >
                          {detail.linkText ||
                            detail.value?.match(/\((.*?)\)/)?.[1] ||
                            "Click here"}
                        </a>
                        {detail.value &&
                          detail.value.includes(")") &&
                          detail.value.split(")")[1]}
                      </span>
                    ) : (
                      detail.value
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 mb-10 flex items-center justify-center space-x-2">
              <span>APPLY NOW</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs for Units */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => {
              setActiveTab("core");
              setShowAll(false);
            }}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all shadow-sm ${
              activeTab === "core"
                ? "bg-orange-600 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Core Units
          </button>
          <button
            onClick={() => {
              setActiveTab("elective");
              setShowAll(false);
            }}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all shadow-sm ${
              activeTab === "elective"
                ? "bg-orange-600 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Elective Units
          </button>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl shadow-md border border-gray-200 bg-white">
          <table className="min-w-full table-auto">
            <thead className="bg-orange-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-700">
                  No
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-700">
                  Unit Code
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-700">
                  Unit Title
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {visibleUnits.length > 0 ? (
                visibleUnits.map((unit, idx) => (
                  <tr
                    key={unit.no}
                    className={`transition-colors duration-200 ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-orange-50`}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {unit.no}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {unit.unitCode}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {unit.unitTitle}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-8 text-center text-gray-500 text-lg"
                  >
                    No {activeTab} units available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Show More / Show Less */}
        {filteredUnits.length > 5 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-orange-600 text-white rounded-full font-semibold shadow-md hover:bg-orange-700 transition-transform transform hover:-translate-y-1"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
      {/* Step Timeline for Course Requirements */}
      <StepTimeline steps={courseRequirementSteps} />
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        {content}
      </div>
    );
  }

  return content;
};

export default ApplyForm;
