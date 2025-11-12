import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import {
  Microscope,
  Dumbbell,
  Utensils,
  Home,
  Wifi,
  Car,
  Sparkles,
  Camera,
} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Facilities: React.FC = () => {
  const facilities = [
    {
      icon: Microscope,
      title: "Research Laboratories",
      description:
        "State-of-the-art labs equipped with the latest technology for cutting-edge research.",
      image:
        "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: [
        "Advanced equipment",
        "Safety protocols",
        "24/7 access",
        "Expert supervision",
      ],
    },
    {
      icon: Dumbbell,
      title: "Sports & Recreation",
      description:
        "Comprehensive fitness facilities including gym, pool, courts, and outdoor fields.",
      image:
        "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Olympic pool", "Modern gym", "Sports courts", "Fitness classes"],
    },
    {
      icon: Utensils,
      title: "Dining Services",
      description:
        "Multiple dining options with healthy, diverse, and affordable meal choices.",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: [
        "Multiple cafeterias",
        "Dietary options",
        "Meal plans",
        "Late night dining",
      ],
    },
    {
      icon: Home,
      title: "Student Accommodation",
      description:
        "Comfortable on-campus housing with modern amenities and community spaces.",
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: [
        "Single & shared rooms",
        "Common areas",
        "Study spaces",
        "24/7 security",
      ],
    },
    {
      icon: Wifi,
      title: "Technology Services",
      description:
        "Campus-wide high-speed internet, computer labs, and technical support.",
      image:
        "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Free WiFi", "Computer labs", "Tech support", "Software access"],
    },
    {
      icon: Car,
      title: "Transportation & Parking",
      description:
        "Convenient parking, shuttle services, and public transport connections.",
      image:
        "https://images.pexels.com/photos/63294/autos-technology-vw-multi-storey-car-park-63294.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: [
        "Student parking",
        "Shuttle service",
        "Bike storage",
        "Public transport",
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20 relative group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-orange-400 animate-bounce" />
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-amber-500 to-red-500 bg-clip-text text-transparent relative inline-block">
              Campus Facilities
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/80 to-amber-200/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
            </h2>
            <Sparkles className="w-8 h-8 text-amber-400 animate-bounce delay-200" />
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto  items-center justify-center">
            <Camera className="inline-block w-6 h-6 text-orange-500 mr-2 -mt-1" />
            World-class facilities to support{" "}
            <span className="font-semibold text-orange-600 mx-1">
              academic success
            </span>
            and{" "}
            <span className="font-semibold text-red-500">personal growth</span>.
          </p>
        </motion.div>

        {/* Facilities Slider */}
        <Slider {...settings}>
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={index}
                className="relative group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 mx-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="md:flex">
                  <div className="md:w-1/2 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-200 to-amber-100 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <Icon className="w-7 h-7 text-orange-600 group-hover:rotate-12 transition-transform duration-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {facility.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-5 leading-relaxed">
                      {facility.description}
                    </p>
                    <ul className="space-y-2">
                      {facility.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-base text-gray-600"
                        >
                          <div className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>

        {/* Quick Stats */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white shadow-2xl transform transition-all duration-500 hover:scale-[1.02] backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <StatBox end={50} duration={2000} label="Buildings" suffix="+" />
            <StatBox end={200} duration={2000} label="Acres" suffix="+" />
            <StatBox end={24} duration={2000} label="Security" suffix="/7" />
            <StatBox end={100} duration={2000} label="WiFi Coverage" suffix="%" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;

/* ---------------------------------------------
   Stat Counter Components
--------------------------------------------- */

const StatBox: React.FC<{
  end: number;
  duration: number;
  label: string;
  suffix?: string;
}> = ({ end, duration, label, suffix = "" }) => (
  <div>
    <div className="text-5xl font-extrabold mb-3 drop-shadow-md">
      <NumberCounter end={end} duration={duration} />
      {suffix}
    </div>
    <div className="text-orange-100 text-lg">{label}</div>
  </div>
);

const NumberCounter: React.FC<{ end: number; duration: number }> = ({
  end,
  duration,
}) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTimestamp) startTimestamp = currentTime;
        const progress = (currentTime - startTimestamp) / duration;
        setCount(Math.min(Math.ceil(progress * end), end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};
