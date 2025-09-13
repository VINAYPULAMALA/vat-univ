import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
  subItems?: DropdownItem[];
}

interface MenuItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showReachOutModal, setShowReachOutModal] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const subDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems: MenuItem[] = [
    {
      label: 'OUR COURSES',
      dropdown: [
        {
          label: 'Domestic Students',
          href: '#',
          subItems: [
            { label: 'Undergraduate Programs', href: '#' },
            { label: 'Postgraduate Programs', href: '#' },
            { label: 'Research Degrees', href: '#' },
            { label: 'Short Courses', href: '#' },
            { label: 'Professional Development', href: '#' }
          ]
        },
        {
          label: 'International Students',
          href: '#',
          subItems: [
            { label: 'English Language Programs', href: '#' },
            { label: 'Foundation Programs', href: '#' },
            { label: 'Undergraduate Degrees', href: '#' },
            { label: 'Postgraduate Degrees', href: '#' },
            { label: 'Student Support Services', href: '#' }
          ]
        },
        {
          label: 'Study Tour Program',
          href: '#',
          subItems: [
            { label: 'Short-term Programs', href: '#' },
            { label: 'Cultural Immersion', href: '#' },
            { label: 'Academic Exchange', href: '#' },
            { label: 'Industry Visits', href: '#' },
            { label: 'Application Process', href: '#' }
          ]
        }
      ]
    },
    {
      label: 'WHY ORANGE',
      href: '/whyorange',
      dropdown: [
        {
          label: 'What We Offer',
          href: '#',
          subItems: [
            { label: 'Academic Excellence', href: '#' },
            { label: 'Industry Connections', href: '#' },
            { label: 'Research Opportunities', href: '#' },
            { label: 'Student Support', href: '#' },
            { label: 'Campus Facilities', href: '#' }
          ]
        },
        {
          label: 'Our History',
          href: '#',
          subItems: [
            { label: 'Foundation Story', href: '#' },
            { label: 'Key Milestones', href: '#' },
            { label: 'Notable Alumni', href: '#' },
            { label: 'Heritage Buildings', href: '#' },
            { label: 'Timeline', href: '#' }
          ]
        },
        {
          label: 'Our Mission',
          href: '#',
          subItems: [
            { label: 'Vision Statement', href: '#' },
            { label: 'Core Values', href: '#' },
            { label: 'Strategic Plan', href: '#' },
            { label: 'Community Commitment', href: '#' },
            { label: 'Sustainability Goals', href: '#' }
          ]
        },
        {
          label: 'Meet Our Team',
          href: '#',
          subItems: [
            { label: 'Leadership Team', href: '#' },
            { label: 'Academic Staff', href: '#' },
            { label: 'Support Staff', href: '#' },
            { label: 'Board Members', href: '#' },
            { label: 'Advisory Council', href: '#' }
          ]
        },
        {
          label: 'Awards',
          href: '#',
          subItems: [
            { label: 'Teaching Excellence', href: '#' },
            { label: 'Research Recognition', href: '#' },
            { label: 'Industry Partnerships', href: '#' },
            { label: 'Student Achievements', href: '#' },
            { label: 'Community Awards', href: '#' }
          ]
        }
      ]
    },
    {
      label: 'HOW TO APPLY',
      dropdown: [
        {
          label: 'Application Process',
          href: '#',
          subItems: [
            { label: 'Step-by-Step Guide', href: '#' },
            { label: 'Required Documents', href: '#' },
            { label: 'Application Deadlines', href: '#' },
            { label: 'Entry Requirements', href: '#' },
            { label: 'Assessment Criteria', href: '#' }
          ]
        },
        {
          label: 'Admission Requirements',
          href: '#',
          subItems: [
            { label: 'Academic Prerequisites', href: '#' },
            { label: 'English Proficiency', href: '#' },
            { label: 'Portfolio Requirements', href: '#' },
            { label: 'Interview Process', href: '#' },
            { label: 'Special Considerations', href: '#' }
          ]
        },
        {
          label: 'Financial Aid',
          href: '#',
          subItems: [
            { label: 'Scholarships', href: '#' },
            { label: 'Student Loans', href: '#' },
            { label: 'Payment Plans', href: '#' },
            { label: 'Work Study Programs', href: '#' },
            { label: 'Emergency Assistance', href: '#' }
          ]
        },
        {
          label: 'International Applications',
          href: '#',
          subItems: [
            { label: 'Visa Requirements', href: '#' },
            { label: 'Document Translation', href: '#' },
            { label: 'Health Insurance', href: '#' },
            { label: 'Accommodation Options', href: '#' },
            { label: 'Orientation Programs', href: '#' }
          ]
        },
        {
          label: 'Support Services',
          href: '#',
          subItems: [
            { label: 'Application Assistance', href: '#' },
            { label: 'Career Counseling', href: '#' },
            { label: 'Academic Advising', href: '#' },
            { label: 'Student Mentoring', href: '#' },
            { label: 'Disability Support', href: '#' }
          ]
        }
      ]
    },
    {
      label: 'COMMUNITY',
      dropdown: [
        {
          label: 'Student Life',
          href: '#',
          subItems: [
            { label: 'Clubs & Societies', href: '#' },
            { label: 'Sports & Recreation', href: '#' },
            { label: 'Cultural Events', href: '#' },
            { label: 'Student Government', href: '#' },
            { label: 'Volunteer Opportunities', href: '#' }
          ]
        },
        {
          label: 'Alumni Network',
          href: '#',
          subItems: [
            { label: 'Alumni Directory', href: '#' },
            { label: 'Networking Events', href: '#' },
            { label: 'Mentorship Program', href: '#' },
            { label: 'Career Services', href: '#' },
            { label: 'Alumni Benefits', href: '#' }
          ]
        },
        {
          label: 'Industry Partnerships',
          href: '#',
          subItems: [
            { label: 'Corporate Partners', href: '#' },
            { label: 'Internship Programs', href: '#' },
            { label: 'Research Collaborations', href: '#' },
            { label: 'Guest Lectures', href: '#' },
            { label: 'Job Placement', href: '#' }
          ]
        },
        {
          label: 'Community Engagement',
          href: '#',
          subItems: [
            { label: 'Local Partnerships', href: '#' },
            { label: 'Community Projects', href: '#' },
            { label: 'Public Lectures', href: '#' },
            { label: 'Outreach Programs', href: '#' },
            { label: 'Social Impact', href: '#' }
          ]
        },
        {
          label: 'Events & News',
          href: '#',
          subItems: [
            { label: 'Upcoming Events', href: '#' },
            { label: 'News & Updates', href: '#' },
            { label: 'Press Releases', href: '#' },
            { label: 'Media Coverage', href: '#' },
            { label: 'Newsletter', href: '#' }
          ]
        }
      ]
    },
    {
      label: 'INFORMATION',
      dropdown: [
        {
          label: 'Academic Information',
          href: '#',
          subItems: [
            { label: 'Course Catalog', href: '#' },
            { label: 'Academic Calendar', href: '#' },
            { label: 'Grading System', href: '#' },
            { label: 'Academic Policies', href: '#' },
            { label: 'Graduation Requirements', href: '#' }
          ]
        },
        {
          label: 'Campus Resources',
          href: '#',
          subItems: [
            { label: 'Library Services', href: '#' },
            { label: 'IT Support', href: '#' },
            { label: 'Health Services', href: '#' },
            { label: 'Counseling Services', href: '#' },
            { label: 'Accessibility Services', href: '#' }
          ]
        }
      ]
    },
    {
      label: 'CONTACT',
      href: '#contact'
    }
  ];

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 150);
  };

  const handleSubMouseEnter = (label: string) => {
    if (subDropdownTimeoutRef.current) {
      clearTimeout(subDropdownTimeoutRef.current);
    }
    setActiveSubDropdown(label);
  };

  const handleSubMouseLeave = () => {
    subDropdownTimeoutRef.current = setTimeout(() => {
      setActiveSubDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      if (subDropdownTimeoutRef.current) {
        clearTimeout(subDropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 hover:text-orange-200 transition-all duration-300 cursor-pointer">
                <Phone className="w-4 h-4" />
                <span>(02) 6365 7500</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-orange-200 transition-all duration-300 cursor-pointer">
                <Mail className="w-4 h-4" />
                <span>info@orange.edu.au</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-orange-200 transition-all duration-300">Staff Portal</a>
              <a href="#" className="hover:text-orange-200 transition-all duration-300">Student Portal</a>
              <a href="#" className="hover:text-orange-200 transition-all duration-300">Library</a>
              <button 
                onClick={() => setShowApplyModal(true)}
                className="bg-white text-orange-600 px-6 py-1.5 rounded-full text-sm font-medium hover:bg-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Apply Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 text-transparent bg-clip-text">Orange</div>
              <div className="ml-2 text-sm text-gray-600 border-l-2 border-orange-200 pl-2">
                <div className="font-semibold">UNIVERSITY</div>
                <div className="text-xs tracking-wider">AUSTRALIA</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-2">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href || (item.label === 'OUR COURSES' ? '/courses' : '#')}
                    className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-orange-50 flex items-center group-hover:shadow-sm"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" />}
                  </a>
                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <div
                          key={dropdownItem.label}
                          className="relative"
                          onMouseEnter={() => dropdownItem.subItems && handleSubMouseEnter(dropdownItem.label)}
                          onMouseLeave={handleSubMouseLeave}
                        >
                          <a
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors flex items-center justify-between"
                          >
                            {dropdownItem.label}
                            {dropdownItem.subItems && <ChevronRight className="w-4 h-4" />}
                          </a>

                          {/* Sub-dropdown */}
                          {dropdownItem.subItems && activeSubDropdown === dropdownItem.label && (
                            <div className="absolute top-0 left-full ml-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                              {dropdownItem.subItems.map((subItem) => (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors text-sm"
                                >
                                  {subItem.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 text-gray-600 cursor-pointer hover:text-orange-600 transition-colors" />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 max-h-96 overflow-y-auto">
            <nav className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href || '#'}
                    className="block text-gray-700 hover:text-orange-600 font-medium py-3 px-2 border-b border-gray-100"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <button 
                  onClick={() => setShowApplyModal(true)}
                  className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  Apply Online
                </button>
                <button 
                  onClick={() => setShowReachOutModal(true)}
                  className="w-full border border-orange-600 text-orange-600 py-3 px-4 rounded-lg font-medium hover:bg-orange-50 transition-colors"
                >
                  Reach Out
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

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
                    Program of Interest *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a program</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="postgraduate">Postgraduate</option>
                    <option value="research">Research</option>
                    <option value="international">International Program</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us more about your interests..."
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

      {/* Reach Out Modal */}
      {showReachOutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Reach Out</h2>
                <button
                  onClick={() => setShowReachOutModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
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
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="What can we help you with?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-orange-600 mr-3" />
                    <span>(02) 6365 7500</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-orange-600 mr-3" />
                    <span>info@orange.edu.au</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Reach Out Button */}
      <button
        onClick={() => setShowReachOutModal(true)}
        className="fixed bottom-6 right-6 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-colors z-40"
      >
        <Mail className="w-6 h-6" />
      </button>
    </>
  );
};

export default Header;