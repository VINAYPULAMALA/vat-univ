import React from 'react';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import About from '../components/About';
import Library from '../components/Library';
import Gallery from '../components/Gallery';
import Facilities from '../components/Facilities';
import Testimonials from '../components/Testimonials';
import Achievements from '../components/Achievements';
import FAQ from '../components/FAQ';
import ReachOut from '../components/ReachOut';
import News from '../components/News';
import { Users, Globe, BookOpen, Trophy } from "lucide-react";

const HomePage = () => (
  <>
    <Hero />
    <Programs />
    <About
      title="Leading Education in Regional Australia"
      description={[
        'Orange University has been at the forefront...',
        'Our commitment to innovation...'
      ]}
      buttonText="Discover Our Story"
      imageUrl="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
      stats={[
        { icon: Users, number: "15,000+", label: "Students" },
        { icon: Globe, number: "60+", label: "Countries" },
        { icon: BookOpen, number: "200+", label: "Programs" },
        { icon: Trophy, number: "50+", label: "Years Excellence" }
      ]}
    />
    <Library />
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
