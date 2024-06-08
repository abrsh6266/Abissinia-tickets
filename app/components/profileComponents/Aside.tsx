import { SetStateAction } from "react";

const Aside = ({ setPage, page }: { setPage: any; page: number }) => {
  return (
    <div className="sticky flex flex-col gap-2 p-4 text-sm md:border-r ">
      <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

      <a
        onClick={() => {
          setPage(1);
        }}
        href="#"
        className={`flex items-center px-3 py-2.5 font-bold hover hover:border hover:rounded-full ${
          page === 1 ? "border rounded-full" : ""
        }`}
      >
        Pubic Profile
      </a>
      <a
        onClick={() => {
          setPage(2);
        }}
        href="#"
        className={`flex items-center px-3 py-2.5 font-bold hover hover:border hover:rounded-full ${
          page === 2 ? "border rounded-full" : ""
        }`}
      >
        Account Settings
      </a>
      <a
        onClick={() => {
          setPage(3);
        }}
        href="#"
        className={`flex items-center px-3 py-2.5 font-bold hover hover:border hover:rounded-full ${
          page === 3 ? "border rounded-full" : ""
        }`}
      >
        Book History
      </a>
    </div>
  );
};

export default Aside;
