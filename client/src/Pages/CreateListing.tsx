const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            placeholder="Name"
            type="text"
            id="name"
            className="border p-3 rounded-lg focus:outline-none"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            placeholder="Description"
            type="textbox"
            id="description"
            className="rounded-lg border p-3 focus:outline-none"
            required
          />
          <input
            placeholder="Address"
            type="textbox"
            id="address"
            className="p-3 rounded-lg focus:outline-none"
            required
          />

          <div className="flex gap-4 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span className="font-semibold text-md">Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span className="font-semibold text-md">Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span className="font-semibold text-md">Parking spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span className="font-semibold text-md">Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span className="font-semibold text-md">Offer</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                className="p-2 border border-gray-400 rounded-lg focus:outline-none"
                required
              />
              <span className="font-semibold">Beds</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                className="p-2 border border-gray-400 rounded-lg focus:outline-none"
                required
              />
              <span className="font-semibold">Baths</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="regularPrice"
                min="0"
                max="10"
                className="p-2 border border-gray-400 rounded-lg focus:outline-none"
                required
              />
              <div className="flex flex-col items-center">
                <p className="font-semibold">Regular Price </p>
                <span className="text-xs font-semibold">($ / Month)</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="discountPrice"
                min="0"
                max="10"
                className="p-2 border border-gray-400 rounded-lg focus:outline-none"
                required
              />
              <div className="flex flex-col items-center">
                <p className="font-semibold">Discounted Price </p>
                <span className="text-xs font-semibold">($ / Month)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-3">
          <p className="text-gray-700">
            <span className="font-semibold text-black">Images:</span> The first
            image will be the cover (max 6).
          </p>
          <div className="flex gap-4">
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              className="p-3 border border-gray-400 rounded-lg w-full"
            />
            <button className="border border-green-700 px-3 py-4 rounded-lg uppercase bg-green-500 hover:opacity-90 ">
              Upload
            </button>
          </div>
          <button className="w-full p-3 bg-slate-700 rounded uppercase text-white hover:opacity-95">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
