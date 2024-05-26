import axios from "axios";
import { Movie, SnackAndDrink } from "../data";
import { ExtraItem, Ticket } from "../features/movie/movieSlice";

const productionUrl = "https://abissinia-backend.vercel.app/api/auth";
const productionUrl2 = "https://abissinia-backend.vercel.app/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
export const customFetch2 = axios.create({
  baseURL: productionUrl2,
});
export async function fetchData(url: string) {
  const response = await customFetch2.get(url);
  return response.data;
}
export interface Props {
  times?: string[] | undefined;
  time?: string | undefined;
  day?: string | undefined;
  movie?: Movie | undefined;
  seats?: number[] | undefined;
  extras?: ExtraItem[] | undefined;
  tickets?: Ticket[] | undefined;
  seatType?: string | undefined;
  totalSeat?: number | undefined;
  totalPrice?: number | undefined;
}

interface Seat {
  seatNumber: number;
  _id: string;
}

interface Seats {
  sofa: Seat[];
  standard: Seat[];
  premier: Seat[];
}

interface HallData {
  seats: Seats;
  _id: string;
  name: string;
  __v: number;
}

interface TransformedSeat {
  seatType: string;
  seatNumber: number;
  seatId: string;
}

function transformSeatData(hallData: HallData): TransformedSeat[] {
  const { seats } = hallData;
  const transformedSeats: TransformedSeat[] = [];

  for (const [seatType, seatArray] of Object.entries(seats)) {
    seatArray.forEach((seat: Seat) => {
      transformedSeats.push({
        seatType,
        seatNumber: seat.seatNumber,
        seatId: seat._id,
      });
    });
  }

  return transformedSeats;
}