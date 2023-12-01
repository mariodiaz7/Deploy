function Signin() {
  return (
    <section className="flex justify-center items-center h-500">
      <form className="bg-neutral-100 shadow-lg rounded px-8 sm:px-5 pt-6 sm:pt-3 pb-15 sm:pb-12 mb-4 sm:mb-0 w-96 sm:w-75">

        <input
          type="email"
          placeholder="Email"
          className="mb-5 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-5 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <input
          type="text"
          placeholder="Name"
          className="mb-5 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <input
          type="text"
          placeholder="Last name"
          className="mb-5 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <button
          type="submit"
          className="mb-5 shadow appearance-none border rounded w-full py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]"
        >
          Sign In
        </button>
      </form>
    </section>
  );
}

export default Signin;
