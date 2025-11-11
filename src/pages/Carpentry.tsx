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
const Carpentry: React.FC = () => {
  const courseInfo = {
    code: "CPC30220",
    title: "Certificate III in Carpentry - Domestic",
    provider: "Orange International College Pty Ltd T/A as Orange College",
    rtoNumber: "41815",
    cricos: "03446A",
    abn: "15 167 063 596",
  };

  const courseDetails = [
    {
      label: "AQF Level 3",
      value: "Qualification Code CPC30220",
    },
    {
      label: "Qualification Title",
      value: "Certificate III in Carpentry",
      isLink: false,
      linkText: "Refer to NSW Training Locations",
    },
    {
      label: "Total Course Duration",
      value: "60 Weeks (including holiday breaks)",
    },
    {
      label: "Volume of learning",
      value: "1442 hours",
    },
    {
      label: "Fees & Charges",
      value:
        "Tuition Fee: $AU 30,000\nNon Tuition Fee: $AU 2,800\nEstimated Total Course Cost: $AU 32,800",
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
              This is a trade qualification for carpenters in residential and
              commercial workplaces. It includes setting out, manufacturing,
              constructing, assembling, installing, and repairing products made
              using timber and non-timber materials.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Occupational Titles May Include:
            </h2>
            <ul className="list-decimal list-inside mb-6 text-gray-700">
              <li>Carpenter - Commercial</li>
              <li>Carpenter - Formwork</li>
              <li>Carpenter - Residential</li>
            </ul>

            <p className="text-gray-700 mb-6">
              State and territory jurisdictions may have different licensing,
              legislative, regulatory, or certification requirements. Relevant
              state and territory regulatory authorities should be consulted to
              confirm those requirements.
            </p>

            <p className="text-gray-700">
              Please refer the following link for further information:
              <Link
                to="https://training.gov.au/Training/Details/CPC30220"
                target="_blank"
                className="text-blue-600 hover:underline word-break word-break"
              >
                https://training.gov.au/Training/Details/CPC30220
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
      unitCode: "CPCCCA2002",
      unitTitle: "Use carpentry tools and equipment",
      type: "C",
    },
    {
      no: 2,
      unitCode: "CPCCCA2011",
      unitTitle: "Handle carpentry materials",
      type: "C",
    },
    {
      no: 3,
      unitCode: "CPCCCA3001",
      unitTitle: "Carry out general demolition of minor building structures",
      type: "C",
    },
    {
      no: 4,
      unitCode: "CPCCCA3002",
      unitTitle: "Carry out setting out",
      type: "C",
    },
    {
      no: 5,
      unitCode: "CPCCCA3003",
      unitTitle: "Install flooring systems",
      type: "C",
    },
    {
      no: 6,
      unitCode: "CPCCCA3004",
      unitTitle: "Construct and erect wall frames",
      type: "C",
    },
    {
      no: 7,
      unitCode: "CPCCCA3005",
      unitTitle: "Construct ceiling frames",
      type: "C",
    },
    {
      no: 8,
      unitCode: "CPCCCA3006",
      unitTitle: "Erect roof trusses",
      type: "C",
    },
    {
      no: 9,
      unitCode: "CPCCCA3007",
      unitTitle: "Construct pitched roofs",
      type: "C",
    },
    { no: 10, unitCode: "CPCCCA3008", unitTitle: "Construct eaves", type: "C" },
    {
      no: 11,
      unitCode: "CPCCCA3010",
      unitTitle: "Install windows and doors",
      type: "C",
    },
    {
      no: 12,
      unitCode: "CPCCCA3016",
      unitTitle: "Construct, assemble and install timber external stairs",
      type: "C",
    },
    {
      no: 13,
      unitCode: "CPCCCA3017",
      unitTitle: "Install exterior cladding",
      type: "C",
    },
    {
      no: 14,
      unitCode: "CPCCCA3018",
      unitTitle: "Construct, erect and dismantle formwork for stairs and ramps",
      type: "E",
    },
    {
      no: 15,
      unitCode: "CPCCCA3019",
      unitTitle:
        "Erect and dismantle formwork to suspended slabs, columns, beams and walls",
      type: "E",
    },
    {
      no: 16,
      unitCode: "CPCCCA3024",
      unitTitle: "Install lining, panelling and moulding",
      type: "C",
    },
    {
      no: 17,
      unitCode: "CPCCCA3025",
      unitTitle:
        "Read and interpret plans, specifications and drawings for carpentry work",
      type: "C",
    },
    {
      no: 18,
      unitCode: "CPCCCA3028",
      unitTitle: "Erect and dismantle formwork to footings and slabs on ground",
      type: "E",
    },
    {
      no: 19,
      unitCode: "CPCCCM2006",
      unitTitle: "Apply basic levelling procedures",
      type: "C",
    },
    {
      no: 20,
      unitCode: "CPCCCM2008",
      unitTitle: "Erect and dismantle restricted height scaffolding",
      type: "C",
    },
    {
      no: 21,
      unitCode: "CPCCCM2012",
      unitTitle: "Work safely at heights",
      type: "C",
    },
    {
      no: 22,
      unitCode: "CPCCCM3001",
      unitTitle: "Operate elevated work platforms up to 11 metres",
      type: "E",
    },
    {
      no: 23,
      unitCode: "CPCCCM3005",
      unitTitle: "Calculate costs of construction work",
      type: "E",
    },
    {
      no: 24,
      unitCode: "CPCCCM3006",
      unitTitle: "Carry out levelling operations",
      type: "C",
    },
    {
      no: 25,
      unitCode: "CPCCOM1012",
      unitTitle:
        "Work effectively and sustainably in the construction industry",
      type: "C",
    },
    {
      no: 26,
      unitCode: "CPCCOM1013",
      unitTitle: "Plan and organise work",
      type: "C",
    },
    {
      no: 27,
      unitCode: "CPCCOM1014",
      unitTitle: "Conduct workplace communication",
      type: "C",
    },
    {
      no: 28,
      unitCode: "CPCCOM1015",
      unitTitle: "Carry out measurements and calculations",
      type: "C",
    },
    {
      no: 29,
      unitCode: "CPCCOM2001",
      unitTitle: "Read and interpret plans and specifications",
      type: "C",
    },
    {
      no: 30,
      unitCode: "CPCCOM3001",
      unitTitle:
        "Perform construction calculations to determine carpentry material requirements",
      type: "C",
    },
    {
      no: 31,
      unitCode: "CPCWHS2001",
      unitTitle:
        "Apply WHS requirements, policies and procedures in the construction industry",
      type: "C",
    },
    {
      no: 32,
      unitCode: "CPCWHS3001",
      unitTitle:
        "Identify construction work hazards and select risk control strategies",
      type: "C",
    },
    {
      no: 33,
      unitCode: "BSBHRM413",
      unitTitle:
        "Support the learning and development of teams and individuals",
      type: "E",
    },
    {
      no: 34,
      unitCode: "BSBESB301",
      unitTitle: "Investigate business opportunities",
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
              Satisfactory completion of Year 12 or higher from applicant’s home
              country.
            </li>
          </ol>
          <h6 className="underline">1. Test evidence table:</h6>
          <TestEvidenceTable columns={columns} data={data} />
          <p>
            Students must have completed a minimum of 120 hours of work
            experience in the construction industry.
          </p>
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
              Students must attend all scheduled workshop sessions as part of
              their course requirements.
            </li>
          </ul>
          <p>
            Students must have completed a minimum of 120 hours of work
            experience in the construction industry.
          </p>
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
          engage in manual handling and heavy lifting, such as operating heavy
          equipment, lifting, and transporting construction materials, timber,
          and bricks.{" "}
        </p>
      ),
    },
    {
      title: "Workshop Requirements",
      icon: <Globe className="w-6 h-6" />,
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>High-visibility clothing</li>
          <li>Safety boots (steel-capped)</li>
          <li>Safety glasses</li>
          <li>Hearing protection</li>
          <li>Gloves (where required)</li>
        </ul>
      ),
    },
  ];
 const carouselItems = [
  <img src={Carpentry_1} alt="Carpentry 1" className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl" key={1} />,
  <img src={Carpentry_2} alt="Carpentry 2" className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl" key={2} />,
  <img src={Carpentry_3} alt="Carpentry 3" className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl" key={3} />,
];
  return (
    <>
      <PagesHeader
        title="CPC30220"
        subtitle="Certificate III in Carpentry - Domestic"
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
              🎓 Pathways – From the Qualification
            </h5>
            <p className="text-gray-600">
              Learners who successfully complete this qualification may progress
              into{" "}
              <span className="font-medium">
                Certificate IV or Diploma qualifications
              </span>{" "}
              with other RTOs and universities.
            </p>
          </div>

          {/* Employment Pathways */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h5 className="text-xl font-semibold text-gray-800 mb-2">
              💼 Employment Pathways
            </h5>
            <p className="text-gray-600 mb-3">
              Graduates may find employment in the Construction Industry as:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 font-medium">
              <li>Construction Workers</li>
              <li>Contractors</li>
              <li>Project Managers</li>
              <li>Supervisors</li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-lg shadow-sm">
            <p className="text-sm text-gray-700 mb-2">
              ⚠️ <strong>Important Note:</strong> Above pathway information is
              in line with the qualification description on the{" "}
              <Link
                to="https://training.gov.au"
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

export default Carpentry;
