import React from "react";
import { FileText, FolderOpen, FileDown, FileSpreadsheet, Link } from "lucide-react";
import AccordionGroup from "../components/AccordionGroup";

const DocumentsPage: React.FC = () => {
  // 🟧 VAT Forms
  const vatForms = [
    {
      title: "Application Form",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Application-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileDown className="w-4 h-4" /> Download Application Form
        </a>
      ),
    },
    {
      title: "Complaints and Appeals Form",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Complaints-and-Appeals-Feedback-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileDown className="w-4 h-4" /> Download Complaints and Appeals Form
        </a>
      ),
    },
    {
      title: " Credit Transfer Application Form ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Credit-Transfer-Application-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileDown className="w-4 h-4" /> Download  Credit Transfer Application Form 
        </a>
      ),
    },
    {
      title: " Critical Incident Form ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Critical-Incident-Report-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download Critical Incident Form
        </a>
      ),
    },
     {
      title: "  Student Support Request Form   ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Student-Support-Referral-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download  Student Support Request Form  
        </a>
      ),
    },
     {
      title: "   Fee Extension Request Form   ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Refund-Request-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download   Fee Extension Request Form 
        </a>
      ),
    },
    {
      title: "   RPL Application Form   ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/11/RPL-APPLICATION-FORM-V1.0.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download  RPL Application Form
        </a>
      ),
    },
    {
      title: "   Student Request Form   ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/11/Student-Request-Form-V1.0.pdfs"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download  Student Refund Request Form
        </a>
      ),
    },
    {
      title: "   Suggestion Form    ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Feedback-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download   Suggestion Form  
        </a>
      ),
    },
    {
      title: "   Deferral, Suspension, Cancellation of Enrolment or ECOE Change Form   ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/11/DEFERAL-SUSPENSION-CANCELLATION-OF-ENROLMENT-OR-ECOE-CHANGE-FORM-V1.0.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download   Deferral, Suspension, Cancellation of Enrolment or ECOE Change Form 
        </a>
      ),
    },
    {
      title: " Student Refund Request Form  ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Refund-Request-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" /> Download   Student Refund Request Form
        </a>
      ),
    },
  ];

  // 🟦
  //  Agent Documents
  const agentDocuments = [
    {
      title: "Education Agent Application Form",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Agent-application-form-V3.0.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download Agent Application Form
        </a>
      ),
    },
    {
      title: "Policy and Procedure Manual",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/VATS-Policy-and-Procedure-MANUAL-1.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> View Policy and Procedure Manual
        </a>
      ),
    },
  ];

  // 🟩 VAT Policies
  const vatPolicies = [
    {
      title: "Deferral, Suspension or Cancellation of Student Policy",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Deferral-Suspension-or-Cancellation-Request-Form.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download Deferral, Suspension or Cancellation of Student Policy
        </a>
      ),
    },
    {
      title: " Fees, charges and refunds policy and procedure ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Fees-charges-and-refunds-policy-and-procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Fees, charges and refunds policy and procedure 
        </a>
      ),
    },
    {
      title: " Monitoring Student Attendance Policy ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Monitoring-Student-Attendance-Policy.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download Monitoring Student Attendance Policy
        </a>
      ),
    },
    {
      title: "  Plagiarism and Cheating Policy and Procedure  ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Plagiarism-and-Cheating-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Plagiarism and Cheating Policy and Procedure 
        </a>
      ),
    },
    {
      title: "  Student Support & Welfare Services Policy and Procedure  ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Student-Support-Welfare-Services-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Student Support & Welfare Services Policy and Procedure 
        </a>
      ),
    },
    {
      title: "  Student Progress and Course Progress Policy & Procedure  ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Student-Progress-and-Course-Progress-Policy-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Student Progress and Course Progress Policy & Procedure 
        </a>
      ),
    },
    {
      title: "  Access and Equity Policy and Procedure  ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Access-and-Equity-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Access and Equity Policy and Procedure 
        </a>
      ),
    },
    {
      title: "  Access Policy and Procedure  ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Assessment-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Access Policy and Procedure 
        </a>
      ),
    },
    {
      title: "  Complaints and Appeals Policy and Procedure  ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Complaints-and-Appeals-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Complaints and Appeals Policy and Procedure 
        </a>
      ),
    },
    {
      title: "  Course Credit Policy and Procedure  ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Course-Credit-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Course Credit Policy and Procedure 
        </a>
      ),
    },
    {
      title: "  Critical Incidents Policy and Procedure  ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Critical-Incidents-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Critical Incidents Policy and Procedure 
        </a>
      ),
    },
    {
      title: "  Recognition of Prior Learning (RPL) Policy and Procedure  ",
      content: (
        <a
          href="https://www.vat.vic.edu.au/wp-content/uploads/2024/12/Recognition-of-Prior-Learning-RPL-Policy-and-Procedure.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          <FileText className="w-4 h-4" /> Download  Recognition of Prior Learning (RPL) Policy and Procedure 
        </a>
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
