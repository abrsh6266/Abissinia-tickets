// food-drink/page.tsx
"use client";
import { snackAndDrinkData, SnackAndDrink } from "../data";
import { useState } from "react";
import SnackAndDrinks from "../components/SnackAndDrinks";

const Page = () => {
  const [snacks, setSnacks] = useState<SnackAndDrink[]>(snackAndDrinkData);
  return (
    <>
      {snacks.map((snack) => (
        <SnackAndDrinks key={snack.id} snack={snack} />
      ))}
    </>
  );
};

export default Page;
