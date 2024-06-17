"use client";
import { SnackAndDrink } from "../data";

const SnackAndDrinks = ({ snack }: { snack: SnackAndDrink }) => {
  return (
    <section className="sm:py-5 md:py-20 overflow-x-hidden" id="about">
      <div className="align-element grid grid-cols-2 items-center gap-16">
        <article>
          <div>
            <img
              width={150}
              height={150}
              src={snack.image}
              alt={snack.name}
              className=" object-cover w-full h-full rounded-lg"
            />
          </div>
        </article>
        <div>
          <h3 className="mt-6 text-4xl text-gray-200">{snack.name}</h3>
          <p className="text-base font-semibold text-gray-500">{snack.type}</p>
          <p className="text-base font-semibold text-gray-500">{snack.price}ETB</p>          
        </div>
      </div>
    </section>
  );
};

export default SnackAndDrinks;
