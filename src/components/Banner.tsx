import React from "react";

interface BannerProps {
  schoolName: string;
  headline: string;
  description: string;
  buttonLabel: string;
  imageSrc: string;
}

const Banner: React.FC<BannerProps> = ({
  schoolName,
  headline,
  description,
  buttonLabel,
  imageSrc
}) => {
  return (
    <section className="relative bg-white pb-8">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-purple-200 via-purple-100 to-white rounded-2xl" />
        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 rounded-full bg-purple-300 opacity-30" style={{zIndex:1}}></div>
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 rounded-full bg-purple-500 opacity-20" style={{zIndex:1}}></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6 pt-12">
        <div className="md:w-1/2 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block text-purple-700">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2l7 4-7 4-7-4 7-4zm0 8v10m0 0l-5-2.5m5 2.5l5-2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="font-semibold text-gray-700 text-lg">{schoolName}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-2">{headline}</h1>
          <p className="text-gray-700 text-lg mb-4">{description}</p>
          <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-purple-800 transition-colors">{buttonLabel}</button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img src={imageSrc} alt="School Admission Banner" className="rounded-xl shadow-2xl w-[320px] h-[380px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;