"use client";
import { SnackAndDrink } from "../data";

const SnackAndDrinks = ({ snack }: { snack: SnackAndDrink }) => {
  return (
    <section className="sm:py-5 md:py-20 overflow-x-hidden" id="about">
      <div className="align-element grid grid-cols-2 items-center gap-16">
        <article>
          <div>
            <img
              width={200}
              height={200}
              src={snack.image}
              alt={snack.name}
              className="bg-black object-cover w-full h-full rounded-lg"
            />
          </div>
        </article>
        <div>
          <h3 className="mt-6 text-4xl text-gray-200">{snack.name}</h3>
          <p className="text-base font-semibold text-gray-500">{snack.type}</p>
          <div className="mt-20 ml-2 relative h-10 min-w-[100px] max-w-[200px]">
            <select
              className="h-full w-full rounded-[7px]  disabled:border-0 select select-bordered"
            >
              <option  value={0}>
                0 - 0ETB
              </option>
              {Array.from({ length: 10 }, (_, index) => index + 1).map(
                (number) => (
                  <option
                    key={number}
                    value={number * snack.price}
                  >
                    {number} - {number * snack.price}ETB
                  </option>
                )
              )}
            </select>
            <label
              className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              style={{ color: "#fff" }}
            >
              Choose Quantity
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnackAndDrinks;
