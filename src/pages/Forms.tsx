import React from "react";
import FAQ from "../components/FAQ";

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Your page content */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold text-orange-600">Admissions</h1>
        <p className="text-gray-600 mt-2">
          Everything you need to know before applying
        </p>
      </section>

      {/* 👇 Here’s your reusable FAQ */}
      <FAQ />
    </div>
  );
};

export default AdmissionsPage;
