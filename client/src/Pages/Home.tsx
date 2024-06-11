import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../Components/ListingItem";
import Footer from "../Components/Footer";
import hero_image from "../../public/hero_image.png";

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
    <section className="bg-[#F4F9FF]">
      {/* Top */}

      <div className="-mt-5  py-20 px-3 max-w-7xl mx-auto flex gap-6 items-center">
        <div className="my-6 px-3 space-y-4">
          <h1 className="text-4xl font-bold md:text-6xl text-secondary">
            Find your next{" "}
            <span className="text-secondary underline">perfect</span> <br />
            place with ease.
          </h1>
          <p className="text-state-gray text-md md:text-md">
            HorizonHaven is the best place to find your next perfect place to
            live. <br />
            We have a wide range of properties for you to choose from.
          </p>
          <div>
            <Link
              to={"/search"}
              className="text-md text-white py-3 px-2 rounded-md hover:opacity-95 font-semibold  bg-main"
            >
              Explore More
            </Link>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <img
            src={hero_image}
            alt="hero Image"
            className="rounded-lg shadow-sm"
          />
          <div className="bg-white absolute top-20 -right-14 p-3 rounded-md shadow-md font-semibold ">
            Customer Rating 4.9 ⭐
          </div>
          <div className="bg-white text-gray-500 absolute text-center p-3 text-xl font-semibold -bottom-14 left-36 rounded-md shadow-lg">
            <h2 className="">Buy Your Dream Home</h2>
            <h1 className="text-2xl text-main font-bold">80+</h1>
            <h2>Home available</h2>
            <button className="border border-white/30 bg-main text-white text-sm px-4 py-2 rounded-md shadow-md">
              View Details
            </button>
          </div>
        </div>
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
    </section>
  );
}
