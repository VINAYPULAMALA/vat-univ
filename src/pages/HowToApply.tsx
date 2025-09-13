import About from "../components/About";
import ApplicationTabs from "../components/ApplicationTabs";
import Banner from "../components/Banner";
import {
  FileText,
  BookOpenCheck,
  Mail,
  CircleDollarSign,
  Plane,
  GraduationCap,
  CheckCircle,
} from "lucide-react";

const tabs = [
  {
    key: "international",
    label: "International",
    content: (
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            How to apply
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Instructions to applicants
          </h1>
          <p className="text-xl text-gray-600">
            After choosing your course, please follow the steps below:
          </p>
        </div>

        {/* Step 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group hover:shadow-lg transition-all duration-300 p-6 rounded-xl border hover:border-orange-500">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <BookOpenCheck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Step 1: Entry Requirements
              </h3>
            </div>
            <p className="text-gray-600">
              Before you start your application, make sure you meet the course
              entry requirements. Each course has its own entry requirements and
              you can check them on the course page.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Entry requirements"
            className="rounded-lg object-cover h-64 w-full"
          />
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group hover:shadow-lg transition-all duration-300 p-6 rounded-xl border hover:border-orange-500">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <FileText className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Step 2: Student Application Form
              </h3>
            </div>
            <p className="text-gray-600">
              Applying is easy and can be done online by filling out the Student
              Application Form. Required documents:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <BookOpenCheck className="w-5 h-5 text-orange-600" />
                Certified Passport
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                Certified Academic Transcript (Year 12 or Above)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                Evidence of English Proficiency
              </li>
            </ul>
            <div className="mt-4 p-4 bg-orange-50 rounded-lg">
              <p className="text-sm text-orange-700">
                Applications may be rejected at any stage. Contact us at{" "}
                <a
                  href="mailto:info@orange.edu.au"
                  className="font-semibold underline"
                >
                  info@orange.edu.au
                </a>{" "}
                if needed.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
            >
              Need an English Placement Test? Click here
              <Plane className="ml-2 w-5 h-5" />
            </a>
          </div>
          <img
            src="https://images.pexels.com/photos/7684728/pexels-photo-7684728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Application form"
            className="rounded-lg object-cover h-64 w-full"
          />
        </div>

        {/* Step 3 */}
        <div className="group hover:shadow-lg transition-all duration-300 p-6 rounded-xl border hover:border-orange-500">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-orange-100 rounded-full">
              <CircleDollarSign className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Step 3: Offer Letter and Initial Deposit
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ol className="space-y-4 text-gray-600 list-decimal list-inside">
              <li>Receive conditional offer letter</li>
              <li>Pay initial tuition deposit</li>
              <li>Submit visa application documents</li>
              <li>Receive Confirmation of Enrollment (CoE)</li>
              <li>Complete health insurance requirements</li>
              <li>Attend pre-departure orientation</li>
              <li>Review refund policy and terms</li>
            </ol>
            <img
              src="https://images.pexels.com/photos/7109088/pexels-photo-7109088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Visa process"
              className="rounded-lg object-cover h-64 w-full"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "domestic",
    label: "Domestic",
    content: (
      <div className="text-center py-12 group hover:shadow-lg transition-all duration-300 p-6 rounded-xl border hover:border-orange-500">
        <div className="max-w-2xl mx-auto">
          <GraduationCap className="w-16 h-16 text-orange-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Domestic Student Applications
          </h2>
          <p className="text-xl text-gray-600">
            Domestic student application process details will be available soon.
            Please check back later or contact our admissions office for
            assistance.
          </p>
          <div className="mt-8 p-4 bg-orange-50 rounded-lg inline-flex items-center gap-2">
            <Mail className="w-5 h-5 text-orange-600" />
            <span>Email: </span>
            <a
              href="mailto:admissions@orange.edu.au"
              className="font-semibold text-orange-600"
            >
              admissions@orange.edu.au
            </a>
          </div>
        </div>
      </div>
    ),
  },
];
const aboutSections = [
  {
    title: "Leading Education in Regional Australia",
    description: [
      "Orange University has been at the forefront...",
      "Our commitment to innovation...",
    ],
    buttonText: "Discover Our Story",
    imageUrl:
      "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
    stats: [],
  },
  {
    title: "Innovation for the Future",
    description: [
      "We’re shaping the next generation of leaders...",
      "Students learn in world-class facilities...",
    ],
    buttonText: "Explore Our Vision",
    imageUrl:
      "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
    stats: [],
  },
];
const HowToApply = () => {
  return (
    <>
      <Banner
        schoolName="Orange International School"
        headline="How to apply to study at Orange College"
        description="Are you ready to start a new chapter at Orange? It is time to start your application. Learn how to apply to study at Orange College and understand our entry requirements, payments and letter of offer. Whether you're a domestic or an international student, click on the button to access the information that applies to you."
        buttonLabel="Apply Now"
        imageSrc="https://www.orange.edu.au/wp-content/uploads/2022/01/OC-How-to-apply_Hero-banner.png"
      />
      <ApplicationTabs tabs={tabs} defaultActiveTab="international" />

      {aboutSections.map((section, index) => (
        <About 
          key={index} 
          {...section} 
          index={index} // 👈 Add this prop
        />
      ))}
    </>
  );
};

export default HowToApply;
