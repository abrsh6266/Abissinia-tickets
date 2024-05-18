"use client";
import Image from "next/image";
import SectionTitle2 from "../components/common/SectionTitle2";
import cinema6 from "/public/cinema/cinema6.jpg";
import SectionTitle from "../components/common/SectionTitle";
import AbissiniaMovies from "../components/common/AbissiniaMovies";

const Cinema = () => {
  return (
    <>
      <SectionTitle text="Cinema Services" />
      <div className="mt-8 grid gap-8  lg:grid-cols-12">
        <div className="lg:col-span-8 p-2">
          <div>
            <div className="md:text-xl text-gray-200 sm:text-lg italic lg:mx-20 pt-8">
              <p>
                Come and enjoy the best movie experience at our cinema. We offer
                a wide range of services to ensure your visit is enjoyable and
                memorable.
              </p>
              <Image src={cinema6} alt="cinema image" />
            </div>
          </div>
          <div>
            <div className="md:text-xl text-gray-200 sm:text-lg italic lg:mx-20 pt-8">
              <SectionTitle2 text="Online Booking and Reserved Seating" />
              <p>
                Skip the lines and reserve your seats in advance with our
                convenient online booking system, ensuring you get the best spot
                in the house.
              </p>
            </div>
          </div>
          <div>
            <div className="md:text-xl text-gray-200 sm:text-lg italic lg:mx-20 pt-8">
              <SectionTitle2 text="Loyalty Program" />
              <p>
                Join our loyalty program to earn points on every purchase,
                redeemable for free tickets, snacks, and exclusive rewards.
              </p>
            </div>
          </div>
          <div>
            <div className="md:text-xl text-gray-200 sm:text-lg italic lg:mx-20 pt-8">
              <SectionTitle2 text="Luxurious Seating Options" />
              <p>
                Enjoy our selection of seating options tailored to enhance your
                comfort. Choose from standard, premier, and sofa seats, all
                designed to provide maximum comfort. Whether you are looking for
                a cozy seat for an intimate date night or a spacious seat to
                stretch out and relax, we have got you covered.
              </p>
            </div>
          </div>
          <div>
            <div className="md:text-xl text-gray-200 sm:text-lg italic lg:mx-20 pt-8">
              <SectionTitle2 text="Luxurious Seating Options" />
              <p>
                Enjoy our selection of seating options tailored to enhance your
                comfort. Choose from standard, premier, and sofa seats, all
                designed to provide maximum comfort. Whether you are looking for
                a cozy seat for an intimate date night or a spacious seat to
                stretch out and relax, we have got you covered.
              </p>
            </div>
          </div>
          <div>
            <div className="md:text-xl text-gray-200 sm:text-lg italic lg:mx-20 pt-8">
              <SectionTitle2 text="Accessibility Services" />
              <p>
                We are committed to making our cinema accessible to all,
                offering wheelchair-accessible seating, assistive listening
                devices, and closed captioning services for the hearing
                impaired.
              </p>
            </div>
          </div>
          <div>
            <div className="md:text-xl text-gray-200 sm:text-lg italic lg:mx-20 pt-8">
              <SectionTitle2 text="Gourmet Snack and Beverage Service" />
              <p>
                Indulge in a wide selection of gourmet snacks and beverages
                available at our concessions stand. From freshly popped popcorn
                and artisanal chocolates to a variety of hot and cold drinks, we
                have something for everyone. Enjoy our signature nachos, hot
                dogs, and a selection of fine wines and craft beers to elevate
                your cinema experience.
              </p>
            </div>
          </div>
          <div>
            <div className="md:text-xl text-gray-200 sm:text-lg italic lg:mx-20 pt-8">
              <SectionTitle2 text="Cutting-Edge Audio-Visual Technology" />
              <p>
                Experience movies like never before with our state-of-the-art
                audio and visual technology. Our theaters are equipped with the
                latest 4K projectors, immersive surround sound systems, and
                large-format screens to deliver unparalleled picture and sound
                quality. Every detail is designed to transport you into the
                world of the movie.
              </p>
            </div>
          </div>
          <div>
            <div className="md:text-xl text-gray-200 sm:text-lg italic lg:mx-20 pt-8">
              <SectionTitle2 text="Personalized Service" />
              <p>
                At our cinema, we prioritize your comfort and convenience. Our
                friendly staff is always ready to assist you with anything you
                need, from helping you find your seat to providing
                recommendations for the best movie snacks. We also offer
                personalized services such as advance ticket booking, private
                screenings, and loyalty programs to enhance your movie-going
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 lg:pl-4 px-4">
          <div>
            <SectionTitle2 text="Abissinia Movies" />
            <AbissiniaMovies />
          </div>
          <div>
            <SectionTitle2 text="Abissinia Cinema" />
            <div style={{ width: "100%", height: "400px" }}>
              <iframe
                title="Cinema Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3542106530117!2d38.738164773673205!3d9.03141658895392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853e15e83f87%3A0x3e4c1ea5319d99a1!2zQ2luZW1hIFJhcyB8IE1lcmthdG98IOGIsuGKkuGImyDhiKvhiLUgfCDhiJjhiK3hiqvhibY!5e0!3m2!1sen!2set!4v1716022815747!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cinema;
