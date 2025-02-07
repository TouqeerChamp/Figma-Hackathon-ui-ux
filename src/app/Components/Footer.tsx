import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className=" w-full sm:w-full md:w-full h-auto bg-black">
        <div className="container mx-auto w-full sm:w-full md:w-full h-auto bg-black mt-10 text-white">
          <div className="w-full sm:w-full flex flex-col sm:flex-row p-5 relative">
            {/* First Section */}
            <div className="w-full sm:w-[196.2px] h-auto mb-5 sm:mb-0">
              <ul>
                <li className="text-[10px] py-1 font-bold text-gray-100">
                  FIND A STORE
                </li>
                <li className="text-[10px] py-1 text-gray-300 hover:text-gray-600 cursor-pointer">
                  BECOME A MEMBER
                </li>
                <li className="text-[10px] py-1 text-gray-300 hover:text-gray-600 cursor-pointer">
                  SIGN UP FOR EMAIL
                </li>
                <li className="text-[10px] py-1 text-gray-300 hover:text-gray-600 cursor-pointer">
                  Send Us Feedback
                </li>
                <li className="text-[10px] py-1 text-gray-300 hover:text-gray-600 cursor-pointer">
                  STUDENT DISCOUNTS
                </li>
              </ul>
            </div>

            {/* Second Section */}
            <div className="w-full sm:w-[196.2px] h-auto mb-5 sm:mb-0">
              <ul>
                <li className="text-[10px] py-1 font-bold text-gray-100">
                  GET HELP
                </li>
                <li className="text-[10px] py-1 text-gray-500 hover:text-gray-600 cursor-pointer">
                  Order Status
                </li>
                <li className="text-[10px] py-1 text-gray-500 hover:text-gray-600 cursor-pointer">
                  Delivery
                </li>
                <li className="text-[10px] py-1 text-gray-500 hover:text-gray-600 cursor-pointer">
                  Returns
                </li>
                <li className="text-[10px] py-1 text-gray-500 hover:text-gray-600 cursor-pointer">
                  Payments Options
                </li>
                <li className="text-[10px] py-1 text-gray-500 hover:text-gray-600 cursor-pointer">
                  Contact Us On Nike.com Inquiries
                </li>
                <li className="text-[10px] py-1 text-gray-500 hover:text-gray-600 cursor-pointer">
                  Contact Us On All Others Inquiries
                </li>
              </ul>
            </div>

            {/* Third Section */}
            <div className="w-full sm:w-[196.2px] h-auto mb-5 sm:mb-0">
              <ul>
                <li className="text-[10px] py-1 font-bold text-gray-100">
                  ABOUT NIKE
                </li>
                <li className="text-[10px] py-1 text-gray-500 hover:text-gray-600 cursor-pointer">
                  News
                </li>
                <li className="text-[10px] py-1 text-gray-500 hover:text-gray-600 cursor-pointer">
                  Careers
                </li>
                <li className="text-[10px] py-1 text-gray-500 hover:text-gray-600 cursor-pointer">
                  Investors
                </li>
                <li className="text-[10px] py-1 text-gray-500 hover:text-gray-600 cursor-pointer">
                  Sustainability
                </li>
              </ul>
            </div>

            {/* Icon Section */}
            <div className="flex gap-3 text-gray-400 absolute right-5 top-6 justify-center sm:justify-start mt-4 sm:mt-0">
              <FaTwitter className="text-[24px]  hover:bg-gray-100 rounded cursor-pointer" />
              <FaFacebook className="text-[24px]  hover:bg-gray-100 rounded cursor-pointer" />
              <TiSocialYoutubeCircular className="text-[24px]  hover:bg-gray-100 rounded cursor-pointer" />
              <FaInstagramSquare className="text-[24px]  hover:bg-gray-100 rounded cursor-pointer" />
            </div>
          </div>

          {/* Last Section */}
          <div className="w-full sm:w-full md:w-full h-auto">
            <div className="w-full sm:w-full h-auto text-white flex flex-col sm:flex-row items-center justify-between p-4 mt-4 sm:mt-0">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-[12px]" />
                <p className="text-[12px]">India</p>

                <p className="text-gray-400 text-[12px] sm:text-left ml-8">
                  &copy; 2023 Nike, Inc. All Rights Reserved
                </p>
              </div>
              <ul className="flex gap-5 text-[12px] ml-16 text-gray-400 mt-4 sm:mt-0 sm:text-left justify-center sm:justify-end]">
                <li className=" hover:text-gray-300 cursor-pointer">Guides</li>
                <li className=" hover:text-gray-300 cursor-pointer">
                  Terms Of Sale
                </li>
                <li className=" hover:text-gray-300 cursor-pointer">
                  Terms Of Use
                </li>
                <li className=" hover:text-gray-300 cursor-pointer">
                  Nike Privacy Policy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
