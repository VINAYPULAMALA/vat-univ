import React from "react";
import { Sparkles, Camera } from "lucide-react";
import AccordionGroup from "./AccordionGroup";

const FAQ: React.FC = () => {
  const faqCategories = [
    {
      title: "Admissions",
      questions: [
        {
          question: "What are the admission requirements?",
          answer:
            "You’ll need a high school diploma or equivalent and may need to meet program-specific prerequisites.",
        },
        {
          question: "When are the application deadlines?",
          answer:
            "Semester 1 (February) applications close in December, and Semester 2 (July) applications close in May.",
        },
      ],
    },
    {
      title: "Academic Life",
      questions: [
        {
          question: "Are online courses available?",
          answer:
            "Yes, we offer both online and hybrid learning options with access to digital labs and real-time collaboration tools.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 relative group">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-orange-400" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-600 bg-clip-text text-transparent relative inline-block">
              Frequently Asked Questions
            </h2>
            <Sparkles className="w-8 h-8 text-amber-400" />
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 mb-4 font-medium">
              <Camera className="inline-block w-6 h-6 text-orange-500 mr-2 -mt-1" />
              Find answers to common questions about{" "}
              <span className="font-semibold text-orange-600">
                VAT University
              </span>
            </p>
          </div>
        </div>

        {/* FAQ Categories */}
        {faqCategories.map((category, index) => (
          <div key={index} className="mb-10">
            <div className="bg-orange-600 text-white px-6 py-4 rounded-t-lg shadow-sm">
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>

            <AccordionGroup
              items={category.questions.map((q) => ({
                title: q.question,
                content: q.answer,
              }))}
              color="orange"
            />
          </div>
        ))}

      </div>
  );
};

export default FAQ;
