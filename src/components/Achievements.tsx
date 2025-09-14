import React from 'react';
import { Trophy, Award, Star, TrendingUp, Users, Globe, Sparkles, GraduationCap } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative group">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Sparkles className="w-10 h-10 text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-rotate-12" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-orange-700 bg-clip-text text-transparent relative inline-block transform group-hover:scale-105 transition-transform duration-300">
              Achievements & Awards
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/80 to-amber-200/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </h2>
            <Sparkles className="w-10 h-10 text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:rotate-12" />
          </div>
          
          <div className="max-w-2xl mx-auto relative">
            <div className="text-xl text-gray-700 mb-4 font-medium bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm inline-block">
              <GraduationCap className="inline-block w-6 h-6 text-orange-500 mr-2 -mt-1" />
              Celebrating our commitment to excellence in education, research, and community engagement
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-300 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group/stat hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover/stat:shadow-xl transition-all duration-300 group-hover/stat:from-orange-200 group-hover/stat:to-amber-200">
                  <Icon className="w-10 h-10 text-orange-600 group-hover/stat:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover/stat:text-orange-600 transition-colors duration-300">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Achievement Timeline */}
        <div className="mb-20 bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Recent Milestones</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-200 to-amber-200 hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} group/timeline`}>
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'} transition-all duration-500`}>  
                      <div className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 group-hover/timeline:-translate-y-1">
                        <div className="flex items-center mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mr-4 group-hover/timeline:from-orange-200 group-hover/timeline:to-amber-200 transition-colors duration-300">
                            <Icon className="w-7 h-7 text-orange-600" />
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
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full border-4 border-white shadow-lg group-hover/timeline:scale-125 transition-transform duration-300"></div>
                    </div>
                    
                    <div className="hidden lg:block w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recent Awards */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold text-center mb-12">Recent Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentAwards.map((award, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white group/award hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-4">
                  <Trophy className="w-8 h-8 text-orange-200 flex-shrink-0 group-hover/award:animate-bounce" />
                  <span className="text-orange-200 text-sm font-medium group-hover/award:text-orange-600 transition-colors duration-300">{award.year}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover/award:text-orange-600 transition-colors duration-300">{award.award}</h4>
                <p className="text-orange-100 text-sm group-hover/award:text-orange-500 transition-colors duration-300">{award.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Be Part of Our Success Story</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Join a university that's committed to excellence and making a positive impact on the world. 
            Your success is our achievement.
          </p>
          <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;