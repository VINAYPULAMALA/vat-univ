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
const ManagementLearning: React.FC = () => {
  const courseInfo = {
    code: "BSB80120",
    title: "BSB80120 – Graduate Diploma of Management (Learning)",
    provider: "Orange International College Pty Ltd T/A as Orange College",
    rtoNumber: "41815",
    cricos: "117106G",
    abn: "15 167 063 596",
  };

  const courseDetails = [
    {
      label: "AQF Level 3",
      value: "Qualification Code BSB80120",
    },
    {
      label: "Qualification Title",
      value: "Graduate Diploma of Management (Learning)",
      isLink: false,
      linkText: "Refer to NSW Training Locations",
    },
    {
      label: "Total Course Duration",
      value: "52  Weeks (including holiday breaks)",
    },
    {
      label: "Volume of learning",
      value: "1203  hours",
    },
    {
      label: "Fees & Charges",
      value:
        "Tuition Fee: $AU 20,000 \nNon Tuition Fee: $AU 2,300\nEstimated Total Course Cost: $AU 22,300",
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
              This qualification reflects the role of individuals who apply highly specialised knowledge and skills in the field of organisational learning and capability development. Individuals in these roles generate and evaluate complex ideas. They also initiate, design and execute major learning and development functions within an organisation. Typically, they would have full responsibility and accountability for the personal output and work of others.{" "}
            </p>

            <p className="text-gray-700 mb-6">
              This qualification may apply to leaders and managers in an organisation where learning is used to build organisational capability. The job roles that relate to this qualification may also include RTO Manager and RTO Director.{" "}
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
                href="https://training.gov.au/Training/Details/BSB80120"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                https://training.gov.au/Training/Details/BSB80120{" "}
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
      unitCode: "BSBHRM613 ",
      unitTitle: "Contribute to the development of learning and development strategies",
      type: "C",
    },
    {
      no: 2,
      unitCode: "BSBLDR811 ",
      unitTitle: "Lead strategic transformation",
      type: "C",
    },
    {
      no: 3,
      unitCode: "TAELED803",
      unitTitle:
        "Implement improved learning practice",
      type: "C",
    },
    {
      no: 4,
      unitCode: "BSBHRM611 ",
      unitTitle: " Contribute to organisational performance development",
      type: "E",
    },
    {
      no: 5,
      unitCode: "BSBINS603 ",
      unitTitle:
        " Initiate and lead applied research",
      type: "E",
    },
    {
      no: 6,
      unitCode: "BSBLDR601",
      unitTitle:
        " Lead and manage organisational change",
      type: "E",
    },
    {
      no: 7,
      unitCode: "BSBLDR812",
      unitTitle: " Develop and cultivate collaborative partnerships and relationships",
      type: "E",
    },
    {
      no: 8,
      unitCode: "BSBSTR801",
      unitTitle: " Lead innovative thinking and practice",
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
              Satisfactory completion of Year 11 or higher from applicant’s home
              country.
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
              Students are required to invest approx. of 2 hours per week of
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
        title="BSB80120  "
        subtitle=" Graduate Diploma of Management (Learning)"
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
              Learners who successfully complete this qualification may progress
              into bachelor or degree Level courses with other RTOs and
              universities.
            </p>
          </div>

          {/* Employment Pathways */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h5 className="text-xl font-semibold text-gray-800 mb-2">
              Employment Pathways
            </h5>
            <p className="text-gray-600 mb-3">
              Graduates may find employment in organisational learning and
              capability development as:{" "}
            </p>

            <ol className="list-decimal list-inside space-y-1 text-gray-700 font-medium">
              <li>Learning and Development Coordinator,</li>
              <li>organisational learning and leadership manager</li>
              <li>Operational Manager</li>
              <li>workforce capability development leader</li>
              <li>workforce planner</li>
              <li>RTO Manager</li>
              <li>RTO Director </li>
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

export default ManagementLearning;
