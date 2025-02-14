// food-drink/page.tsx
"use client";
import { SnackAndDrink } from "../data";
import { useEffect, useState } from "react";
import SnackAndDrinks from "../components/SnackAndDrinks";
import { useFetchData2 } from "@/api/getData";
import Loading from "../components/common/Loading";

const Page = () => {
  const { data: snacks1, isError, isLoading } = useFetchData2("snacks");
  const [snacks, setSnacks] = useState<SnackAndDrink[]>([]);
  useEffect(() => {
    if (snacks1) {
      setSnacks(snacks1);
    }
  }, [snacks1]);
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div>Error loading data</div>; // Show an error state
  }

  return (
    <div>
      {snacks.map((snack) => (
        <SnackAndDrinks key={snack._id} snack={snack} />
      ))}
    </div>
  );
};

export default Page;
