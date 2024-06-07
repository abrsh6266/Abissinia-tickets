"use client";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
//genres
export const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Sport",
  "Thriller",
  "War",
  "Western",
];

// cinemas
import cinema1 from "/public/cinema/cinema1.jpg";
import cinema2 from "/public/cinema/cinema2.jpg";
import cinema3 from "/public/cinema/cinema3.jpg";
import cinema4 from "/public/cinema/cinema4.jpg";

//drinks
import popcorn from "/public/snacks/popcorn.jpg";
import burger from "/public/snacks/cheeseburger.jpg";
import pizza from "/public/snacks/pizza.jpg";
import soda from "/public/snacks/soft-drinks.jpg";
import water from "/public/snacks/bottled-water.jpg";
import fries from "/public/snacks/fries.jpg";
import kolo from "/public/snacks/kolo.png";
import chips from "/public/snacks/chips.png";
import popcorn2 from "/public/snacks/popcorn2.png";

export const socials = [
  {
    id: 10,
    name: "Linkdin",
    url: "https://www.linkedin.com/in/abrham-belayineh-190658258/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    name: "Github",
    url: "https://www.github.com/abrsh6266",
    icon: <FaGithub />,
  },

  {
    id: 33,
    name: "Instagram",
    url: "https://www.instagram.com/umabrshxovll/",
    icon: <FaInstagram />,
  },
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100034253550916",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    name: "Twitter",
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
];

export const gridSquareVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};
export const squareVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export const shuffleArray = <T,>(array: T[]): T[] => {
  if (!Array.isArray(array)) {
    throw new Error("Expected an array to shuffle");
  }
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


export const links = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Coming soon", href: "/coming-soon" },
  { id: 3, label: "Food and drinks", href: "/food-drink" },
  { id: 5, label: "Abissinia Cinema", href: "/cinema" },
  { id: 6, label: "Schedule", href: "schedule" },
];

export interface ShowTime {
  day: string;
  time: string[];
}
export interface Movie {
  id: number;
  poster: StaticImageData;
  title: string;
  genre: string[];
  cast: string[];
  director: string[];
  description: string;
  releasedYear: number;
  rating: number;
  showTime: ShowTime[];
}
[];
export interface Star {
  _id: string;
  name: string;
  profilePhoto: string;
}
export interface Review {
  _id: string;
  movieId: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
}
export interface Movie2 {
  _id: string;
  duration: string;
  poster: string;
  title: string;
  genre: string[];
  starsId: Star[];
  country: string;
  description: string;
  releaseDate: string;
  reviewId: Review[];
}

export interface SnackAndDrink {
  _id: number;
  name: string;
  type: string;
  price: number;
  image: string;
}

export const list = [
  {
    id: 1,
    image: cinema1,
    name: "maria ferguson",
    title: "office manager",
    quote:
      "Every movie has a story to tell. Let us be your storyteller. Discover the latest releases, plan your cinema outing, and create memories that last a lifetime.",
  },
  {
    id: 2,
    image: cinema2,
    name: "john doe",
    title: "regular guy",
    quote:
      "Experience the magic of cinema like never before. Book your tickets now and embark on a journey of thrilling adventures and heartwarming stories.",
  },
  {
    id: 3,
    image: cinema3,
    name: "peter smith",
    title: "product designer",
    quote:
      "Escape reality and immerse yourself in the world of movies. From action-packed blockbusters to captivating dramas, find your perfect movie moment with us.",
  },
  {
    id: 4,
    image: cinema4,
    name: "susan andersen",
    title: "the boss",
    quote:
      "Lights, camera, action! Get ready for an unforgettable cinematic experience. Explore our schedule, reserve your seats, and get ready to be transported to another world. ",
  },
];
import { StaticImageData } from "next/image";

const seatTypes = ["sofa", "standard", "premier"];

const generateSeats = (): {
  id: number;
  selected: boolean;
  booked: boolean;
  seatType: string;
}[] => {
  const seats: {
    id: number;
    selected: boolean;
    booked: boolean;
    seatType: string;
  }[] = [];

  for (let i = 1; i <= 64; i++) {
    const seatTypeIndex = Math.floor((i - 1) / 8) % 3;
    const seatType = seatTypes[seatTypeIndex];
    const seat = {
      id: i,
      selected: false,
      booked: false,
      seatType: seatType,
    };

    seats.push(seat);
  }

  return seats;
};

export const dummySeats = generateSeats();
