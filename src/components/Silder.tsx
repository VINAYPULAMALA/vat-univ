import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';

interface CarouselProps {
  items: React.ReactNode[]; // array of JSX (images, text, etc.)
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dots?: boolean;
  infinite?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  slidesToShow = 4,
  slidesToScroll = 4,
  autoplay = true,
  autoplaySpeed = 3000,
  dots = true,
  infinite = true,
}) => {
  const settings = {
    dots,
    infinite,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    autoplay,
    autoplaySpeed,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, slidesToShow),
          slidesToScroll: Math.min(3, slidesToScroll),
          infinite,
          dots,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(2, slidesToShow),
          slidesToScroll: Math.min(2, slidesToScroll),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full overflow-hidden">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2">
            {item}
          </div>
        ))}
      </Slider>
    </div>
  );
};