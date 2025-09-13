import React from 'react';
import { Glasses, Users, Building2, Lightbulb } from 'lucide-react';

const ExperienceSection = () => {
  const features = [
    {
      icon: <Glasses className="w-8 h-8" />,
      title: 'IMMERSIVE LEARNING TECHNOLOGY',
      description: 'Our classrooms are equipped with state-of-the-art interactive digital boards, VR/AR learning tools, and AI-powered laboratories that transform abstract concepts into tangible experiences.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'INCLUSIVE COLLABORATIVE ENVIRONMENT',
      description: 'Our beautifully designed campus features open study spaces, creative innovation hubs, and collaborative zones where students from all backgrounds come together to brainstorm, create, and solve real-world challenges.'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'INDUSTRY PARTNERSHIP & MENTORSHIP',
      description: 'Through direct partnerships with leading companies, our students work on actual industry projects while being mentored by professionals at the top of their fields.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'FUTURE-READY INNOVATION LABS',
      description: 'Our innovation labs are equipped with cutting-edge technology that allows students to prototype, experiment, and bring their ideas to life.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-12">
          EXPERIENCE THE ORANGE COLLEGE DIFFERENCE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="flex-shrink-0 text-orange-600 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center space-y-4">
          <p className="text-gray-600">
            At Orange College, we believe education should be as dynamic and diverse as the world our graduates will enter. Our commitment to inclusivity ensures that every student—regardless of background, learning style, or career aspiration—finds their place in our community.
          </p>
          <p className="text-gray-600">
            Join us at Orange College, where your future isn't just bright—it's <span className="text-orange-600 font-semibold">orange</span>, vibrant, and limitless.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;