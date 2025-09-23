import React from 'react';
import ApplyForm from '../components/ApplyForm';

const Carpentry: React.FC = () => {
  const courseInfo = {
    code: 'CPC30220',
    title: 'Certificate III in Carpentry - Domestic',
    provider: 'Orange International College Pty Ltd T/A as Orange College',
    rtoNumber: '41815',
    cricos: '03446A',
    abn: '15 167 063 596'
  };

  const courseDetails = [
    {
      label: 'Student',
      value: 'Apprenticeship'
    },
    {
      label: 'Campus locations',
      value: 'On the job training with the employer and/or Multiple locations (Refer to NSW Training Locations) *',
      isLink: true,
      linkText: 'Refer to NSW Training Locations'
    },
    {
      label: 'Fee',
      value: 'For more information, please visit our website www.orange.edu.au or contact 1300069642'
    },
    {
      label: 'How long it will take?',
      value: 'This is a standard apprenticeship with the mode of study being a combination of "on the job" and "off the job" training and assessment'
    },
    {
      label: 'Is the course subsidised?',
      value: 'This course is subsidised by the NSW Government under the "Smart and Skilled" initiative'
    },
    {
      label: 'Intake',
      value: 'For more information, please visit our website www.orange.edu.au or contact 1300069642'
    }
  ];

  const description = `Check out your eligibility for "Smart & Skilled" and more about this course by contacting an Orange College subject matter expert in this course. NSW Government initiative email enquiry to "enquiries@orange.edu.au" or by phoning 1300 069 642`;

  return (
    <div className="min-h-screen bg-gray-50">
      <ApplyForm
        courseInfo={courseInfo}
        courseDetails={courseDetails}
        description={description}
      />
    </div>
  );
};

export default Carpentry;