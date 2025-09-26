import React from "react";
import ApplyForm from "../components/ApplyForm";
import { User, Globe, BookOpen } from "lucide-react";
import {TestEvidenceTable} from "../components/StepTimelineWithIcons";

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
      label: "Student",
      value: "Apprenticeship",
    },
    {
      label: "Campus locations",
      value:
        "On the job training with the employer and/or Multiple locations (Refer to NSW Training Locations) *",
      isLink: true,
      linkText: "Refer to NSW Training Locations",
    },
    {
      label: "Fee",
      value:
        "For more information, please visit our website www.orange.edu.au or contact 1300069642",
    },
    {
      label: "How long it will take?",
      value:
        'This is a standard apprenticeship with the mode of study being a combination of "on the job" and "off the job" training and assessment',
    },
    {
      label: "Is the course subsidised?",
      value:
        'This course is subsidised by the NSW Government under the "Smart and Skilled" initiative',
    },
    {
      label: "Intake",
      value:
        "For more information, please visit our website www.orange.edu.au or contact 1300069642",
    },
  ];

  const description = `This is a trade qualification for carpenters in residential and commercial workplaces. It includes setting out, manufacturing, constructing, assembling, installing and repairing products made using timber and non-timber materials.

Occupational titles may include:

1. Carpenter - Commercial

2. Carpenter - Formwork

3. Carpenter - Residential

State and territory jurisdictions may have different licensing, legislative, regulatory or certification requirements. Relevant state and territory regulatory authorities should be consulted to confirm those requirements.

Please refer the following link for the further information: https://training.gov.au/Training/Details/CPC30220`;

  const smallDescription = `In order to achieve this qualification, student must complete following 8 unit of competencies.`;

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
           <TestEvidenceTable columns={columns} data={data} />
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
  return (
    <div className="min-h-screen bg-gray-50">
      <ApplyForm
        courseInfo={courseInfo}
        courseDetails={courseDetails}
        description={description}
        smallDescription={smallDescription}
        units={units}
        courseRequirementSteps={courseRequirementSteps}
      />
    </div>
  );
};

export default Carpentry;
