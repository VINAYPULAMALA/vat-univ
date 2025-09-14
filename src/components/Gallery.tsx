import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { Sparkles, Camera } from "lucide-react";

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All" },
    { id: "campus", name: "Campus" },
    { id: "facilities", name: "Facilities" },
    { id: "events", name: "Events" },
    { id: "students", name: "Student Life" },
  ];

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "campus",
      title: "Main Campus Building",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "facilities",
      title: "Engineering Laboratory",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "students",
      title: "Studying",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "facilities",
      title: "University Library",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "events",
      title: "Graduation Ceremony",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "students",
      title: "Research Lab",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "facilities",
      title: "Computer Lab",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "campus",
      title: "Campus Grounds",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative group">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:-rotate-12" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-600 bg-clip-text text-transparent relative inline-block">
              Campus Gallery
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/80 to-amber-200/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </h2>
            <Sparkles className="w-8 h-8 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:rotate-12" />
          </div>

          <div className="max-w-2xl mx-auto relative">
            <p className="text-xl text-gray-600 mb-4 font-medium">
              <Camera className="inline-block w-6 h-6 text-orange-500 mr-2 -mt-1" />
              Explore Our Vibrant
              <span className="relative px-2 mx-1 bg-gradient-to-r from-amber-100 to-orange-100">
                University Life
                <div className="absolute inset-0 bg-white/50 mix-blend-overlay animate-pulse"></div>
              </span>
              Through These Moments
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-300 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative overflow-hidden px-8 py-3 rounded-full font-medium transition-all duration-300 group
                ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-400 to-amber-300 shadow-lg shadow-orange-200'
                    : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-white hover:shadow-md'
                }`
              }
            >
              <span className={`relative z-10 ${
                selectedCategory === category.id ? 'text-white' : 'text-gray-700'
              }`}>
                {category.name}
              </span>
              
              {/* Active state glow */}
              {selectedCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200/30 to-transparent mix-blend-screen"></div>
              )}
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">
                  {filteredImages[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
