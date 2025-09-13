import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      program: "Bachelor of Engineering",
      year: "Class of 2023",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "Orange University provided me with not just excellent education, but also the practical skills and industry connections that landed me my dream job. The professors are incredibly supportive and the facilities are world-class.",
      rating: 5
    },
    {
      name: "Michael Chen",
      program: "Master of Business Administration",
      year: "Class of 2022",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "The MBA program at Orange University transformed my career. The blend of theoretical knowledge and real-world case studies, combined with networking opportunities, gave me the confidence to start my own business.",
      rating: 5
    },
    {
      name: "Emma Williams",
      program: "Bachelor of Arts in Psychology",
      year: "Class of 2023",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "The psychology program here is outstanding. Small class sizes meant personalized attention from professors, and the research opportunities as an undergraduate were incredible. I felt truly prepared for my postgraduate studies.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      program: "Bachelor of Computer Science",
      year: "Class of 2024",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "The tech industry connections at Orange University are amazing. Through the career services and industry partnerships, I secured internships that led to a full-time offer before graduation. The curriculum is cutting-edge and relevant.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      program: "Bachelor of Environmental Science",
      year: "Class of 2022",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "Orange University's commitment to sustainability isn't just talk - it's embedded in everything they do. The hands-on field work and research opportunities gave me real experience that employers value.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-orange-100">
            Hear from our graduates about their Orange University experience
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-orange-100">Graduate Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-orange-100">Employment Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">4.8/5</div>
            <div className="text-orange-100">Average Rating</div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-gray-900 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Quote className="w-12 h-12 text-orange-600" />
            </div>
            
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl leading-relaxed mb-6 italic">
                "{testimonials[currentSlide].quote}"
              </p>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <div className="font-semibold text-lg">{testimonials[currentSlide].name}</div>
                <div className="text-orange-600 font-medium">{testimonials[currentSlide].program}</div>
                <div className="text-gray-600 text-sm">{testimonials[currentSlide].year}</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;