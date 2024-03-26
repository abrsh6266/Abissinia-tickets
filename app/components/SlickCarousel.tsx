"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { list } from "../data";
import { useState } from "react";
import Image from "next/image";

const SlickCarousel = () => {
  const [people, setPeople] = useState(list);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <section className=" overflow-hidden bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500">
      <Slider {...settings} >
        {people.map((p) => {
          const { name, image, id, quote, title } = p;
          return (
            <article key={id}>
              <div className="relative w-full h-96 mb-4 border-4 border-primary-200 shadow-lg">
                <Image
                  src={image}
                  alt={name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black bg-opacity-50">
                  <p className="text-xl">{quote}</p>
                </div>
              </div>
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
