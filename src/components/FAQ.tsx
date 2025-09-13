import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Admissions",
      questions: [
        {
          question: "What are the admission requirements?",
          answer: "Admission requirements vary by program. Generally, you'll need a high school diploma or equivalent, satisfactory grades, and may need to meet specific prerequisites for your chosen field of study. International students may need to demonstrate English proficiency through IELTS or TOEFL scores."
        },
        {
          question: "When are the application deadlines?",
          answer: "Application deadlines vary by program and intake. For most undergraduate programs, applications for Semester 1 (February start) close in December, and Semester 2 (July start) applications close in May. We recommend applying early as some programs have limited places."
        },
        {
          question: "How do I apply for scholarships?",
          answer: "Scholarship applications are typically submitted alongside your course application. We offer merit-based scholarships, need-based assistance, and specific scholarships for international students. Check our scholarships page for current opportunities and eligibility criteria."
        }
      ]
    },
    {
      title: "Academic Life",
      questions: [
        {
          question: "What support services are available for students?",
          answer: "We provide comprehensive support including academic tutoring, career counseling, mental health services, disability support, and international student services. Our Student Success Center coordinates these services to ensure every student has the support they need."
        },
        {
          question: "Can I study part-time?",
          answer: "Yes, many of our programs offer part-time study options. Part-time study allows you to balance work and other commitments while pursuing your degree. Contact our admissions team to discuss part-time options for your chosen program."
        },
        {
          question: "Are online courses available?",
          answer: "We offer a range of online and hybrid courses across various disciplines. Our online learning platform provides interactive content, virtual labs, and real-time collaboration tools to ensure a quality educational experience."
        }
      ]
    },
    {
      title: "Campus Life",
      questions: [
        {
          question: "What accommodation options are available?",
          answer: "We offer on-campus residential colleges, apartments, and shared accommodation. All options include internet access, utilities, and access to common areas. We also provide assistance in finding off-campus housing through our accommodation service."
        },
        {
          question: "What clubs and societies can I join?",
          answer: "Orange University has over 100 student clubs and societies covering academic interests, sports, cultural activities, and special interests. Joining clubs is a great way to meet people, develop skills, and enhance your university experience."
        },
        {
          question: "Is there parking available on campus?",
          answer: "Yes, we provide parking for students, staff, and visitors. Student parking permits are available for purchase each semester. We also encourage sustainable transport options including bike storage facilities and public transport connections."
        }
      ]
    },
    {
      title: "Financial Information",
      questions: [
        {
          question: "What are the tuition fees?",
          answer: "Tuition fees vary by program and student status (domestic/international). Domestic students may be eligible for government assistance through HECS-HELP. Detailed fee information is available on our website and will be provided with your offer letter."
        },
        {
          question: "Are payment plans available?",
          answer: "Yes, we offer flexible payment plans to help manage tuition costs. Students can pay fees in installments throughout the semester. Contact our Student Finance office to discuss payment options that work for your situation."
        },
        {
          question: "What additional costs should I budget for?",
          answer: "In addition to tuition, budget for textbooks, accommodation, meals, transport, and personal expenses. We estimate living costs at approximately $20,000-25,000 per year for domestic students and $25,000-30,000 for international students."
        }
      ]
    }
  ];

  let questionIndex = 0;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Orange University
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-orange-600 text-white px-6 py-4">
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq, faqIndex) => {
                  const currentIndex = questionIndex++;
                  const isOpen = openItems.includes(currentIndex);
                  
                  return (
                    <div key={faqIndex}>
                      <button
                        onClick={() => toggleItem(currentIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                      >
                        <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;