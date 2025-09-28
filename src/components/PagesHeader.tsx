import React from "react";
import { Carousel } from "../components/Silder"; // your carousel component

interface PagesHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  carouselItems: React.ReactNode[];
}

const PagesHeader: React.FC<PagesHeaderProps> = ({
  title,
  subtitle,
  description,
  carouselItems,
}) => {
  return (
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {title}
                <span className="block text-orange-200">{subtitle}</span>
              </h2>
              <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="animate-fade-in-right relative">
              <Carousel items={carouselItems} slidesToShow={1} slidesToScroll={1} />
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
  );
};

export default PagesHeader;
