import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CourseCard from './CourseCard';

interface Course {
  code: string;
  title: string;
  description: string;
  location: string;
  studentType: string;
}

interface CourseCarouselProps {
  courses: Course[];
  onApply: () => void;
}

const CourseCarousel: React.FC<CourseCarouselProps> = ({ courses, onApply }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 320 + 24; // card width + gap
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    const newIndex = currentIndex + 1 >= courses.length ? 0 : currentIndex + 1;
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex - 1 < 0 ? courses.length - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            code={course.code}
            title={course.title}
            description={course.description}
            location={course.location}
            studentType={course.studentType}
            onApply={onApply}
          />
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {courses.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-orange-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseCarousel;