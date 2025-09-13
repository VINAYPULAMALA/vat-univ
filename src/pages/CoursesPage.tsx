import React, { useState } from 'react';
import { X } from 'lucide-react';

const CoursesPage: React.FC = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);

  const courseSections = [
    {
      id: 'building-construction',
      heading: 'Building & Construction Hub',
      subheading: 'Ready to build your career with a strong foundation? Check out our range of building and construction courses for tradies and get started!',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      bgColor: 'bg-orange-50',
      courses: [
        {
          code: 'CPC40320',
          title: 'Certificate IV in Building Project Support (Estimator)',
          description: 'Are you ready to become a building estimator/scheduler? Get in touch with one of our friendly support people to learn more or continue reading below.',
          location: 'Port Melbourne campus',
          studentType: 'International'
        },
        {
          code: 'CPC30220',
          title: 'Certificate III in Carpentry',
          description: 'Develop practical carpentry skills and learn to work with timber, steel, and other building materials in residential and commercial construction.',
          location: 'Orange campus',
          studentType: 'Domestic'
        },
        {
          code: 'CPC40120',
          title: 'Certificate IV in Building and Construction',
          description: 'Advance your construction career with project management skills, building codes knowledge, and leadership capabilities.',
          location: 'Sydney campus',
          studentType: 'International'
        },
        {
          code: 'CPC50220',
          title: 'Diploma of Building and Construction',
          description: 'Comprehensive program covering construction management, contract administration, and building technology for senior roles.',
          location: 'Melbourne campus',
          studentType: 'Domestic'
        },
        {
          code: 'CPC31020',
          title: 'Certificate III in Bricklaying/Blocklaying',
          description: 'Master the art of bricklaying and blocklaying with hands-on training in traditional and modern construction techniques.',
          location: 'Orange campus',
          studentType: 'Domestic'
        },
        {
          code: 'CPC32020',
          title: 'Certificate III in Painting and Decorating',
          description: 'Learn professional painting techniques, surface preparation, and decorative finishes for residential and commercial projects.',
          location: 'Port Melbourne campus',
          studentType: 'International'
        },
        {
          code: 'CPC33020',
          title: 'Certificate III in Plumbing',
          description: 'Comprehensive plumbing training covering installation, maintenance, and repair of water, gas, and drainage systems.',
          location: 'Sydney campus',
          studentType: 'Domestic'
        },
        {
          code: 'CPC30620',
          title: 'Certificate III in Roof Tiling',
          description: 'Specialized training in roof tiling techniques, safety procedures, and installation of various roofing materials.',
          location: 'Melbourne campus',
          studentType: 'International'
        }
      ]
    },
    {
      id: 'business-leadership',
      heading: 'Business & Leadership Hub',
      subheading: 'Develop your business acumen and leadership skills with our comprehensive range of business courses designed for future leaders.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      bgColor: 'bg-blue-50',
      courses: [
        {
          code: 'BSB50420',
          title: 'Diploma of Leadership and Management',
          description: 'Develop essential leadership skills and learn to manage teams effectively in dynamic business environments.',
          location: 'Orange campus',
          studentType: 'Domestic'
        },
        {
          code: 'BSB40520',
          title: 'Certificate IV in Leadership and Management',
          description: 'Build foundational management skills and learn to lead small teams with confidence and effectiveness.',
          location: 'Sydney campus',
          studentType: 'International'
        },
        {
          code: 'BSB50320',
          title: 'Diploma of Marketing and Communication',
          description: 'Master modern marketing strategies, digital communication, and brand management for competitive business advantage.',
          location: 'Melbourne campus',
          studentType: 'Domestic'
        },
        {
          code: 'BSB30120',
          title: 'Certificate III in Business',
          description: 'Essential business skills covering administration, customer service, and workplace communication for entry-level positions.',
          location: 'Port Melbourne campus',
          studentType: 'International'
        },
        {
          code: 'BSB50820',
          title: 'Diploma of Project Management',
          description: 'Comprehensive project management training covering planning, execution, and delivery of complex business projects.',
          location: 'Orange campus',
          studentType: 'Domestic'
        },
        {
          code: 'BSB40820',
          title: 'Certificate IV in Marketing and Communication',
          description: 'Learn marketing fundamentals, social media strategies, and communication techniques for modern business success.',
          location: 'Sydney campus',
          studentType: 'International'
        },
        {
          code: 'BSB50620',
          title: 'Diploma of Human Resources Management',
          description: 'Develop expertise in recruitment, employee relations, and HR strategy to drive organizational success.',
          location: 'Melbourne campus',
          studentType: 'Domestic'
        },
        {
          code: 'BSB40920',
          title: 'Certificate IV in Small Business Management',
          description: 'Perfect for entrepreneurs and small business owners looking to develop management and operational skills.',
          location: 'Port Melbourne campus',
          studentType: 'International'
        }
      ]
    },
    {
      id: 'hospitality-tourism',
      heading: 'Hospitality & Tourism Hub',
      subheading: 'Join the exciting world of hospitality and tourism with our industry-focused courses that prepare you for global career opportunities.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      bgColor: 'bg-green-50',
      courses: [
        {
          code: 'SIT50422',
          title: 'Diploma of Hospitality Management',
          description: 'Comprehensive hospitality management program covering operations, customer service, and business development in the hospitality industry.',
          location: 'Sydney campus',
          studentType: 'International'
        },
        {
          code: 'SIT40521',
          title: 'Certificate IV in Kitchen Management',
          description: 'Advanced culinary skills and kitchen management training for aspiring head chefs and kitchen supervisors.',
          location: 'Melbourne campus',
          studentType: 'Domestic'
        },
        {
          code: 'SIT30821',
          title: 'Certificate III in Commercial Cookery',
          description: 'Professional cooking skills and food preparation techniques for commercial kitchen environments and restaurants.',
          location: 'Orange campus',
          studentType: 'International'
        },
        {
          code: 'SIT50122',
          title: 'Diploma of Travel and Tourism Management',
          description: 'Explore the tourism industry with comprehensive training in travel planning, destination management, and customer service.',
          location: 'Port Melbourne campus',
          studentType: 'Domestic'
        },
        {
          code: 'SIT40422',
          title: 'Certificate IV in Hospitality',
          description: 'Develop supervisory skills and advanced hospitality knowledge for leadership roles in hotels, restaurants, and events.',
          location: 'Sydney campus',
          studentType: 'International'
        },
        {
          code: 'SIT31021',
          title: 'Certificate III in Hospitality',
          description: 'Foundation hospitality skills covering food service, accommodation services, and customer interaction.',
          location: 'Melbourne campus',
          studentType: 'Domestic'
        },
        {
          code: 'SIT40722',
          title: 'Certificate IV in Patisserie',
          description: 'Specialized pastry and dessert making skills for professional patisseries, hotels, and fine dining establishments.',
          location: 'Orange campus',
          studentType: 'International'
        },
        {
          code: 'SIT50322',
          title: 'Diploma of Event Management',
          description: 'Plan and execute successful events with training in project management, vendor coordination, and client relations.',
          location: 'Port Melbourne campus',
          studentType: 'Domestic'
        }
      ]
    },
    {
      id: 'health-community',
      heading: 'Health & Community Hub',
      subheading: 'Make a difference in people\'s lives with our health and community services courses that prepare you for rewarding careers in care.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      bgColor: 'bg-purple-50',
      courses: [
        {
          code: 'CHC43015',
          title: 'Certificate IV in Ageing Support',
          description: 'Provide quality care and support for elderly clients in residential and community settings with compassion and professionalism.',
          location: 'Orange campus',
          studentType: 'Domestic'
        },
        {
          code: 'CHC33021',
          title: 'Certificate III in Individual Support',
          description: 'Essential skills for supporting people with disabilities, elderly clients, and those requiring home and community care.',
          location: 'Sydney campus',
          studentType: 'International'
        },
        {
          code: 'CHC52021',
          title: 'Diploma of Community Services',
          description: 'Advanced community work skills for case management, program development, and client advocacy in social services.',
          location: 'Melbourne campus',
          studentType: 'Domestic'
        },
        {
          code: 'HLT33115',
          title: 'Certificate III in Health Services Assistance',
          description: 'Support healthcare teams in hospitals and clinics with patient care, administration, and clinical assistance skills.',
          location: 'Port Melbourne campus',
          studentType: 'International'
        },
        {
          code: 'CHC43121',
          title: 'Certificate IV in Mental Health Peer Work',
          description: 'Specialized training for providing peer support to people experiencing mental health challenges and recovery.',
          location: 'Orange campus',
          studentType: 'Domestic'
        },
        {
          code: 'CHC30221',
          title: 'Certificate III in School Based Education Support',
          description: 'Support students and teachers in educational settings with classroom assistance and learning support skills.',
          location: 'Sydney campus',
          studentType: 'International'
        },
        {
          code: 'CHC50121',
          title: 'Diploma of Early Childhood Education and Care',
          description: 'Comprehensive early childhood education program preparing you to lead and educate young children.',
          location: 'Melbourne campus',
          studentType: 'Domestic'
        },
        {
          code: 'HLT43015',
          title: 'Certificate IV in Allied Health Assistance',
          description: 'Support allied health professionals in physiotherapy, occupational therapy, and other rehabilitation services.',
          location: 'Port Melbourne campus',
          studentType: 'International'
        }
      ]
    },
    {
      id: 'creative-design',
      heading: 'Creative & Design Hub',
      subheading: 'Unleash your creativity and turn your artistic passion into a professional career with our innovative design and creative courses.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      bgColor: 'bg-pink-50',
      courses: [
        {
          code: 'CUA50720',
          title: 'Diploma of Graphic Design',
          description: 'Master visual communication, branding, and digital design tools to create compelling graphics for print and digital media.',
          location: 'Melbourne campus',
          studentType: 'International'
        },
        {
          code: 'CUA40720',
          title: 'Certificate IV in Design',
          description: 'Foundation design skills covering visual elements, design principles, and creative problem-solving across multiple disciplines.',
          location: 'Sydney campus',
          studentType: 'Domestic'
        },
        {
          code: 'ICT50220',
          title: 'Diploma of Information Technology (Web Development)',
          description: 'Comprehensive web development training covering front-end and back-end technologies for modern web applications.',
          location: 'Orange campus',
          studentType: 'International'
        },
        {
          code: 'CUA31020',
          title: 'Certificate III in Visual Arts',
          description: 'Explore various artistic mediums and develop your creative skills in drawing, painting, sculpture, and mixed media.',
          location: 'Port Melbourne campus',
          studentType: 'Domestic'
        },
        {
          code: 'CUA51020',
          title: 'Diploma of Screen and Media',
          description: 'Film production, video editing, and multimedia content creation for television, online media, and entertainment industry.',
          location: 'Melbourne campus',
          studentType: 'International'
        },
        {
          code: 'CUA40920',
          title: 'Certificate IV in Photography and Photo Imaging',
          description: 'Professional photography techniques, digital imaging, and commercial photography for various industry applications.',
          location: 'Sydney campus',
          studentType: 'Domestic'
        },
        {
          code: 'CUA50420',
          title: 'Diploma of Interior Design',
          description: 'Create functional and beautiful interior spaces with training in space planning, color theory, and design software.',
          location: 'Orange campus',
          studentType: 'International'
        },
        {
          code: 'ICT40120',
          title: 'Certificate IV in Information Technology',
          description: 'Essential IT skills covering networking, cybersecurity, and system administration for modern technology environments.',
          location: 'Port Melbourne campus',
          studentType: 'Domestic'
        }
      ]
    }
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
                <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
                  Discover your passion and build your future with our comprehensive range of 
                  industry-focused courses designed for success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => scrollToSection('building-construction')}
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
                      onClick={() => setShowApplyModal(true)}
                      className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
                    >
                      Apply Online
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