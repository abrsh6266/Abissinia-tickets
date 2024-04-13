const PublicProfile = () => {
  return (
    <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
      <div className="p-2 md:p-4">
        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
          <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

          <div className="grid max-w-2xl mx-auto mt-8">
            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
              <img
                className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Bordered avatar"
              />

              <div className="flex flex-col space-y-5 sm:ml-8">
                <button
                  type="button"
                  className="text-base font-medium  focus:outline-none btn focus:ring-4 rounded-lg border border-blue-700"
                >
                  Change picture
                </button>
                <button
                  type="button"
                  className="btn text-base font-medium focus:outline-none  rounded-lg border border-red-700"
                >
                  Delete picture
                </button>
              </div>
            </div>

            <div className="items-center mt-8 sm:mt-14 ">
              <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                <div className="w-full">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your first name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="input input-bordered w-full max-w-xs border"
                    placeholder="Your first name"
                    value="Helina"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="input input-bordered w-full max-w-xs border"
                    placeholder="Your last name"
                    value="Bikes"
                    required
                  />
                </div>
              </div>

              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input input-bordered w-full border"
                  placeholder="Helina@gmail.com"
                  value={"Helina@gmail.com"}
                  required
                />
              </div>

              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="input input-bordered w-full border"
                  value={"hilu2121"}
                  placeholder="your username"
                  required
                />
              </div>
              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  old password
                </label>
                <input
                  type="password"
                  id="password"
                  className="input input-bordered w-full border"
                  placeholder="******"
                  required
                />
              </div>
              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  new password
                </label>
                <input
                  type="password"
                  id="password"
                  className="input input-bordered w-full border"
                  placeholder="******"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PublicProfile;
