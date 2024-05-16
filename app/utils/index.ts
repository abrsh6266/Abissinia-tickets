import axios from "axios";
import { Movie, SnackAndDrink } from "../data";
import { ExtraItem, Ticket } from "../features/movie/movieSlice";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export interface Props {
  times?: string[] | undefined;
  time?: string | undefined;
  day?: string | undefined;
  movie?: Movie | undefined;
  seats?:
    | {
        id: number;
        selected: boolean;
        booked: boolean;
      }[]
    | undefined;
  extras?: ExtraItem[] | undefined;
  tickets?: Ticket[] | undefined;
  seatType?: string | undefined;
  totalSeat?: number | undefined;
}
