import React from "react";
import { FileText, FolderOpen, FileDown, FileSpreadsheet, Link } from "lucide-react";
import AccordionGroup from "../components/AccordionGroup";

const DocumentsPage: React.FC = () => {
  // 🟧 VAT Forms
  const vatForms = [
    {
      title: "Application Form",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Application-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileDown className="w-4 h-4" /> Download Application Form
        </Link>
      ),
    },
    {
      title: "Complaints and Appeals Form",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Complaints-and-Appeals-Feedback-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileDown className="w-4 h-4" /> Download Complaints and Appeals Form
        </Link>
      ),
    },
    {
      title: " Credit Transfer Application Form ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Credit-Transfer-Application-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileDown className="w-4 h-4" /> Download  Credit Transfer Application Form 
        </Link>
      ),
    },
    {
      title: " Critical Incident Form ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Critical-Incident-Report-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download Critical Incident Form
        </Link>
      ),
    },
     {
      title: "  Student Support Request Form   ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Student-Support-Referral-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download  Student Support Request Form  
        </Link>
      ),
    },
     {
      title: "   Fee Extension Request Form   ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Refund-Request-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download   Fee Extension Request Form 
        </Link>
      ),
    },
    {
      title: "   RPL Application Form   ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/11/RPL-APPLICATION-FORM-V1.0.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download  RPL Application Form
        </Link>
      ),
    },
    {
      title: "   Student Request Form   ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/11/Student-Request-Form-V1.0.pdfs"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download  Student Refund Request Form
        </Link>
      ),
    },
    {
      title: "   Suggestion Form    ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Feedback-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download   Suggestion Form  
        </Link>
      ),
    },
    {
      title: "   Deferral, Suspension, Cancellation of Enrolment or ECOE Change Form   ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/11/DEFERAL-SUSPENSION-CANCELLATION-OF-ENROLMENT-OR-ECOE-CHANGE-FORM-V1.0.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download   Deferral, Suspension, Cancellation of Enrolment or ECOE Change Form 
        </Link>
      ),
    },
    {
      title: " Student Refund Request Form  ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Refund-Request-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download   Student Refund Request Form
        </Link>
      ),
    },
  ];

  // 🟦
  //  Agent Documents
  const agentDocuments = [
    {
      title: "Education Agent Application Form",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Agent-application-form-V3.0.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download Agent Application Form
        </Link>
      ),
    },
    {
      title: "Policy and Procedure Manual",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/VATS-Policy-and-Procedure-MANUAL-1.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> View Policy and Procedure Manual
        </Link>
      ),
    },
  ];

  // 🟩 VAT Policies
  const vatPolicies = [
    {
      title: "Deferral, Suspension or Cancellation of Student Policy",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Deferral-Suspension-or-Cancellation-Request-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download Deferral, Suspension or Cancellation of Student Policy
        </Link>
      ),
    },
    {
      title: " Fees, charges and refunds policy and procedure ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Fees-charges-and-refunds-policy-and-procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Fees, charges and refunds policy and procedure 
        </Link>
      ),
    },
    {
      title: " Monitoring Student Attendance Policy ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Monitoring-Student-Attendance-Policy.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download Monitoring Student Attendance Policy
        </Link>
      ),
    },
    {
      title: "  Plagiarism and Cheating Policy and Procedure  ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Plagiarism-and-Cheating-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Plagiarism and Cheating Policy and Procedure 
        </Link>
      ),
    },
    {
      title: "  Student Support & Welfare Services Policy and Procedure  ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Student-Support-Welfare-Services-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Student Support & Welfare Services Policy and Procedure 
        </Link>
      ),
    },
    {
      title: "  Student Progress and Course Progress Policy & Procedure  ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Student-Progress-and-Course-Progress-Policy-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Student Progress and Course Progress Policy & Procedure 
        </Link>
      ),
    },
    {
      title: "  Access and Equity Policy and Procedure  ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Access-and-Equity-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Access and Equity Policy and Procedure 
        </Link>
      ),
    },
    {
      title: "  Access Policy and Procedure  ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Assessment-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Access Policy and Procedure 
        </Link>
      ),
    },
    {
      title: "  Complaints and Appeals Policy and Procedure  ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Complaints-and-Appeals-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Complaints and Appeals Policy and Procedure 
        </Link>
      ),
    },
    {
      title: "  Course Credit Policy and Procedure  ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Course-Credit-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Course Credit Policy and Procedure 
        </Link>
      ),
    },
    {
      title: "  Critical Incidents Policy and Procedure  ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Critical-Incidents-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Critical Incidents Policy and Procedure 
        </Link>
      ),
    },
    {
      title: "  Recognition of Prior Learning (RPL) Policy and Procedure  ",
      content: (
        <Link
          to="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Recognition-of-Prior-Learning-RPL-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Recognition of Prior Learning (RPL) Policy and Procedure 
        </Link>
      ),
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🌟 Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-red-500 bg-clip-text text-transparent mb-6">
            VAT Document Centre
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Access and download all important forms, policies, and documents
            related to your academic and administrative needs at VAT University.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 🧾 VAT FORMS */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <FolderOpen className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              VAT FORMS
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 p-4">
            <AccordionGroup items={vatForms} color="orange" />
          </div>
        </div>

        {/* 🧾 AGENT DOCUMENTS */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <FolderOpen className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              AGENT DOCUMENTS
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 p-4">
            <AccordionGroup items={agentDocuments} color="blue" />
          </div>
        </div>

        {/* 🧾 VAT POLICIES */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <FolderOpen className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              VAT POLICIES
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 p-4">
            <AccordionGroup items={vatPolicies} color="green" />
          </div>
        </div>

        {/* 📞 Contact CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-600 mb-4 text-lg">
            Still need assistance? Our team is here to help.
          </p>
          <button className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
            Contact Support Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default DocumentsPage;
