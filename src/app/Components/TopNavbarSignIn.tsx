import Link from "next/link";
import React from "react";

const TopNavbarSignIn = () => {
  return (
    <div>
      <nav className="bg-gray-100 border-b border-gray-300">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-3 px-4 sm:px-6">
          {/* Logo Section */}
          <div className="mb-2 sm:mb-0">
            <Link href="/snkrs">
              <img
                src="/toplogo.png "
                alt="Jordan Logo"
                className="h-6 sm:h-8 hvr-grow"
              />
            </Link>
          </div>

          {/* Links Section */}
          <div
            data-aos="fade-down"
            className="flex flex-wrap sm:flex-nowrap items-center justify-center space-x-0 sm:space-x-4 text-sm text-gray-700"
          >
            <Link href="/product">
              <li className="hover:text-gray-400 list-none mx-2 sm:mx-0">
                Find a Store
              </li>
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="contactus">
              <li className="hover:text-gray-400 list-none mx-2 sm:mx-0">
                Help
              </li>
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="join-us">
              <li className="hover:text-gray-400 list-none mx-2 sm:mx-0">
                Join Us
              </li>
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/login">
              <li className="hover:text-gray-400 list-none mx-2 sm:mx-0">
                Sign In
              </li>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavbarSignIn;
