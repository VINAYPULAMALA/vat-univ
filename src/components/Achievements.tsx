import React from 'react';
import { Trophy, Award, Star, TrendingUp, Users, Globe } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      year: "2024",
      title: "Excellence in Teaching Award",
      description: "Recognized by the Australian University Teaching Awards for innovative pedagogy",
      icon: Award,
      category: "Academic Excellence"
    },
    {
      year: "2023",
      title: "Top 10 Regional University",
      description: "Ranked among Australia's top regional universities by Good Universities Guide",
      icon: Trophy,
      category: "Rankings"
    },
    {
      year: "2023",
      title: "Sustainability Leadership",
      description: "Carbon neutral campus achievement and green building certifications",
      icon: Star,
      category: "Environmental"
    },
    {
      year: "2022",
      title: "Research Excellence Grant",
      description: "$5M funding for agricultural innovation and sustainable farming research",
      icon: TrendingUp,
      category: "Research"
    },
    {
      year: "2022",
      title: "International Partnership Expansion",
      description: "New exchange programs with 15 universities across Asia and Europe",
      icon: Globe,
      category: "Global Reach"
    },
    {
      year: "2021",
      title: "Student Satisfaction Award",
      description: "Highest student satisfaction rating in regional NSW for three consecutive years",
      icon: Users,
      category: "Student Experience"
    }
  ];

  const stats = [
    { number: "50+", label: "Years of Excellence", icon: Trophy },
    { number: "95%", label: "Graduate Employment", icon: TrendingUp },
    { number: "15,000+", label: "Alumni Network", icon: Users },
    { number: "60+", label: "Countries Represented", icon: Globe },
    { number: "200+", label: "Industry Partners", icon: Award },
    { number: "98%", label: "Student Satisfaction", icon: Star }
  ];

  const recentAwards = [
    {
      title: "Australian Financial Review Higher Education Awards",
      award: "Outstanding Contribution to Student Experience",
      year: "2024"
    },
    {
      title: "Times Higher Education Awards",
      award: "Excellence in Student Support",
      year: "2023"
    },
    {
      title: "Australian Technology Network",
      award: "Innovation in Learning and Teaching",
      year: "2023"
    },
    {
      title: "Green Gown Awards Australia",
      award: "Sustainability Institution of the Year",
      year: "2022"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Awards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating our commitment to excellence in education, research, and community engagement
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Achievement Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Recent Milestones</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200 hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                            <Icon className="w-6 h-6 text-orange-600" />
                          </div>
                          <div>
                            <div className="text-orange-600 font-semibold text-sm">{achievement.category}</div>
                            <div className="text-gray-500 text-sm">{achievement.year}</div>
                          </div>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden lg:flex w-2/12 justify-center">
                      <div className="w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="hidden lg:block w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recent Awards */}
        <div className="bg-orange-600 rounded-lg p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Recent Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentAwards.map((award, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-start justify-between mb-4">
                  <Trophy className="w-8 h-8 text-orange-200 flex-shrink-0" />
                  <span className="text-orange-200 text-sm font-medium">{award.year}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{award.award}</h4>
                <p className="text-orange-100 text-sm">{award.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Be Part of Our Success Story</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join a university that's committed to excellence and making a positive impact on the world. 
            Your success is our achievement.
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;