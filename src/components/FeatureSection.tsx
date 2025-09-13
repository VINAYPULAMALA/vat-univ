import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  description: string;
  secondaryDescription?: string;
  features: Feature[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  secondaryDescription,
  features,
  imageSrc,
  imageAlt,
  reversed = false,
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
            <div className="space-y-4">
              <p className="text-gray-600">{description}</p>
              {secondaryDescription && (
                <p className="text-gray-600">{secondaryDescription}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
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
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg shadow-xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;