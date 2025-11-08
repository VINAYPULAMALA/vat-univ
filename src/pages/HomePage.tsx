import React from 'react';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Facilities from '../components/Facilities';
import Testimonials from '../components/Testimonials';
import Achievements from '../components/Achievements';
import FAQ from '../components/FAQ';
import ReachOut from '../components/ReachOut';
import News from '../components/News';
import college_1 from '../../assests/college_1.png';
import { Users, Globe, BookOpen, Trophy } from "lucide-react";

const HomePage = () => (
  <>
    <Hero />
    <Programs />
    <About
      title="About VAT"
      description={[
        'Study! Your Future Is Here!',
        'At VAT (Vocational Augment Training), We’re not just an RTO – we’re a community that supports and empowers each student. We welcome you to join us and take the first step toward a rewarding and successful career. To be a transformative leader in vocational education by engaging, educating, equipping, and empowering individuals to reach their full potential through practical, high-quality learning experiences....'
      ]
    }
      buttonText="Discover Our Story"
      imageUrl={college_1}
      href='/whyorange'
      stats={[
        { icon: Users, number: "15,000+", label: "Students" },
        { icon: Globe, number: "60+", label: "Countries" },
        { icon: BookOpen, number: "200+", label: "Programs" },
        { icon: Trophy, number: "50+", label: "Years Excellence" }
      ]}
    />
    <Gallery />
    <Facilities />
    <Testimonials />
    <Achievements />
    <FAQ />
    <ReachOut />
    <News />
  </>
);

export default HomePage;
