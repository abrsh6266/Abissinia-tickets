// reducers.js
import { dummySeats, SnackAndDrink } from "@/app/data";
import { Props } from "@/app/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface ExtraItem {
  snackAndDrink: SnackAndDrink | undefined;
  amount: number;
  price: number;
}
export interface Ticket {
  ticketType: string | undefined;
  amount: number;
}
const initialState = {
  searchTerm: "",
  searchMovies: [],
  selectedMovie: null as Props | null,
  meta: {
    page: 1,
    pageCount: 10,
  },
  seats: dummySeats,
};

const appSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSearchMovies(state, action) {
      state.searchMovies = action.payload;
    },
    setSelectedMovie(state, action) {
      state.selectedMovie = action.payload;
    },
    setGlobalSeats(state) {
      state.seats = dummySeats;
    },
    setSeat(state, action) {
      const seatId = action.payload.id;
      if (!state.selectedMovie) {
        return;
      }

      // Update the selectedMovie seats array
      if (state.selectedMovie.seats) {
        const existingSeatIndex = state.selectedMovie.seats.findIndex(
          (s) => s === seatId
        );

        if (existingSeatIndex !== -1) {
          state.selectedMovie.seats.splice(existingSeatIndex, 1);
        } else {
          state.selectedMovie.seats.push(seatId);
        }
      } else {
        state.selectedMovie.seats = [seatId];
      }

      state.seats = state.seats.map((seat) =>
        seat.id === seatId ? { ...seat, selected: !seat.selected } : seat
      );
    },
    setExtras(state, action) {
      const newExtra = action.payload.selectedExtras;

      if (state.selectedMovie) {
        if (state.selectedMovie.extras) {
          const existingExtraIndex = state.selectedMovie.extras.findIndex(
            (extra) => extra.snackAndDrink?.id === newExtra.snackAndDrink.id
          );

          if (
            existingExtraIndex !== -1 &&
            state.selectedMovie.totalPrice !== undefined
          ) {
            state.selectedMovie.totalPrice +=
              (Number.parseInt(newExtra.amount) -
                state.selectedMovie.extras[existingExtraIndex].amount) *
              Number.parseInt(newExtra.price);
            state.selectedMovie.extras.splice(existingExtraIndex, 1, newExtra);
          } else {
            state.selectedMovie.extras.push(newExtra);
            if (state.selectedMovie.totalPrice !== undefined)
              state.selectedMovie.totalPrice +=
                Number.parseInt(newExtra.amount) *
                Number.parseInt(newExtra.price);
          }
        } else {
          if (state.selectedMovie.totalPrice !== undefined)
            state.selectedMovie.totalPrice +=
              Number.parseInt(newExtra.amount) *
              Number.parseInt(newExtra.price);
          state.selectedMovie.extras = [newExtra];
        }
      }
    },
    setTickets(state, action) {
      const newTicket = action.payload;

      if (state.selectedMovie) {
        if (state.selectedMovie.tickets) {
          const existingTicketIndex = state.selectedMovie.tickets.findIndex(
            (ticket) => ticket.ticketType === newTicket.ticketType
          );

          if (
            existingTicketIndex !== -1 &&
            state.selectedMovie.totalSeat !== undefined &&
            state.selectedMovie.totalPrice !== undefined
          ) {
            state.selectedMovie.totalSeat +=
              Number.parseInt(newTicket.amount) -
              state.selectedMovie.tickets[existingTicketIndex].amount;
            if (
              state.selectedMovie.tickets[existingTicketIndex]?.ticketType ===
              "child"
            ) {
              state.selectedMovie.totalPrice +=
                (Number.parseInt(newTicket.amount) -
                  state.selectedMovie.tickets[existingTicketIndex].amount) *
                100;
            } else {
              state.selectedMovie.totalPrice +=
                (Number.parseInt(newTicket.amount) -
                  state.selectedMovie.tickets[existingTicketIndex].amount) *
                120;
            }
            state.selectedMovie.tickets.splice(
              existingTicketIndex,
              1,
              newTicket
            );
          } else {
            state.selectedMovie.tickets.push(newTicket);
            if (
              state.selectedMovie.totalSeat !== undefined &&
              state.selectedMovie.totalPrice !== undefined
            ) {
              state.selectedMovie.totalSeat += Number.parseInt(
                newTicket.amount
              );
              if (
                state.selectedMovie.tickets[existingTicketIndex]?.ticketType ===
                "child"
              ) {
                state.selectedMovie.totalPrice +=
                  Number.parseInt(newTicket.amount) * 100;
              } else {
                state.selectedMovie.totalPrice +=
                  Number.parseInt(newTicket.amount) * 120;
              }
            }
          }
        } else {
          state.selectedMovie.tickets = [newTicket];
          state.selectedMovie.totalSeat = Number.parseInt(newTicket.amount);
          if (newTicket.ticketType === "child") {
            state.selectedMovie.totalPrice =
              Number.parseInt(newTicket.amount) * 100;
          } else {
            state.selectedMovie.totalPrice =
              Number.parseInt(newTicket.amount) * 120;
          }
        }
      }
    },
    setMeta(state, action) {
      state.meta = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setSearchMovies,
  setSelectedMovie,
  setMeta,
  setExtras,
  setTickets,
  setSeat,
  setGlobalSeats,
} = appSlice.actions;
export default appSlice.reducer;
