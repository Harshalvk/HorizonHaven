import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.svg";
import { IoLocationOutline } from "react-icons/io5";
import { CiMobile1, CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className=" text-white max-w-6xl mx-auto p-3 space-y-3 flex flex-wrap gap-4 md:flex md:gap-6 md:justify-between">
        <div className="flex-col justify-center gap-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="w-4" />
            <h1 className="text-xl">Horizon Haven</h1>
          </div>
          <p className="sm:max-w-64">
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum is dummy text of the printing.
          </p>
        </div>

        <div className="">
          <h1 className="text-xl">Contact</h1>
          <div className="flex items-center gap-2">
            <IoLocationOutline />
            <p>Brooklyn, New York United States</p>
          </div>
          <div className="flex items-center gap-2">
            <CiMobile1 />
            <p>+11 2 3456 7890</p>
          </div>
          <div className="flex items-center gap-2">
            <CiMail />
            <p>info@houzing.com</p>
          </div>
        </div>

        <div className="">
          <h1 className="text-xl">Quick Links</h1>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Services</li>
          </ul>
        </div>

        <div className="">
          <h1 className="text-xl">Services</h1>
          <ul>
            <li>Wish List</li>
            <li>Login</li>
            <li>Submit a Request</li>
            <li>Appointment</li>
            <li>Promotional Offers</li>
          </ul>
        </div>
      </div>
      <div className="h-[1px] bg-state-gray my-2 max-w-6xl mx-auto" />
      <div className="max-w-6xl mx-auto text-white text-center sm:flex sm:justify-between">
        <p>© Copyright Meadia 2024 All Right Reserved.</p>
        <Link to={"https://github.com/Harshalvk"}>
          Made with ❤ By{" "}
          <span className="hover:underline cursor-pointer">Harshalvk</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
