import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="h-20 bg-slate-700 text-white font-semibold flex items-center justify-center">
        <h1>
          Made with ❤ by{" "}
          <Link to={'https://github.com/Harshalvk'} target="_blank" >
            <span className="hover:underline">@Harshalvk</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
