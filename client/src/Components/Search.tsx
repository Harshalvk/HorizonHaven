import React from "react";

const Search = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="border-slate-400 border-b-[1px] md:border-r-[1px] md:min-h-screen p-7">
          <form className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <label className="whitespace-nowrap font-semibold">
                Search Term:
              </label>
              <input
                type="text"
                placeholder="Search..."
                id="searchTerm"
                className="p-2 rounded-lg focus:outline-none w-full"
              />
            </div>
            <div className="flex gap-2 flex-wrap items-center">
              <label className="font-semibold">Type:</label>
              <div className="flex gap-1">
                <input type="checkbox" id="all" className="w-5" />
                <span>Rent & Sale</span>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" id="rent" className="w-5" />
                <span>Rent</span>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" id="sale" className="w-5" />
                <span>Sale</span>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" id="offer" className="w-5" />
                <span>Offer</span>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap items-center">
              <label className="font-semibold">Amenities:</label>
              <div className="flex gap-1">
                <input type="checkbox" id="parking" className="w-5" />
                <span>Parking</span>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" id="furnished" className="w-5" />
                <span>Furnished</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <label className="font-semibold">Sort:</label>
              <select
                id="sort_order"
                className="p-1 rounded-lg focus:outline-none"
              >
                <option value="">Price high to low</option>
                <option value="">Price low to high</option>
                <option value="">Latest</option>
                <option value="">Oldest</option>
              </select>
            </div>
            <button className="w-full bg-slate-700 rounded-lg p-3 text-white uppercase hover:opacity-95">
              Search
            </button>
          </form>
        </div>

        <div className="p-3">
          <h1 className="font-semibold text-2xl md:text-3xl text-slate-800">
            Listing Results:
          </h1>
        </div>
      </div>
    </>
  );
};

export default Search;
