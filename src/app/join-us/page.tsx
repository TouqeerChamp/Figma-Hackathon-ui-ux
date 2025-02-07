import React from "react";
import TopNavbarSignIn from "../Components/TopNavbarSignIn";
import Header from "../Components/Header";
import Link from "next/link";
import Image from "next/image";

const JoinUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <TopNavbarSignIn />
      <Header />
      <div className="container mx-auto w-[380px] h-auto text-center py-5 border-[5px] rounded-3xl shadow-lg my-5">
        <div className="mb-6">
          <Image
            src="/logo.png"
            alt="Nike Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
          <h1 className="text-2xl font-bold text-pink-600 mt-4">
            BECOME A NIKE MEMBER
          </h1>
        </div>

        <p className="text-sm text-gray-600 mb-6 w-[300px] mx-auto">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>

        <div className="grid grid-cols-1 space-y-2 w-[300px] mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="outline-none border rounded py-2 px-3 text-[12px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="outline-none border rounded py-2 px-3 text-[12px]"
          />
          <input
            type="text"
            placeholder="First Name"
            className="outline-none border rounded py-2 px-3 text-[12px]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="outline-none border rounded py-2 px-3 text-[12px]"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="outline-none border rounded py-2 px-3 text-[12px]"
          />
        </div>

        <p className="text-[11px] text-gray-400 mt-2">
          Get a Nike Member Reward Every Year on Your Birthday.
        </p>

        <div className="relative w-[300px] mx-auto mt-3">
          <input
            type="text"
            placeholder="Country/Region"
            className="w-full p-3 border rounded text-[12px]"
          />
        </div>

        <div className="flex justify-center gap-3 mt-4">
          <button className="border px-8 py-2 text-gray-600 text-[12px] rounded hover:bg-gray-200">
            Male
          </button>
          <button className="border px-8 py-2 text-gray-600 text-[12px] rounded hover:bg-gray-200">
            Female
          </button>
        </div>

        <div className="flex justify-between items-center mx-auto pt-6 w-[300px] text-[11px] text-gray-400">
          <div className="flex gap-2 cursor-pointer justify-center">
            <input type="checkbox" name="check" id="signin" />
            <p className="pl-1 text-justify">
              {" "}
              Sign up for emails to get updates from Nike on products, offers,
              and your Member benefits.
            </p>
          </div>
        </div>

        <p className="text-[12px] text-gray-600 w-[300px] mx-auto pt-5">
          By creating an account, you agree to Nike’s <u>Privacy Policy</u> and{" "}
          <u>Terms of Use.</u>
        </p>

        <button className="mt-6 w-full bg-black text-white py-3 rounded-md text-sm  hover:bg-gray-800 bg-gradient-to-r from-pink-500 to-red-500 font-semibold px-6 shadow-md hover:shadow-lg hover:scale-95 transition-transform duration-300 ease-in-out hover:text-red-950">
          JOIN US
        </button>

        <p className="text-[12px] text-gray-600 pt-6">
          Already a Member?{" "}
          <b className="text-red-800 underline">
            <Link href="/login">Sign In.</Link>
          </b>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
