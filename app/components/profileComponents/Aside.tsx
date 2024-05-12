const Aside = () => {
  return (
    <div className="sticky flex flex-col gap-2 p-4 text-sm md:border-r ">
      <h2 className="pl-3 mb-4 text-2xl font-semibold">settings</h2>

      <a
        href="#"
        className="flex items-center px-3 py-2.5 font-bold   border rounded-full"
      >
        Pubic Profile
      </a>
      <a
        href="#"
        className="flex items-center px-3 py-2.5 font-semibold  hover hover:border hover:rounded-full"
      >
        Account Settings
      </a>
      <a
        href="#"
        className="flex items-center px-3 py-2.5 font-semibold hover hover:border hover:rounded-full  "
      >
        Book History
      </a>
    </div>
  );
};

export default Aside;
