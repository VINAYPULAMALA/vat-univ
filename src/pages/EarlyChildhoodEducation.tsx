import React from "react";
import ApplyForm from "../components/ApplyForm";
import { User, Globe } from "lucide-react";
import { TestEvidenceTable } from "../components/StepTimelineWithIcons";
import PagesHeader from "../components/PagesHeader";
import Carpentry_1 from "../../assests/Carpentry_1.png";
import Carpentry_2 from "../../assests/Carpentry_2.png";
import Carpentry_3 from "../../assests/Carpentry_3.png";
import { Link } from "react-router-dom";
import "../index.css";

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
const EarlyChildhood: React.FC = () => {
  const courseInfo = {
    code: "CHC30121",
    title: "CHC50121 – Diploma of Early Childhood Education and Care",
    provider: "Orange International College Pty Ltd T/A as Orange College",
    rtoNumber: "41815",
    cricos: "117105H",
    abn: "15 167 063 596",
  };

  const courseDetails = [
    {
      label: "AQF Level 3",
      value: "Qualification Code CHC50121",
    },
    {
      label: "Qualification Title",
      value: "Diploma of Early Childhood Education and Care",
      isLink: false,
      linkText: "Refer to NSW Training Locations",
    },
    {
      label: "Total Course Duration",
      value: "52 Weeks (including holiday breaks)",
    },
    {
      label: "Volume of learning",
      value: "1512 hours",
    },
    {
      label: "Fees & Charges",
      value:
        "Tuition Fee: $AU 25,000 \nNon Tuition Fee: $AU 2,800\nEstimated Total Course Cost: $AU 27,800",
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
              This qualification reflects the role of educators in early
              childhood education and care who work in regulated children’s
              education and care services in Australia. Educators at this level
              are responsible for designing and implementing curriculum that
              meets the requirements of an approved learning framework and for
              maintaining compliance in other areas of service operations. They
              use specialised knowledge and analyse and apply theoretical
              concepts to diverse work situations. They may have responsibility
              for supervision of volunteers or other educators.{" "}
            </p>

            <p className="text-gray-700 mb-6">
              Early childhood educators work in long day care centres, family
              day care, pre-schools or kindergartens.{" "}
            </p>

            <p className="text-gray-700 mb-6">
              To achieve this qualification, the individual must have completed
              a total of least 280 hours of work in a regulated children’s
              education and care service in Australia as detailed in the
              Assessment Requirements of units of competency. The total number
              of hours may be applied collectively across all units of
              competency that include the requirement for workplace hours. No
              occupational licensing, certification or specific legislative
              requirements apply to this qualification at the time of
              publication. Under the Education and Care Services National Law
              (2011) the Australian Children’s Education and Care Quality
              Authority (ACECQA) publishes lists of approved early childhood
              education and care qualifications and information regarding
              regulatory requirements here:{" "}
            </p>

            <p className="text-gray-700">
              Please refer the following link for further information:
              <Link
                to="https://www.acecqa.gov.au"
                target="_blank"
                className="text-blue-600 hover:underline word-break"
              >
                www.acecqa.gov.au
              </Link>
              <br />
              <Link
                to="https://training.gov.au/Training/Details/CHC50121/qualdetails"
                target="_blank"
                className="text-blue-600 hover:underline word-break"
              >
                https://training.gov.au/Training/Details/CHC50121/qualdetails
              </Link>
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
      unitCode: "BSBTWK502",
      unitTitle: "Manage team effectiveness",
      type: "C",
    },
    {
      no: 2,
      unitCode: "CHCECE041",
      unitTitle: "Maintain a safe and healthy environment for children",
      type: "C",
    },
    {
      no: 3,
      unitCode: "CHCECE042",
      unitTitle:
        "Foster holistic early childhood learning, development and wellbeing",
      type: "C",
    },
    {
      no: 4,
      unitCode: "CHCECE043",
      unitTitle: "Nurture creativity in children",
      type: "C",
    },
    {
      no: 5,
      unitCode: "CHCECE044",
      unitTitle:
        "Facilitate compliance in a children’s education and care service",
      type: "C",
    },
    {
      no: 6,
      unitCode: "CHCECE045",
      unitTitle:
        "Foster positive and respectful interactions and behaviour in children",
      type: "C",
    },
    {
      no: 7,
      unitCode: "CHCECE046",
      unitTitle: "Implement strategies for the inclusion of all children",
      type: "C",
    },
    {
      no: 8,
      unitCode: "CHCECE047",
      unitTitle: "Analyse information to inform children’s learning",
      type: "C",
    },
    {
      no: 9,
      unitCode: "CHCECE048",
      unitTitle: "Plan and implement children’s education and care curriculum",
      type: "C",
    },
    {
      no: 10,
      unitCode: "CHCECE049",
      unitTitle: " Embed environmental responsibility in service operations",
      type: "C",
    },
    {
      no: 11,
      unitCode: "CHCECE050",
      unitTitle: "Work in partnership with children’s families",
      type: "C",
    },
    {
      no: 12,
      unitCode: "CHCPRP003",
      unitTitle: "Reflect on and improve own professional practice",
      type: "C",
    },
    {
      no: 13,
      unitCode: "BSBHRM413",
      unitTitle:
        "Support the learning and development of teams and individuals",
      type: "E",
    },
    {
      no: 14,
      unitCode: "CHCDIV003",
      unitTitle: "Manage and promote diversity",
      type: "E",
    },
    {
      no: 15,
      unitCode: "CHCMGT003",
      unitTitle: "Lead the work team",
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
            <li>
              Successfully completed CHC30121 – Certificate III in Early
              Childhood Education and Care or
            </li>
            <li>
              Hold a CHC30113 – Certificate III in Early Childhood Education and
              Care
            </li>
            <li>Minimum age of 18 years and above</li>
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
            <Link to="https://www.homeaffairs.gov.au/students/visa-assessment-levels">
              https://www.homeaffairs.gov.au/students/visa-assessment-levels
            </Link>
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
    {
      title: "Physical Abilities requirements",
      icon: <Globe className="w-6 h-6" />,
      content: (
        <p>
          Learners are required to possess the physical capabilities and manual
          handling skills necessary to effectively perform tasks during their
          training. As part of this qualification, students will be expected to
          engage in activities such as lifting and carrying children or
          equipment, setting up and moving play materials, and maintaining
          active supervision, which may involve extended periods of standing,
          bending, or engaging in physical play.
        </p>
      ),
    },
    {
      title: "Workshop Placement",
      icon: <Globe className="w-6 h-6" />,
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Minimum 280 hours</li>
          <li>
            Students must also provide prior to commencement of Work Placement
            allocation for the following:
          </li>
          <li>
            {" "}
            Provide a satisfactory National Police Clearance / Australian
            Federal Police Clearance Certificate (AFP) / NCC.
          </li>
          <li>Provide a Working with Children Check.</li>
        </ul>
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
        title="CHC30121 "
        subtitle="Certificate III in Early Childhood Education and Care"
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
              Mode of Delivery:
            </h5>
            <p className="text-gray-600">
              Classroom Blended including classroom sessions, guided learning,
              work placement and theory assessments at home and simulated
              workplace environment.
            </p>
          </div>

          {/* Pathway from Qualification */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h5 className="text-xl font-semibold text-gray-800 mb-2">
              Delivery Location:
            </h5>
            <p className="text-gray-600">
              395-397, Victoria Street, Abbotsford, VIC 3067
            </p>
          </div>

          {/* Employment Pathways */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h5 className="text-xl font-semibold text-gray-800 mb-2">
              Pathway from the Qualification
            </h5>
            <p className="text-gray-600 mb-3">
              Learners who successfully complete this qualification may progress
              into further studies such as:{" "}
            </p>

            <ol className="list-decimal list-inside space-y-1 text-gray-700 font-medium">
              <li>Bachelor Degree in Early Childhood (Education)</li>
              <li>Graduate Diploma in Early Childhood Education</li>
            </ol>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h5 className="text-xl font-semibold text-gray-800 mb-2">
              Employment Pathways
            </h5>
            <p className="text-gray-600 mb-3">
              Graduates may find employment in the following roles:{" "}
            </p>

            <ol className="list-decimal list-inside space-y-1 text-gray-700 font-medium">
              <li>Child Care Worker</li>
              <li>Nanny/Babysitter</li>
              <li> Family Day Care Worker</li>
              <li>Early Childhood Educator</li>
              <li>Education Support Staff / Teacher Aid</li>
              <li>Tutor</li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-lg shadow-sm">
            <p className="text-sm text-gray-700 mb-2">
              ⚠️ <strong>Important Note:</strong> Above pathway information is
              in line with the qualification description on the{" "}
              <Link
                to  ="https://training.gov.au"
                target="_blank"
                className="text-blue-600 underline hover:text-blue-800"
              >
                National Training Register
              </Link>{" "}
              and{" "}
              <Link
                to="https://www.myskills.gov.au/"
                target="_blank"
                className="text-blue-600 underline hover:text-blue-800"
              >
                MySkills
              </Link>
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

export default EarlyChildhood;
