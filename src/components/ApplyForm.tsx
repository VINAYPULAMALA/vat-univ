import React, { useState } from 'react';
import { X, Search, Mail, Phone, Calendar, MapPin, User, Briefcase, BookOpen, Info, ChevronRight } from 'lucide-react';

interface CourseInfo {
  code: string;
  title: string;
  provider: string;
  rtoNumber: string;
  cricos: string;
  abn: string;
}

interface CourseDetail {
  label: string;
  value: string;
  isLink?: boolean;
  linkText?: string;
}

interface ApplyFormProps {
  courseInfo: CourseInfo;
  courseDetails: CourseDetail[];
  description: string;
  onClose?: () => void;
  isModal?: boolean;
}

const ApplyForm: React.FC<ApplyFormProps> = ({
  courseInfo,
  courseDetails,
  description,
  onClose,
  isModal = false
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    citizenship: '',
    previousEducation: '',
    employmentStatus: '',
    additionalInfo: ''
  });
  
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will contact you soon.');
  };
  
  const handleFocus = (section: string) => {
    setActiveSection(section);
  };
  
  const handleBlur = () => {
    setActiveSection(null);
  };

  const content = (
    <div className={`bg-white ${isModal ? 'rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto' : ''}`}>
      {isModal && onClose && (
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center rounded-t-2xl z-10">
          <h2 className="text-2xl font-bold text-gray-900">Course Application</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
        {/* Left Side - Course Information */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 lg:p-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-300 rounded-full opacity-20 -ml-24 -mb-24"></div>
          
          <div className="relative">
            <div className="flex items-center mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg transform -rotate-3">
                <Search className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Find out more about the <span className="text-orange-600">{courseInfo.title}</span>
                </h1>
              </div>
            </div>

            <div className="mb-10 bg-white bg-opacity-70 p-6 rounded-2xl shadow-sm backdrop-blur-sm">
              <p className="text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>

            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 transform hover:-translate-y-1">
              <span>ENQUIRE NOW</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Side - Course Details and Application */}
        <div className="p-8 lg:p-12 bg-white">
          <div className="mb-10">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-3">{courseInfo.code}</div>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">{courseInfo.title}</h2>
            <p className="text-sm text-gray-600 mb-8 border-l-4 border-orange-200 pl-4 italic">
              This course is delivered by {courseInfo.provider} | RTO No. {courseInfo.rtoNumber} | CRICOS Provider Code: {courseInfo.cricos} | ABN: {courseInfo.abn}
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center">
              <Info className="w-5 h-5 mr-2 text-orange-500" />
              Course Information
            </h3>
            
            <div className="space-y-5 mb-10">
              {courseDetails.map((detail, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-lg hover:bg-orange-50 transition-colors">
                  <div className="font-semibold text-gray-900">{detail.label}</div>
                  <div className="sm:col-span-2 text-gray-700">
                    {detail.isLink ? (
                      <span>
                        {detail.value.split('(')[0]}
                        <a href="#" className="text-orange-600 hover:text-orange-700 font-medium hover:underline transition-all">
                          {detail.linkText || detail.value.match(/\((.*?)\)/)?.[1]}
                        </a>
                        {detail.value.includes(')') && detail.value.split(')')[1]}
                      </span>
                    ) : (
                      detail.value
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 mb-10 flex items-center justify-center space-x-2">
              <span>APPLY NOW</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Application Form */}
          <div className="border-t border-gray-200 pt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
              <User className="w-5 h-5 mr-2 text-orange-500" />
              Quick Application Form
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className={`relative transition-all duration-300 ${activeSection === 'firstName' ? 'transform -translate-y-1' : ''}`}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('firstName')}
                      onBlur={handleBlur}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                      placeholder="Your first name"
                    />
                    <User className="w-5 h-5 text-orange-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
                <div className={`relative transition-all duration-300 ${activeSection === 'lastName' ? 'transform -translate-y-1' : ''}`}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('lastName')}
                      onBlur={handleBlur}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                      placeholder="Your last name"
                    />
                    <User className="w-5 h-5 text-orange-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
              </div>

              <div className={`relative transition-all duration-300 ${activeSection === 'email' ? 'transform -translate-y-1' : ''}`}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="your.email@example.com"
                  />
                  <Mail className="w-5 h-5 text-orange-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div className={`relative transition-all duration-300 ${activeSection === 'phone' ? 'transform -translate-y-1' : ''}`}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="(02) 1234 5678"
                  />
                  <Phone className="w-5 h-5 text-orange-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div className={`relative transition-all duration-300 ${activeSection === 'dateOfBirth' ? 'transform -translate-y-1' : ''}`}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="dateOfBirth"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('dateOfBirth')}
                    onBlur={handleBlur}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                  />
                  <Calendar className="w-5 h-5 text-orange-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div className={`relative transition-all duration-300 ${activeSection === 'address' ? 'transform -translate-y-1' : ''}`}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('address')}
                    onBlur={handleBlur}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="Street address"
                  />
                  <MapPin className="w-5 h-5 text-orange-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className={`relative transition-all duration-300 ${activeSection === 'city' ? 'transform -translate-y-1' : ''}`}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('city')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className={`relative transition-all duration-300 ${activeSection === 'state' ? 'transform -translate-y-1' : ''}`}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <select
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('state')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md appearance-none bg-white"
                  >
                    <option value="">Select State</option>
                    <option value="NSW">NSW</option>
                    <option value="VIC">VIC</option>
                    <option value="QLD">QLD</option>
                    <option value="WA">WA</option>
                    <option value="SA">SA</option>
                    <option value="TAS">TAS</option>
                    <option value="ACT">ACT</option>
                    <option value="NT">NT</option>
                  </select>
                </div>
                <div className={`relative transition-all duration-300 ${activeSection === 'postcode' ? 'transform -translate-y-1' : ''}`}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postcode *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="postcode"
                      required
                      value={formData.postcode}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('postcode')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                      placeholder="2000"
                    />
                  </div>
                </div>
              </div>

              <div className={`relative transition-all duration-300 ${activeSection === 'citizenship' ? 'transform -translate-y-1' : ''}`}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Citizenship Status *
                </label>
                <select
                  name="citizenship"
                  required
                  value={formData.citizenship}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('citizenship')}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md appearance-none bg-white"
                >
                  <option value="">Select Citizenship Status</option>
                  <option value="australian">Australian Citizen</option>
                  <option value="permanent">Permanent Resident</option>
                  <option value="international">International Student</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={`relative transition-all duration-300 ${activeSection === 'previousEducation' ? 'transform -translate-y-1' : ''}`}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Education
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="previousEducation"
                    value={formData.previousEducation}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('previousEducation')}
                    onBlur={handleBlur}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="Highest level of education completed"
                  />
                  <BookOpen className="w-5 h-5 text-orange-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div className={`relative transition-all duration-300 ${activeSection === 'employmentStatus' ? 'transform -translate-y-1' : ''}`}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Status
                </label>
                <div className="relative">
                  <select
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('employmentStatus')}
                    onBlur={handleBlur}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md appearance-none bg-white"
                  >
                    <option value="">Select Employment Status</option>
                    <option value="employed">Employed Full-time</option>
                    <option value="parttime">Employed Part-time</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="student">Student</option>
                    <option value="retired">Retired</option>
                    <option value="other">Other</option>
                  </select>
                  <Briefcase className="w-5 h-5 text-orange-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div className={`relative transition-all duration-300 ${activeSection === 'additionalInfo' ? 'transform -translate-y-1' : ''}`}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <div className="relative">
                  <textarea
                    name="additionalInfo"
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('additionalInfo')}
                    onBlur={handleBlur}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="Any additional information or questions..."
                  ></textarea>
                  <Info className="w-5 h-5 text-orange-400 absolute left-3 top-6" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-4 flex items-center justify-center space-x-2"
              >
                <span>Submit Application</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        {content}
      </div>
    );
  }

  return content;
};

export default ApplyForm;