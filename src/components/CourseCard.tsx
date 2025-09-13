import React from 'react';
import { MapPin, Users } from 'lucide-react';

interface CourseCardProps {
  code: string;
  title: string;
  description: string;
  location: string;
  studentType: string;
  onApply: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  code,
  title,
  description,
  location,
  studentType,
  onApply
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:border-orange-500 border-2 border-transparent transition-all duration-300 transform hover:scale-105 min-w-[320px] flex-shrink-0">
      <div className="mb-4">
        <p className="text-sm text-gray-500 font-medium mb-2">{code}</p>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{description}</p>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-orange-600" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Users className="w-4 h-4 mr-2 text-orange-600" />
          <span>{studentType}</span>
        </div>
      </div>
      
      <button
        onClick={onApply}
        className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
      >
        Apply Online
      </button>
    </div>
  );
};

export default CourseCard;