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

export const shuffleArray = (array: any) => {
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
  { id: 4, label: "Tickets", href: "/film-showtimes-tickets" },
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
  reviewId: string[];
}

export interface SnackAndDrink {
  id: number;
  name: string;
  type: string;
  price: number;
  image: StaticImageData;
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
import movie1 from "/public/movies/movie1.jpeg";
import movie2 from "/public/movies/movie2.jpg";
import movie3 from "/public/movies/movie3.jpg";
import movie4 from "/public/movies/movie4.jpg";
import movie5 from "/public/movies/movie5.jpg";
import movie6 from "/public/movies/movie6.jpg";
import movie7 from "/public/movies/movie7.jpg";
import movie8 from "/public/movies/movie8.jpg";
import movie10 from "/public/movies/movie10.jpg";
import { StaticImageData } from "next/image";

//food and drink data

export const snackAndDrinkData: SnackAndDrink[] = [
  {
    id: 1,
    name: "Popcorn",
    type: "Snack",
    price: 5,
    image: popcorn,
  },
  {
    id: 2,
    name: "Burger",
    type: "Snack",
    price: 8,
    image: burger,
  },
  {
    id: 3,
    name: "Pizza",
    type: "Snack",
    price: 10,
    image: pizza,
  },
  {
    id: 4,
    name: "Soda",
    type: "Drink",
    price: 3,
    image: soda,
  },
  {
    id: 5,
    name: "Water",
    type: "Drink",
    price: 2,
    image: water,
  },
  {
    id: 6,
    name: "Fries",
    type: "Snack",
    price: 4,
    image: fries,
  },
  {
    id: 7,
    name: "kolo",
    type: "Snack",
    price: 50,
    image: kolo,
  },
  {
    id: 8,
    name: "chips",
    type: "Snack",
    price: 70,
    image: chips,
  },
  {
    id: 9,
    name: "popcorn2",
    type: "Snack",
    price: 100,
    image: popcorn2,
  },
];

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
