function Signin() {
  return (
    <section className="flex justify-center items-center h-screen">
      <form className="bg-neutral-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-96">

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
