import React from "react";

interface AboutProps {
  title: string;
  description: string[];
  buttonText: string;
  imageUrl: string;
  href: string;
  stats: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    number: string;
    label: string;
  }[];
  index?: number; // 👈 New prop
}

const About: React.FC<AboutProps> = ({ 
  title,
  description,
  buttonText,
  imageUrl,
  stats,
  href,
  index = 0,
}) => {
  const imagePosition = index % 2 === 0 ? "right" : "left";

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated grid configuration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Add order control */}
          <div className={`relative group ${imagePosition === 'left' ? 'lg:order-2' : ''}`}>
            <div className="absolute -inset-1 bg-orange-100/50 rounded-2xl transform -skew-y-3 blur-xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative space-y-8">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  .
                </span>
              </h2>
              {description.map((para, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                aria-label={`Learn more about ${title}`}
              >
                {buttonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-3 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Container - Add order control */}
          <div className={`relative transform hover:scale-[0.98] transition duration-700 ${imagePosition === 'left' ? 'lg:order-1' : ''}`}>
            <div className="absolute -inset-2 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-8 border-white rotate-3 hover:rotate-0 transition duration-700">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition duration-500">
                    <Icon className="w-10 h-10 text-orange-600" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-gray-700">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
