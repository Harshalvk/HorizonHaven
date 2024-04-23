import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = ({ listing }) => {
  const [landloard, setLandloard] = useState(null);
  const [message, setMessage] = useState("");
  console.log(landloard);

  useEffect(() => {
    const fetchLandloard = async () => {
      try {
        const { data } = await axios.get(`/api/user/${listing.userRef}`);
        console.log(data);
        setLandloard(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandloard();
  }, [listing.userRef]);

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      {landloard && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landloard.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full rounded-lg p-3 focus:outline-none"
          ></textarea>
          <Link
            to={`mailto:${landloard.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white p-3 rounded-lg text-center uppercase hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
};

export default Contact;
