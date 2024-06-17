import Link from "next/link";
import { HeroBtn } from "./HeroBtn";

const Hero = () => {
  return (
    <section className="">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          BUY <span className="text-pink-300">YOUR </span>
          <span className="text-purple-300">TICKETS </span>
          <span className="text-blue-300">ONLINE</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white leading-tight mb-8">
          Buy your tickets online to save time, avoid the queues and choose your
          preferred seats in advance.
        </p>
        <Link
          href={'/schedule'}
        >
          <HeroBtn />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
