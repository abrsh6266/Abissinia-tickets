import axios from "axios";
import { Movie, SnackAndDrink } from "../data";

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
  extras?:
    | { snackAndDrink: SnackAndDrink | undefined; amount: number }[]
    | undefined;
}
