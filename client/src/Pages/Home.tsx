import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../Components/ListingItem";
import Footer from "../Components/Footer";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?offer=true&limit=4`);
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=rent&limit=4`);
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=sale&limit=4`);
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* Top */}
      <div className="py-28 px-3 max-w-6xl mx-auto flex flex-col gap-6">
        <h1 className="text-4xl font-bold md:text-6xl text-slate-700">
          Find your next <span className="text-slate-500">perfect</span> <br />
          place with ease
        </h1>
        <p className="text-gray-500 text-sm md:text-md">
          HorizonHaven is the best place to find your next perfect place to
          live. <br />
          We have a wide range of properties for you to choose from.
        </p>
        <Link
          to={"/search"}
          className="text-md  text-blue-800 font-semibold hover:underline"
        >
          Let's get started...
        </Link>
      </div>

      {/* Swiper */}
      <Swiper
        navigation
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* lisitng result for offer, sale and rent */}
      <div className="max-w-[1400px] mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className="my-5">
              <h1 className="text-slate-600 font-bold text-2xl">
                Recent Offers
              </h1>
              <Link
                className="text-blue-700 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem key={listing._id} listing={listing} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="max-w-[1400px] mx-auto p-3 flex flex-col gap-8 my-10">
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className="my-5">
              <h1 className="text-slate-600 font-bold text-2xl">
                Recent places for Rent
              </h1>
              <Link
                className="text-blue-700 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for Rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem key={listing._id} listing={listing} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="max-w-[1400px] mx-auto p-3 flex flex-col gap-8 my-10">
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className="my-5">
              <h1 className="text-slate-600 font-bold text-2xl">
                Recent places for Sale
              </h1>
              <Link
                className="text-blue-700 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for Sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem key={listing._id} listing={listing} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
