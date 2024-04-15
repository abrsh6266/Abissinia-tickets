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

export const socials = [
  {
    id: 10,
    name:"Linkdin",
    url: "https://www.linkedin.com/in/abrham-belayineh-190658258/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    name:"Github",
    url: "https://www.github.com/abrsh6266",
    icon: <FaGithub />,
  },

  {
    id: 33,
    name:"Instagram",
    url: "https://www.instagram.com/umabrshxovll/",
    icon: <FaInstagram />,
  },
  {
    id: 1,
    name:"Facebook",
    url: "https://www.facebook.com/profile.php?id=100034253550916",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    name:"Twitter",
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
];

export const links = [
  { id:1,label: "Home", href: "/" },
  { id:2,label: "Coming soon", href: "/coming-soon" },
  { id:3,label: "Food and drinks", href: "/food-drink" },
  { id:4,label: "Tickets", href: "/film-showtimes-tickets" },
  { id:5,label: "Cinemas", href: "#" },
  { id:6,label: "Schedule", href: "#" },
];
  
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
  showTime: {
    day: string;
    times: string[];
  }[];
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
export const movie: Movie[] = [
  {
    id: 1,
    poster: movie1,
    title: "Spider-Man: Into the Spider-Verse",
    genre: ["Animation", "Action", "Adventure"],
    cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
    director: ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"],
    description:
      "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    releasedYear: 2018,
    rating: 8.4,
    showTime: [
      { day: "Wednesday", times: ["3:00 PM", "6:00 PM", "9:00 PM"] },
      { day: "Friday", times: ["2:30 PM", "5:30 PM", "8:30 PM"] },
    ],
  },
  {
    id: 2,
    poster: movie2,
    title: "Inception",
    genre: ["Action", "Adventure", "Sci-Fi"],
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    director: ["Christopher Nolan"],
    description:
      "A thief who enters the dreams of others to steal secrets from their subconscious.",
    releasedYear: 2010,
    rating: 8.8,
    showTime: [
      { day: "Wednesday", times: ["3:00 PM", "6:00 PM", "9:00 PM"] },
      { day: "Friday", times: ["2:30 PM", "5:30 PM", "8:30 PM"] },
    ],
  },
  {
    id: 3,
    poster: movie3,
    title: "The Dark Knight",
    genre: ["Action", "Crime", "Drama"],
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    director: ["Christopher Nolan"],
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releasedYear: 2008,
    rating: 9.0,
    showTime: [
      { day: "Monday", times: ["2:00 PM", "5:00 PM", "8:00 PM"] },
      { day: "Friday", times: ["2:30 PM", "5:30 PM", "8:30 PM"] },
    ],
  },
  {
    id: 4,
    poster: movie4,
    title: "Interstellar",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    director: ["Christopher Nolan"],
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releasedYear: 2014,
    rating: 8.6,
    showTime: [
      { day: "Monday", times: ["2:00 PM", "5:00 PM", "8:00 PM"] },
      { day: "Friday", times: ["2:30 PM", "5:30 PM", "8:30 PM"] },
    ],
  },
  {
    id: 5,
    poster: movie5,
    title: "The Shawshank Redemption",
    genre: ["Drama"],
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    director: ["Frank Darabont"],
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releasedYear: 1994,
    rating: 9.3,
    showTime: [
      { day: "Monday", times: ["2:00 PM", "5:00 PM", "8:00 PM"] },
      { day: "Friday", times: ["2:30 PM", "5:30 PM", "8:30 PM"] },
      { day: "Tuesday", times: ["3:00 PM", "6:00 PM", "9:00 PM"] },
    ],
  },
  {
    id: 6,
    poster: movie6,
    title: "The Godfather",
    genre: ["Crime", "Drama"],
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    director: ["Francis Ford Coppola"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releasedYear: 1972,
    rating: 9.2,
    showTime: [
      { day: "Monday", times: ["2:00 PM", "5:00 PM", "8:00 PM"] },
      { day: "Wednesday", times: ["3:00 PM", "6:00 PM", "9:00 PM"] },
    ],
  },
  {
    id: 7,
    poster: movie7,
    title: "Pulp Fiction",
    genre: ["Crime", "Drama"],
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    director: ["Quentin Tarantino"],
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releasedYear: 1994,
    rating: 8.9,
    showTime: [
      { day: "Monday", times: ["2:00 PM", "5:00 PM", "8:00 PM"] },
      { day: "Wednesday", times: ["3:00 PM", "6:00 PM", "9:00 PM"] },
    ],
  },
  {
    id: 8,
    poster: movie8,
    title: "The Matrix",
    genre: ["Action", "Sci-Fi"],
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    director: ["Lana Wachowski", "Lilly Wachowski"],
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    releasedYear: 1999,
    rating: 8.7,
    showTime: [
      { day: "Monday", times: ["2:00 PM", "5:00 PM", "8:00 PM"] },
      { day: "Wednesday", times: ["3:00 PM", "6:00 PM", "9:00 PM"] },
      { day: "Sunday", times: ["2:30 PM", "5:30 PM", "8:30 PM"] },
    ],
  },
  {
    id: 10,
    poster: movie10,
    title: "The Lord of the Rings: The Return of the King",
    genre: ["Action", "Adventure", "Drama"],
    cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    director: ["Peter Jackson"],
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    releasedYear: 2003,
    rating: 8.9,
    showTime: [
      { day: "Monday", times: ["2:00 PM", "5:00 PM", "8:00 PM"] },
      { day: "Wednesday", times: ["3:00 PM", "6:00 PM", "9:00 PM"] },
      { day: "Sunday", times: ["2:30 PM", "5:30 PM", "8:30 PM"] },
    ],
  },
];

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
];