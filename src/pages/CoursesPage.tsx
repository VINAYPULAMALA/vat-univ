import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const CoursesPage: React.FC = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const navigate = useNavigate();

  const courseSections = [
    {
      id: 'CHC TRAINING PACKAGE',
      heading: 'CHC TRAINING PACKAGE',
      subheading: 'Ready to build your career with a strong foundation? Check out our range of building and construction courses for tradies and get started!',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      bgColor: 'bg-orange-50',
      courses: [
        {
          code: 'CHC50121 ',
          title: 'Diploma of Early Childhood Education and Care',
          description: 'Our mission is to engage learners in meaningful educational experiences that equip them with practical skills and empower them for lifelong growth. Through excellence in training, a supportive environment, and industry-aligned programs, we aim to foster confident, skilled individuals who can thrive in dynamic environments.',
          location: 'Port Melbourne campus',
          studentType: 'International',
          href: '/early-childhood-education'
        },
        {
          code: 'CHC30121 ',
          title: 'Certificate III in Early Childhood Education and Care',
          description: 'Our mission is to engage learners in meaningful educational experiences that equip them with practical skills and empower them for lifelong growth. Through excellence in training, a supportive environment, and industry-aligned programs, we aim to foster confident, skilled individuals who can thrive in dynamic environments.',
          location: 'VAT campus',
          studentType: 'Domestic',
          href: '/early-childhood'
        }
      ]
    },
    {
      id: 'SIT TRAINING PACKAGE',
      heading: 'SIT TRAINING PACKAGE',
      subheading: 'Develop your business acumen and leadership skills with our comprehensive range of business courses designed for future leaders.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      bgColor: 'bg-blue-50',
      courses: [
        {
          code: 'SIT40521',
          title: ' Certificate IV in Kitchen Management',
          description: 'This qualification reflects the role of chefs and cooks who have a supervisory or team leading role in the kitchen. They operate independently or with limited guidance from others and use discretion to solve non-routine problems. This qualification provides a pathway to work in organisations such as restaurants, hotels, clubs, pubs, cafes and coffee shops, or to run a small business in these sectors. The skills in this qualification must be applied in accordance with Commonwealth and State or Territory legislation, Australian standards and industry codes of practice.',
          location: 'Orange campus',
          studentType: 'Domestic',
          href: '/kitchen-management'
        },
        {
          code: 'SIT50422',
          title: 'Diploma of Hospitality Management',
          description: 'This qualification reflects the role of highly skilled senior operators who use a broad range of hospitality skills combined with managerial skills and sound knowledge of industry to coordinate hospitality operations. They operate independently, have responsibility for others and make a range of operational business decisions.',
          location: 'Sydney campus',
          studentType: 'International',
          href: '/hospitality-management'
        },
        {
          code: 'SIT30821',
          title: ' Certificate III in Commercial Cookery',
          description: 'This qualification reflects the role of cooks who use a wide range of cookery skills and knowledge to prepare food and menu items in various hospitality settings. They work under limited supervision and are responsible for the preparation and presentation of food in accordance with food safety standards.',
          location: 'Melbourne campus',
          studentType: 'Domestic',
          href: '/commercial-cookery'
        },
       
      ]
    },
    {
      id: 'CPC TRAINING PACKAGE',
      heading: 'CPC TRAINING PACKAGE',
      subheading: 'Join the exciting world of hospitality and tourism with our industry-focused courses that prepare you for global career opportunities.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      bgColor: 'bg-green-50',
      courses: [
        {
          code: 'CPC30220',
          title: ' Certificate III in Carpentry',
          description: 'This is a trade qualification for carpenters in residential and commercial workplaces. It includes setting out, manufacturing, constructing, assembling, installing and repairing products made using timber and non-timber materials.',
          location: 'Sydney campus',
          studentType: 'International',
          href: '/carpentry'
        },
       
      ]
    },
    {
      id: 'BSB TRAINING PACKAGE',
      heading: 'BSB TRAINING PACKAGE',
      subheading: 'Make a difference in people\'s lives with our health and community services courses that prepare you for rewarding careers in care.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      bgColor: 'bg-purple-50',
      courses: [
        {
          code: 'BSB80120',
          title: '  Graduate Diploma of Management (Learning)',
          description: 'This qualification reflects the role of individuals who apply highly specialised knowledge and skills in the field of organisational learning and capability development. Individuals in these roles generate and evaluate complex ideas. They also initiate, design and execute major learning and development functions within an organisation. Typically, they would have full responsibility and accountability for the personal output and work of others.',
          location: 'Orange campus',
          studentType: 'Domestic',
          href: '/management-learning'
        },
       
      ]
    },
   
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Page Header */}
      <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 text-white py-20 lg:py-24 overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-40 translate-y-40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Explore Our
                  <span className="block text-orange-200">Programs</span>
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
                  Discover your passion and build your future with our comprehensive range of 
                  industry-focused courses designed for success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => scrollToSection('CHC TRAINING PACKAGE')}
                    className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Browse Courses
                  </button>
                  <button 
                    onClick={() => setShowApplyModal(true)}
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="animate-fade-in-right">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Students learning and studying"
                    className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  
                  {/* Floating Stats Cards */}
                  <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-xl">
                    <div className="text-2xl font-bold text-orange-600">200+</div>
                    <div className="text-sm text-gray-600">Courses Available</div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 bg-white text-gray-900 p-4 rounded-xl shadow-xl">
                    <div className="text-2xl font-bold text-orange-600">15K+</div>
                    <div className="text-sm text-gray-600">Happy Students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 py-4">
            {courseSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
              >
                {section.heading}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Sections */}
      <div className="py-12">
        {courseSections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`py-16 ${section.bgColor}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header with Image */}
              <div className="text-center mb-12">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
                  <div className="lg:w-1/2">
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="lg:w-1/2 text-left lg:text-left">
                  
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {section.heading}
                    </h2>
                    <p className="text-lg text-gray-600">
                      {section.subheading}
                    </p>
                    <button
                      onClick={() => setShowApplyModal(true)}
                      className="w-64 bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
                    >
                      Apply Online
                    </button>
                  </div>
                  
                </div>
              </div>
              
              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.courses.map((course, courseIndex) => (
                  <div
                    key={courseIndex}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 border-2 border-transparent hover:border-orange-500"
                  >
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 font-medium mb-2">{course.code}</p>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{course.description}</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{course.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                        <span>{course.studentType}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => navigate(course.href)}
                      className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
                    >
                      Know More 
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Apply Online Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Apply Online</h2>
                <button
                  onClick={() => setShowApplyModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="(02) 1234 5678"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course of Interest *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a course</option>
                    <option value="building">Building & Construction</option>
                    <option value="business">Business & Leadership</option>
                    <option value="hospitality">Hospitality & Tourism</option>
                    <option value="health">Health & Community</option>
                    <option value="creative">Creative & Design</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select student type</option>
                    <option value="domestic">Domestic Student</option>
                    <option value="international">International Student</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us more about your interests and goals..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;