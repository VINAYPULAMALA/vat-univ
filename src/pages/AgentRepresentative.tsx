import React from "react";
import About from "../components/About";

const aboutSections = [
  {
    title: "Join us as an Education Agent Representative",
    description: [
      `We’re always eager to build partnerships with new representatives. 
      To apply for authorisation as an Education agent with us, kindly fill out the Education agent application form below and include the following documents:
      - 1 .A copy of your business registration certificate.
      - 2.A brief profile of your agency, including details of your experience in student recruitment and any relevant affiliations.
      - 3.References from at least two educational institutions you currently represent (if applicable).`,
      "Once we receive your application and supporting documents, our team will review them and get back to you within 10 business days. If your application is successful, we will provide you with further information on the next steps to become an authorised Education agent representative for VAT University.",
      "We look forward to the possibility of working together to help students achieve their educational goals in Australia.",
    ],
    buttonText: "View Form",
    href: "https://www.vat.vic.edu.au/wp-content/uploads/2025/07/Agent-application-form-V3.0.pdf",
    imageUrl:
      "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
    stats: [],
  },
];

const Agent = () => {
  return (
    <>
      {aboutSections.map((section, index) => (
        <About
          key={index}
          {...section}
          index={index}
        />
      ))}
    </>
  );
};

export default Agent;
