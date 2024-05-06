import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export interface Props {
    times?: string[] | undefined;
    time?: string | undefined;
    day?: string | undefined;
    id?: number | undefined;
    seats?:
      | {
          id: number;
          selected: boolean;
          booked: boolean;
        }[]
      | undefined;
  }