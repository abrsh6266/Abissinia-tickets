import React, { useEffect, useState } from "react";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

interface ChappaProps {
  firstName: string;
  lastName: string;
  email: string;
  selectedPaymentMethod: string;
}

const Chappa: React.FC<ChappaProps> = ({
  firstName,
  lastName,
  email,
  selectedPaymentMethod,
}) => {
  const [currentTimeInSeconds, setCurrentTimeInSeconds] = useState(0);
  const selectedMovie = useSelector(
    (store: RootState) => store.movieState.selectedMovie
  );
  const { user } = useSelector((store: RootState) => store.userState);

  useEffect(() => {
    setCurrentTimeInSeconds(Math.floor(Date.now() / 1000));
  }, []);

  // Determine the current base URL
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  // Construct the query string for the callback URL
  const params = new URLSearchParams({
    user_id: user.id,
    movieTitle: selectedMovie?.movie?.title ?? "",
    day: selectedMovie?.day ?? "",
    time: selectedMovie?.time ?? "",
    seatArea: selectedMovie?.seatType ?? "",
    seats: selectedMovie?.seats?.join(",") ?? "",
    extras: JSON.stringify(
      selectedMovie?.extras?.map((extra) => ({
        name: extra.snackAndDrink?.name,
        amount: extra.amount,
      })) ?? []
    ),
    totalPrice: selectedMovie?.totalPrice?.toString() ?? "",
    tx_ref: `${firstName}-${lastName}-${currentTimeInSeconds}`,
  });
  const callbackUrl = `${
    process.env.NEXT_PUBLIC_BASE_URL
  }/verify-payment?${params.toString()}`;

  return (
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
      <input
        type="hidden"
        name="public_key"
        value={process.env.NEXT_PUBLIC_CHAPA_PUBLIC_KEY}
      />
      <input
        type="hidden"
        name="tx_ref"
        value={`${firstName}-${lastName}-${currentTimeInSeconds}`}
      />
      <input type="hidden" name="amount" value={selectedMovie?.totalPrice} />
      <input type="hidden" name="currency" value="ETB" />
      <input type="hidden" name="email" value={email} />
      <input type="hidden" name="first_name" value={firstName} />
      <input type="hidden" name="last_name" value={lastName} />
      <input type="hidden" name="title" value="Let us do this" />
      <input
        type="hidden"
        name="description"
        value="Paying with Confidence with cha"
      />
      <input
        type="hidden"
        name="logo"
        value="https://chapa.link/asset/images/chapa_swirl.svg"
      />
      <input type="hidden" name="callback_url" value={callbackUrl} />
      <input
        type="hidden"
        name="return_url"
        value={`${baseUrl}/payment-success`}
      />

      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        type="submit"
        disabled={
          !firstName ||
          !lastName ||
          !email ||
          !(selectedPaymentMethod === "Chapa")
        }
      >
        Pay Now
      </button>
    </form>
  );
};

export default Chappa;
