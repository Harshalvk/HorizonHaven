import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Navbar from "./Components/Navbar";
import PrivateRoute from "./Components/PrivateRoute";
import CreateListing from "./Pages/CreateListing";
import UpdateListing from "./Pages/UpdateListing";
import Listing from "./Pages/Listing";
import Search from "./Components/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/listing/:listingId" element={<Listing/>}/>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="create-listing" element={<CreateListing />} />
            <Route path="/update-listing/:listingId" element={<UpdateListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
