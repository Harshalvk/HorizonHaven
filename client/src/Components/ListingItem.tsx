import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaBath, FaBed, FaChair, FaParking } from "react-icons/fa";

const ListingItem = ({ listing }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />

        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700">
            {listing.name}
          </p>

          <div className="flex items-center gap-1 truncate">
            <MdLocationOn className="text-green-700 h-4 w-4" />
            <p className="text-sm text-gray truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-md text-justify text-gray-600 line-clamp-2">
            {listing.description}
          </p>

          <p className="text-slate-500 mt-2 font-semibold">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && "/month"}
          </p>

          <div className="flex gap-3 items-center flex-wrap">
            <div className="flex items-center gap-1">
              <FaBed className="text-green-700" />
              <p className="font-semibold text-slate-500">
                {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : `${listing.bedrooms} Bed`} 
              </p>
            </div>
            <div className="flex items-center gap-1">
              <FaBath className="text-green-700" />
              <p className="font-semibold text-slate-500">
                {listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : `${listing.bathrooms} Bath`} 
              </p>
            </div>
            <div className="flex items-center gap-1">
              <FaParking className="text-green-700" />
              <p className="font-semibold text-slate-500">
                {listing.parking ? "Parking" : "No Parking"}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <FaChair className="text-green-700" />
              <p className="font-semibold text-slate-500">
                {listing.furnished ? "Furnished" : "No Furnished"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingItem;
