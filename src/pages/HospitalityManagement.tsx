import React from "react";
import ApplyForm from "../components/ApplyForm";
import { User, Globe } from "lucide-react";
import { TestEvidenceTable } from "../components/StepTimelineWithIcons";
import PagesHeader from "../components/PagesHeader";
import Carpentry_1 from "../../assests/Carpentry_1.png";
import Carpentry_2 from "../../assests/Carpentry_2.png";
import Carpentry_3 from "../../assests/Carpentry_3.png";

interface Unit {
  no: number;
  unitCode: string;
  unitTitle: string;
  type: "C" | "E";
}
interface Step {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}
interface Step1 {
  content: React.ReactNode;
}
const HospitalityManagement: React.FC = () => {
  const courseInfo = {
    code: "SIT50422",
    title: "SIT50422 – Diploma of Hospitality Management",
    provider: "Orange International College Pty Ltd T/A as Orange College",
    rtoNumber: "41815",
    cricos: "117073M",
    abn: "15 167 063 596",
  };

  const courseDetails = [
    {
      label: "AQF Level 3",
      value: "Qualification Code SIT50422",
    },
    {
      label: "Qualification Title",
      value: "Diploma of Hospitality Management",
      isLink: false,
      linkText: "Refer to NSW Training Locations",
    },
    {
      label: "Total Course Duration",
      value: "94 Weeks (including holiday breaks)",
    },
    {
      label: "Volume of learning",
      value: "2146  hours",
    },
    {
      label: "Fees & Charges",
      value:
        "Tuition Fee: $AU 35,000 \nNon Tuition Fee: $AU 5,500\nEstimated Total Course Cost: $AU 40,500",
    },
    {
      label: "English Language Requirements",
      isLink: true,
      linkText: "Click here for requirements",
      link: "https://www.vat.vic.edu.au/english-language-requirements-for-international-students/",
    },
  ];

  const des_code: Step1[] = [
    {
      content: (
        <>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Course Description
            </h1>

            <p className="text-gray-700 mb-6">
              This qualification reflects the role of highly skilled senior operators who use a broad range of hospitality skills combined with managerial skills and sound knowledge of industry to coordinate hospitality operations. They operate independently, have responsibility for others and make a range of operational business decisions{" "}
            </p>

            <p className="text-gray-700 mb-6">
              This qualification provides a pathway to work in any hospitality industry sector as a departmental or small business manager. The diversity of employers includes restaurants, hotels, motels, catering operations, clubs, pubs, cafés, and coffee shops. This qualification allows for multiskilling and for acquiring targeted skills in accommodation services, cookery, food and beverage and gaming.

The skills in this qualification must be applied in accordance with Commonwealth and State/Territory legislation, Australian standards and industry codes of practice. Please refer the following link for the further information:{" "}
            </p>

            <p className="text-gray-700">
              Please refer the following link for further information:
              <a
                href="https://www.acecqa.gov.au"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                www.acecqa.gov.au
              </a>
              <br />
              <a
                href="https://training.gov.au/Training/Details/SIT50422"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                https://training.gov.au/Training/Details/SIT50422{" "}
              </a>{" "}
            </p>
          </div>
        </>
      ),
    },
  ];

  const smallDescription = `In order to achieve this qualification, student must complete following 34 unit of competencies.`;

  // Data for the course units
  const units: Unit[] = [
    {
      no: 1,
      unitCode: "SITXFSA005 ",
      unitTitle: "Use hygienic practices for food safety",
      type: "E",
    },
    {
      no: 2,
      unitCode: "SITXFSA006 ",
      unitTitle: "Participate in safe food handling practices",
      type: "E",
    },
    {
      no: 3,
      unitCode: "SITHCCC027",
      unitTitle:
        "Prepare dishes using basic methods of cookery",
      type: "E",
    },
    {
      no: 4,
      unitCode: "SITHCCC023 ",
      unitTitle: " Use food preparation equipment",
      type: "E",
    },
    {
      no: 5,
      unitCode: "SITHCCC028 *",
      unitTitle:
        " Prepare appetisers and salads",
      type: "E",
    },
    {
      no: 6,
      unitCode: "SITHCCC029",
      unitTitle:
        " Prepare stocks, sauces and soups",
      type: "E",
    },
    {
      no: 7,
      unitCode: "SITHCCC030",
      unitTitle: " Prepare vegetable, fruit, eggs and farinaceous dishes",
      type: "E",
    },
    {
      no: 8,
      unitCode: "SITHCCC031",
      unitTitle: " Prepare vegetarian and vegan dishes",
      type: "E",
    },
    {
      no: 9,
      unitCode: "SITHCCC035",
      unitTitle: " Prepare poultry dishes",
      type: "E",
    },
    {
      no: 10,
      unitCode: "SITHCCC037",
      unitTitle: " Prepare seafood dishes",
      type: "E",
    },
    {
      no: 11,
      unitCode: "SITHCCC036",
      unitTitle: "Prepare meat dishes",
      type: "E",
    },
    {
      no: 12,
      unitCode: "SITHCCC042",
      unitTitle: "Prepare food to meet special dietary requirements",
      type: "E",
    },
    {
      no: 13,
      unitCode: "SITHCCC041",
      unitTitle:
        "roduce cakes, pastries and breads",
      type: "E",
    },
    {
      no: 14,
      unitCode: "SITHPAT016",
      unitTitle: "Produce desserts",
      type: "E",
    },

    {
      no: 15,
      unitCode: "SITXINV006",
      unitTitle: "Receive, store and maintain stock",
      type: "E",
    },
    {
      no: 16,
      unitCode: "SITHCCC026",
      unitTitle: "Package prepare foodstuffs",
      type: "E",
    },
    {
      no: 17,
      unitCode: "SITXCCS015 ",
      unitTitle: "Enhance customer service experiences	",
      type: "C",
    },
    
    {
      no: 18,
      unitCode: "SITXCCS016 ",
      unitTitle: "Develop and manage quality customer service practices	",
      type: "C",
    },
    {
      no: 19,
      unitCode: "SITXFIN010",
      unitTitle: " Prepare and monitor budgets	",
      type: "C",
    },
    {
      no: 20,
      unitCode: "SITXGLC002",
      unitTitle: " Research and comply with regulatory requirements	",
      type: "C",
    },
    
    {
      no: 21,
      unitCode: "SITXMGT005",
      unitTitle: " Establish and conduct business relationships		",
      type: "C",
    },
    {
      no: 22,
      unitCode: "SITXCOM010",
      unitTitle: "Manage conflict		",
      type: "C",
    },
    {
      no: 23,
      unitCode: "SITXFIN009	",
      unitTitle: "Manage finances within a budget			",
      type: "C",
    },
    {
      no: 24,
      unitCode: "SITXHRM008",
      unitTitle: "Roster staff			",
      type: "C",
    },
    {
      no: 25,
      unitCode: "SITXHRM009",
      unitTitle: "Lead and manage people		",
      type: "C",
    },
    {
      no: 26,
      unitCode: "SITXMGT004",
      unitTitle: "Monitor work operations			",
      type: "C",
    },
    {
      no: 27,
      unitCode: "SITXWHS007",
      unitTitle: "Implement and monitor work health and safety practice		",
      type: "C",
    },
    {
      no: 28,
      unitCode: "SITHKOP013",
      unitTitle: "Plan cooking operations			",
      type: "E",
    },
    
     

  ];
  const columns = [
    "IELTS (General or Academic) Overall",
    "PTE Academic",
    "TOEFL PB",
    "TOEFL IBT",
    "CAE Scale",
    "ELICOS (General English)",
  ];
  const data = [
    [6.0, 50, "547-587", "78-82", 169, "n/a"],
    [5.5, 42, 506, 62, 162, "+10 weeks"],
    [5.0, 36, 478, 51, 154, "+20 weeks"],
  ];
  const courseRequirementSteps: Step[] = [
    {
      title: "International Students",
      icon: <User className="w-6 h-6" />,
      content: (
        <>
          <h5>International Students:</h5>
          <ol className="list-disc">
           
            <li>Minimum age of 18 years and above</li>
            <li>
              Satisfactory completion of Year 11 or higher from applicant’s home country.
            </li>
          </ol>
          <h6 className="underline">1. Test evidence table:</h6>
          <TestEvidenceTable columns={columns} data={data} />
          <p>or, Oxford Placement test with score 61 or higher.</p>
          <p>
            Score Guide: Average test score of 61 or higher in Oxford placement
            test is equivalent to IELTS 6.0
          </p>
          <b>
            Note: Results older than two years are not acceptable (for offshore
            applicants).
          </b>
          <b>OR</b>
          <p>
            2. Evidence that they have studied in English for at least five
            years in Australia, Canada, New Zealand, Republic of Ireland, South
            Africa, United Kingdom or United States
          </p>
          <b>OR</b>
          <p>
            3. Evidence that, within two years of their application date, they
            have successfully completed in Australia a foundation course or a
            senior secondary certificate of education or successfully completed
            substantial components (50% or more units according to the training
            package) Certificate IV or higher-level qualification, from the
            Australian Qualifications Framework.s
          </p>
          <b>OR</b>
          <p>
            4. Evidence that they are a citizen of and hold a valid passport
            from the United Kingdom, the United States of America, Canada, New
            Zealand, or the Republic of Ireland.
          </p>
          <b>OR</b>
          <p>
            5. Applicants originating from students visa assessment levels 1 and
            2 countries without the required IELTS or equivalent score must
            undertake the Language, Literacy and Numeracy (LLN) and Digital (D)
            literacy test. For further information on student visa assessment
            levels visit Department of Home Affairs’ website at{" "}
            <a href="https://www.homeaffairs.gov.au/students/visa-assessment-levels">
              https://www.homeaffairs.gov.au/students/visa-assessment-levels
            </a>
          </p>
          <h5 className="text-base font-bold">
            Additionally, the learner is required to:
          </h5>
          <h6 className="underline">Onshore International Students</h6>
          <p>
            Complete the Pre-Training Review including LLND test which aims to
            identify training needs through questions on previous education or
            training, relevance of the courses to learner and relevant
            experience.
          </p>
          <h6 className="underline">Offshore International Students</h6>
          <p>
            Complete the Pre-Training Review including LLND test which aims to
            identify training needs through questions on previous education or
            training, relevance of the courses to learner and relevant
            experience. This will be conducted either via video call (e.g.
            Skype) or phone call to the prospective learner.{" "}
          </p>
        </>
      ),
    },
    {
      title: "Other requirements",
      icon: <User className="w-6 h-6" />,
      content: (
        <>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Students are required to attend a minimum of 20 scheduled course
              contact hours per week.
            </li>
            <li>
              Students are required to invest approx. of 4-5 hours per week of
              guided learning during the training weeks and does not include the
              term breaks.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Computer literacy requirements",
      icon: <Globe className="w-6 h-6" />,
      content: (
        <p>
          Students enrolling on this course must have basic computer skills.
          Students are required to fill in the questions related to computer and
          internet skills in the Pre-Training Review form provided along with
          the application form. Students who do not possess basic computing
          skills will be provided with basic support on how to use a computer.
          If required, students may also be referred to taking computer training
          before enrolment. Students can contact VAT for any further information
          or assistance.
        </p>
      ),
    },
    {
      title: "Materials and Equipment Required",
      icon: <Globe className="w-6 h-6" />,
      content: (
        <p>
          Students will not require a computer during the training sessions.
          However, for self-study and completing theory assessments, all
          students are expected to have access to a laptop or computer at home
          with the Windows 7 operating system or higher. Students must have an
          active email address for communication and be contactable by phone
          (mobile or landline) and by mail (postal address). All learners should
          also have access to MS Office applications, such as Microsoft Word,
          and an email platform to complete assignments and tasks outside of
          classroom hours.
        </p>
      ),
    },
   
   
   
  ];
  const carouselItems = [
    <img
      src={Carpentry_1}
      alt="Carpentry 1"
      className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
      key={1}
    />,
    <img
      src={Carpentry_2}
      alt="Carpentry 2"
      className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
      key={2}
    />,
    <img
      src={Carpentry_3}
      alt="Carpentry 3"
      className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
      key={3}
    />,
  ];
  return (
    <>
      <PagesHeader
        title="SIT30821 "
        subtitle=" Certificate IV in Kitchen Management"
        description="Discover your passion and build your future with our comprehensive range of industry-focused courses designed for success."
        carouselItems={carouselItems}
      />
      <div className="min-h-screen bg-gray-50">
        <ApplyForm
          courseInfo={courseInfo}
          courseDetails={courseDetails}
          smallDescription={smallDescription}
          units={units}
          courseRequirementSteps={courseRequirementSteps}
          des_code={des_code}
        />
        <div className="mt-10 space-y-4 container mx-auto p-4">
        

          {/* Pathway from Qualification */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h5 className="text-xl font-semibold text-gray-800 mb-2">
              Pathways – Pathway from the Qualification
            </h5>
            <p className="text-gray-600">
Learners who successfully complete this qualification may progress into further studies such as: Advanced Diploma or Bachelor’s Degree from another Institute, TAFE, or University.
            </p>
          </div>

          {/* Employment Pathways */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h5 className="text-xl font-semibold text-gray-800 mb-2">
              Employment Pathways
            </h5>
            <p className="text-gray-600 mb-3">
             Graduates may find employment in the Hospitality Industry as:{" "}
            </p>

            <ol className="list-decimal list-inside space-y-1 text-gray-700 font-medium">
              <li> Commercial Cook</li>
              <li>Kitchen supervisor </li>
            </ol>
          </div>
        

          {/* Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-lg shadow-sm">
            <p className="text-sm text-gray-700 mb-2">
              ⚠️ <strong>Important Note:</strong> Above pathway information is
              in line with the qualification description on the{" "}
              <a
                href="https://training.gov.au"
                target="_blank"
                className="text-blue-600 underline hover:text-blue-800"
              >
                National Training Register
              </a>{" "}
              and{" "}
              <a
                href="https://www.myskills.gov.au/"
                target="_blank"
                className="text-blue-600 underline hover:text-blue-800"
              >
                MySkills
              </a>
              . It doesn’t imply any job guarantee or job role at the end of the
              course.
            </p>
            <p className="text-sm text-gray-700">
              Vocational Augment Training (VAT) does not claim any employment
              outcome or guarantee. Please read this information in conjunction
              with the <span className="font-semibold">Student Handbook</span>{" "}
              available on this website before making an enrollment decision.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalityManagement;
