import React from "react";
import {
  Heart,
  Globe2,
  Ticket,
  Laptop,
  FileText,
  Building,
} from "lucide-react";
import Banner from "../components/Banner";
import WelcomeSection from "../components/WelcomeSection";
import ExperienceSection from "../components/ExperienceSection";

const WhyOrange = () => {
  const wellbeingFeatures = [
    {
      icon: Heart,
      title: "Wellness First",
      description:
        "Mental health services, counseling support, and stress management resources ensure every student thrives academically and personally.",
    },
    {
      icon: Globe2,
      title: "Cultural Celebration",
      description:
        "Regular cultural events, international student societies, and language exchange programs create a truly inclusive learning environment.",
    },
    {
      icon: Ticket,
      title: "24/7 Support",
      description:
        "Academic advisors, peer mentors, and support staff provide guidance from enrollment through graduation and beyond.",
    },
  ];

  const innovationFeatures = [
    {
      icon: Laptop,
      title: "Digital Innovation",
      description: "Advanced simulation labs and AI-assisted learning tools",
    },
    {
      icon: FileText,
      title: "Cross-Program Collaboration",
      description:
        "Students from different fields work together on real projects",
    },
    {
      icon: Building,
      title: "Industry Integration",
      description: "Direct connections with Melbourne's leading employers",
    },
  ];

  const facultyStats = [
    {
      value: "15:1",
      label: "Student-Teacher Ratio",
      description: "Personalized attention in every class",
    },
    {
      value: "85%",
      label: "Industry Experience",
      description: "Faculty with real-world professional backgrounds",
    },
    {
      value: "95%",
      label: "Student Satisfaction",
      description: "Rating for teaching quality and support",
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      position: "Dean of Academic Affairs",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Prof. James Carter",
      position: "Head of Business & Leadership",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Dr. Emily Johnson",
      position: "Director of Student Engagement",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Mr. Michael Lee",
      position: "Coordinator of International Programs",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  return (
    <div className="bg-white">
      <Banner
        schoolName="Orange International School"
        headline="Admissions Open 2025"
        description="Empowering students with world-class education, creativity, and opportunities to shape their future. Join us to explore endless possibilities in learning."
        buttonLabel="Apply Now"
        imageSrc="https://www.orange.edu.au/wp-content/uploads/2021/11/DSC_0181-373x200.jpg"
      />
      {/* Multicultural Support Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Multicultural Support & Student Well-Being
              </h2>
              <div className="space-y-6">
                {wellbeingFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex gap-4 p-4 hover:bg-orange-50 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-orange-600 group-hover:text-orange-700" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-700">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Students enjoying multicultural environment"
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Innovation Meets Collaboration
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  State-of-the-art facilities feature cutting-edge technology,
                  virtual reality training modules, and hybrid learning
                  platforms that prepare students for tomorrow's workplace.
                </p>
                <p className="text-gray-600">
                  Collaborative projects connect students across programs,
                  fostering teamwork skills essential in today's interconnected
                  professional landscape.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {innovationFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer group"
                    >
                      <Icon className="w-8 h-8 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-700">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Students collaborating in modern classroom"
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-gradient-to-r from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Empowerment Through Expert Faculty
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our faculty combines academic excellence with real-world
                  experience. Industry professionals turned educators bring
                  current insights and proven teaching methods to every
                  classroom interaction.
                </p>
                <p className="text-gray-600">
                  Small class sizes ensure personalized attention, while
                  mentorship programs connect students with career advisors who
                  understand their unique goals and challenges.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {facultyStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                  >
                    <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors duration-300">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-700">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg"
                alt="Professor mentoring student"
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
      <WelcomeSection />
      <ExperienceSection />
      {/* Meet the Team Section */}
      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Meet the Team at{" "}
            <span className="text-orange-600">Orange College</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-2 hover:border-orange-500 group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyOrange;
