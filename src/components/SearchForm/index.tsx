// export default function Search() {
//   return (
//     <section>
//       <h1>This is Search component</h1>
//     </section>
//   );
// }
import React from "react";

const SearchForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search submitted", e.currentTarget.searchValue.value);
    // Handle search logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="relative w-full min-w-xl">
        <input
          type="search"
          name="searchValue"
          className="block p-2.5 pr-8 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-0"
          placeholder="Search products here..."
          required
        />
        <button
          type="submit"
          className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-700 rounded-e-lg z-50 hover:cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
