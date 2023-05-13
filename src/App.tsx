// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <form>
        <div>
          <label className="block font-medium text-sm text-gray-700" htmlFor="name">
            <span>Name</span>
          </label>
          <input
            className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            id="name"
            type="text"
            required
            autoFocus
            autoComplete="name"
          />
        </div>
        <div className="mt-4">
          <label
            className="block font-medium text-sm text-gray-700"
            htmlFor="email"
          >
            <span>Email</span>
          </label>
          <input
            className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            id="email"
            type="email"
            required
          />
        </div>
        <div className="mt-4">
          <label
            className="block font-medium text-sm text-gray-700"
            htmlFor="password"
          >
            <span>Password</span>
          </label>
          <input
            className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            id="password"
            type="password"
            required
            autoComplete="new-password"
            aria-autocomplete="list"
          />
        </div>
        <div className="mt-4">
          <label
            className="block font-medium text-sm text-gray-700"
            htmlFor="password_confirmation"
          >
            <span>Confirm Password</span>
          </label>
          <input
            className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            id="password_confirmation"
            type="password"
            required
            autoComplete="new-password"
          />
        </div>
        <div className="flex items-center justify-end mt-4">
          <a
            className="underline text-sm text-gray-600 hover:text-gray-900"
            href="https://app.scrapybird.com/login"
          >
            Already registered?{" "}
          </a>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ml-4"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
