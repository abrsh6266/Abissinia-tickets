"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { list } from "../data";
import { useState } from "react";
import Image from "next/image";
import Search from "./Search";

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
    <section className=" overflow-hidden bg-gradient-to-b from-white via-gray-500 to-gray-500">
      <Search />
      <Slider {...settings} >
        {people.map((p) => {
          const { name, image, id, quote, title } = p;
          return (
            <article key={id}>
              <div className="bg-gradient-to-b from-gray-400 via-gray-500 to-gray-500 relative w-full h-96 mb-4 mx-1 rounded-lg shadow-lg">
                <Image
                  src={image}
                  alt={name}
                  className="bg-gray-500 object-cover w-full h-full"
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
