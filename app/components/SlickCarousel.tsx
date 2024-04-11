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
    <section className="overflow-hidden bg-black rounded-lg">
      <Search />
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {people.map((p) => {
            const { name, image, id, quote, title } = p;
            return (
              <article key={id}>
                <div className="relative ml-4 mr-4 md:ml-10 border border-red-900 md:mr-10 h-96 mb-4 mx-1 rounded-lg shadow-lg">
                  <Image
                    src={image}
                    alt={name}
                    className="bg-black object-cover w-full h-full rounded-lg"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black bg-opacity-50 rounded-lg">
                    <p className="text-xl">{quote}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SlickCarousel;
