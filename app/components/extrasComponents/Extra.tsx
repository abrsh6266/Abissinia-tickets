import { SnackAndDrink } from "@/app/data";
import { ExtraItem } from "@/app/features/movie/movieSlice";
import React, { useState } from "react";

const Extra = ({
  snack,
  handleSelectExtras,
}: {
  snack: SnackAndDrink;
  handleSelectExtras: (selectedExtras: ExtraItem) => void;
}) => {
  const [amount, setAmount] = useState<number>(0);
  const handleChangeAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAmount = parseInt(e.target.value);
    setAmount(selectedAmount);
    handleSelectExtras({ snackAndDrink: snack, amount: selectedAmount,price:snack.price });
  };
  return (
    <div className="card w-80 mb-5 bg-base-200 shadow-lg shadow-gray-600 rounded-l-2xl rounded-b-2xl mx-auto">
      <figure>
        <img
          className="object-cover w-full h-[240px]"
          src={snack.image}
          alt="snack"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{snack.name}</h2>
        <div className="w-full flex justify-between text-xs px-2 mt-2">
          <span className="font-bold text-lg">{snack.price}ETB</span>
          <div className="font-bold text-dm">
            <select
              className="select select-info select-sm w-full max-w-xs mt-2 mx-1 md:mx-0 md:mt-0"
              value={amount}
              onChange={handleChangeAmount}
              name="amount"
            >
              <option value={0}>none</option>
              {[...Array(8)].map((_, index) => (
                <option value={index + 1} key={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
