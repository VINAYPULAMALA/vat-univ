import React from 'react';
import { Microscope, Dumbbell, Utensils, Home, Wifi, Car } from 'lucide-react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      icon: Microscope,
      title: "Research Laboratories",
      description: "State-of-the-art labs equipped with the latest technology for cutting-edge research",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Advanced equipment", "Safety protocols", "24/7 access", "Expert supervision"]
    },
    {
      icon: Dumbbell,
      title: "Sports & Recreation",
      description: "Comprehensive fitness facilities including gym, pool, courts, and outdoor fields",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Olympic pool", "Modern gym", "Sports courts", "Fitness classes"]
    },
    {
      icon: Utensils,
      title: "Dining Services",
      description: "Multiple dining options with healthy, diverse, and affordable meal choices",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Multiple cafeterias", "Dietary options", "Meal plans", "Late night dining"]
    },
    {
      icon: Home,
      title: "Student Accommodation",
      description: "Comfortable on-campus housing with modern amenities and community spaces",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Single & shared rooms", "Common areas", "Study spaces", "24/7 security"]
    },
    {
      icon: Wifi,
      title: "Technology Services",
      description: "Campus-wide high-speed internet, computer labs, and technical support",
      image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Free WiFi", "Computer labs", "Tech support", "Software access"]
    },
    {
      icon: Car,
      title: "Transportation & Parking",
      description: "Convenient parking, shuttle services, and public transport connections",
      image: "https://images.pexels.com/photos/63294/autos-technology-vw-multi-storey-car-park-63294.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Student parking", "Shuttle service", "Bike storage", "Public transport"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Facilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class facilities designed to support your academic success and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{facility.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{facility.description}</p>
                    <ul className="space-y-2">
                      {facility.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-20 bg-orange-600 rounded-lg p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-orange-100">Buildings</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-orange-100">Acres</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-orange-100">Security</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-orange-100">WiFi Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;