import React from 'react';
import { Calendar, Clock, ArrowRight, Sparkles, Camera } from 'lucide-react';

const News: React.FC = () => {
  const newsItems = [
    {
      title: "Orange University Receives $2M Research Grant for Sustainable Agriculture",
      excerpt: "Our agriculture department has been awarded a significant grant to develop innovative farming practices...",
      date: "March 15, 2024",
      readTime: "3 min read",
      image: "https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      title: "New Engineering Building Opens with State-of-the-Art Facilities",
      excerpt: "Students now have access to cutting-edge laboratories and collaborative spaces in our newest facility...",
      date: "March 10, 2024",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      title: "International Student Exchange Program Expands to 20 Countries",
      excerpt: "Orange University continues to strengthen global partnerships with new exchange agreements...",
      date: "March 5, 2024",
      readTime: "2 min read",
      image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative group">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:-rotate-12" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-600 bg-clip-text text-transparent relative inline-block">
              Latest News & Events
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/80 to-amber-200/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </h2>
            <Sparkles className="w-8 h-8 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:rotate-12" />
          </div>

          <div className="max-w-2xl mx-auto relative">
            <p className="text-xl text-gray-600 mb-4 font-medium">
              <Camera className="inline-block w-6 h-6 text-orange-500 mr-2 -mt-1" />
              Stay up to date with the latest from
              <span className="relative px-2 mx-1 bg-gradient-to-r from-amber-100 to-orange-100">
                Orange University
                <div className="absolute inset-0 bg-white/50 mix-blend-overlay animate-pulse"></div>
              </span>
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-300 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div 
                className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{item.date}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{item.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <button className="text-orange-600 font-medium hover:text-orange-700 transition-colors flex items-center">
                  Read More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;