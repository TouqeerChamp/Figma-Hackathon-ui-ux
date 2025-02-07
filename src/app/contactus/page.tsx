import React from "react";
import TopNavbarSignIn from "../Components/TopNavbarSignIn";
import Navbar from "../Components/Header";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosThumbsUp, IoIosThumbsDown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <TopNavbarSignIn />
      <Navbar />

      <div className="container mx-auto text-center mt-8">
        <h1 className="text-2xl font-bold text-gray-800">GET HELP</h1>
      </div>

      <div className="container mx-auto flex justify-center pt-3">
        <div className="relative w-[420px]">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full px-5 py-3 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <IoSearchOutline className="absolute right-4 top-3 text-gray-500 text-lg" />
        </div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-8 p-6">
        {/* Left Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-2/3">
          <h2 className="text-xl font-semibold text-gray-800">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="text-gray-600 mt-2">
            We want to make buying your favorite Nike shoes and gear online fast
            and easy. We accept the following payment options:
          </p>

          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
            </li>
            <li>Apple Pay</li>
          </ul>

          <p className="mt-2 text-gray-600">
            Nike Members can store multiple debit or credit cards for faster
            checkout.{" "}
            <Link
              href="/join-us"
              className="mt-4 font-semibold py-1 px-1 shadow-md hover:shadow-xl rounded-lg hover:text-red-700"
            >
              Join us today.
            </Link>
          </p>

          <div className="flex gap-4 mt-4">
            <button className="mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:text-red-950">
              <Link href="/join-us">JOIN US</Link>
            </button>

            <button className="mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:text-red-950">
              <Link href="/snkrs">SHOP NIKE</Link>
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">FAQs</h3>
            <div className="mt-2 space-y-4 text-gray-600">
              <p>
                <strong>
                  Does my card need international purchases enabled?
                </strong>{" "}
                Yes, we recommend asking your bank to enable international
                purchases.
              </p>
              <p>
                <strong>Can I pay for my order with multiple methods?</strong>{" "}
                No, payment for Nike orders can’t be split between multiple
                payment methods.
              </p>
              <p>
                <strong>Why don’t I see Apple Pay as an option?</strong> You
                need to use a compatible Apple device and the Safari browser.
              </p>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>Was this answer helpful?</p>
            <div className="flex items-center gap-2 text-lg mt-1">
              <IoIosThumbsUp className="cursor-pointer hover:text-green-500" />
              <IoIosThumbsDown className="cursor-pointer hover:text-red-500" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 h-24"
              ></textarea>
              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:text-red-950"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/3 text-center">
          <h2 className="text-xl font-semibold text-gray-800">CONTACT US</h2>
          <div className="mt-6 space-y-10">
            <div>
              <Image
                src="/contactusimg.png"
                alt="call"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="text-gray-600 mt-2 font-semibold">
                000 800 919 0566
              </p>
              <p className="text-gray-600 text-sm">
                Products & Orders: 24/7 <br /> Company Info & Enquiries: Mon-Fri
              </p>
            </div>
            <div>
              <Image
                src="/contacttextimg.png"
                alt="text"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="text-gray-600 text-sm mt-2">
                24 hours a day, 7 days a week
              </p>
            </div>
            <div>
              <Image
                src="/contactmsgimg.png"
                alt="message"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="text-gray-600 text-sm mt-2">
                We will reply within five business days
              </p>
            </div>
            <div>
              <Image
                src="/contactstoreimg.png"
                alt="store"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="text-gray-600 text-sm mt-2 font-semibold">
                STORE LOCATOR
              </p>
              <p className="text-gray-600 text-sm">
                Find Nike retail stores near you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
