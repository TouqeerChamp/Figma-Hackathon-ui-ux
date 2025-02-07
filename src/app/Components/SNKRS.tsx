"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShoppingCart, FaMapMarker, FaLessThan } from "react-icons/fa";

const SNKRS = () => {
  const images = [
    "/2.png",
    "/22.png",
    "/222.png",
    "/2222.png",
    "/3.png",
    "/33.png",
    "/333.png",
    "/3333.png",
    "/4.png",
    "/44.png",
    "/444.png",
    "/4444.png",
    "/2.png",
    "/22.png",
    "/222.png",
    "/2222.png",
    "/3.png",
    "/33.png",
    "/333.png",
    "/3333.png",
    "/4.png",
    "/44.png",
    "/444.png",
    "/4444.png",
    "/2.png",
    "/22.png",
    "/222.png",
    "/2222.png",
    "/3.png",
    "/33.png",
    "/333.png",
    "/3333.png",
    "/4.png",
    "/44.png",
    "/444.png",
    "/4444.png",
    "/2.png",
    "/22.png",
    "/222.png",
    "/2222.png",
    "/3.png",
    "/33.png",
    "/333.png",
    "/3333.png",
    "/4.png",
    "/44.png",
    "/444.png",
    "/4444.png",
    "/2.png",
    "/22.png",
    "/222.png",
    "/2222.png",
    "/3.png",
    "/33.png",
    "/333.png",
    "/3333.png",
    "/4.png",
    "/44.png",
    "/444.png",
    "/4444.png",
    "/2.png",
    "/22.png",
    "/222.png",
    "/2222.png",
    "/3.png",
    "/33.png",
    "/333.png",
    "/3333.png",
    "/4.png",
    "/44.png",
    "/444.png",
    "/4444.png",
    "/2.png",
    "/22.png",
    "/222.png",
    "/2222.png",
    "/3.png",
    "/33.png",
    "/333.png",
    "/3333.png",
    "/4.png",
    "/44.png",
    "/444.png",
    "/4444.png", // Add more paths as needed
  ];
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div>
      <nav
        data-aos="fade-down"
        className="bg-gray-100 border-b border-gray-300"
      >
        <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-6">
          <div>
            <p className="flex items-center gap-2 text-[11px] text-gray-500">
              <FaLessThan /> Visit Nike.com
            </p>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-700">
            <Link href="/product">
              <li className="hover:text-black list-none">Join/Log In</li>
            </Link>
            <span>|</span>
            <Link href="/contactus">
              <li className="hover:text-black list-none">Help</li>
            </Link>
            <span>|</span>
            <Link href="#">
              <li className="hover:text-black list-none">
                <FaShoppingCart />
              </li>
            </Link>
            <span>|</span>
            <Link href="#">
              <li className="hover:text-black list-none flex gap-2 items-center">
                India <FaMapMarker />
              </li>
            </Link>
          </div>
        </div>
      </nav>
      {/* <Navbar /> */}
      {/* Header Section */}
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4 md:px-6 border-b">
        <div className="flex-shrink-0">
          <img src="/Frame (2).png" alt="logo" className="h-8 md:h-10" />
        </div>
        <div className="mt-2 md:mt-0">
          <ul className="flex space-x-4 text-sm">
            <li className="hover:text-gray-700">Feed</li>
            <li className="hover:text-gray-700">In Stock</li>
            <li className="hover:text-gray-700">Upcoming</li>
          </ul>
        </div>
        <div className="flex-shrink-0 mt-2 md:mt-0">
          <img src="/Framey.png" alt="frame" className="h-8 md:h-10" />
        </div>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto px-4 md:px-16 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.map((src, index) => (
            <div key={index} className="w-full h-auto" data-aos="zoom-in-up">
              <img
                src={src}
                alt={`image-${index}`}
                className="w-full h-full object-cover rounded  hvr-grow border-[3px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SNKRS;
