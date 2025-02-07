import React from "react";
import TopNavbarLogin from "./TopNavbarLogin";
import { FaRegHeart } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import Header from "./Header";
import Link from "next/link";

const Cart = () => {
  return (
    <div>
      <TopNavbarLogin />
      <Header />
      <div className="flex flex-col md:flex-row container mx-auto w-full md:w-[880px] h-auto pt-10">
        <div className="w-full md:w-[586.66px] h-auto md:h-[438.31px]">
          <div className="w-full md:w-[574.06px] h-auto md:h-[51.11px] bg-slate-100">
            <p className="text-[12px] pl-5 pt-2">Free Delivery</p>
            <p className="text-[10px] pl-5 p-1">
              Applies to orders of $ 14 000.00 or more. <u>view details</u>
            </p>
          </div>
          <p className="pt-5 pl-3">
            <b>Bag</b>
          </p>

          <div className="w-full md:w-[573.86px] h-auto md:h-[353.6px]">
            <div className="w-full md:w-[573.86px] h-auto md:h-[176.8px] flex pt-5 border-b-2">
              <div className="w-full md:w-[573.86px] h-auto md:h-[138.4px] flex">
                <div>
                  <img
                    src="bagimage.png"
                    alt="bag"
                    className="w-[120px] h-[120px] md:w-[120px] md:h-[120px]"
                  />
                </div>
                <div className="pl-8">
                  <p className="text-[14px]">Nike Dri-FIT ADV TechKnit Ultra</p>
                  <p className="text-gray-400 text-[14px]">
                    Mens Short-Sleeve Running Top
                  </p>
                  <p className="text-gray-400 text-[14px]">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <div className="flex gap-12">
                    <p className="text-gray-400 text-[14px]">Size L</p>
                    <p className="text-gray-400 text-[14px]">Quantity 1</p>
                  </div>
                  <div className="flex mt-5 text-[20px] gap-5 text-gray-700">
                    <FaRegHeart />
                    <ImBin />
                  </div>
                </div>
                <div className="text-[12px] pl-28">
                  <p>MRP: $ 3.895.00</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[573.86px] h-auto md:h-[176.8px] flex pt-5 border-b">
              <div className="w-full md:w-[573.86px] h-auto md:h-[138.4px] flex">
                <div>
                  <img
                    src="03.png"
                    alt="bag"
                    className="w-[120px] h-[120px] md:w-[120px] md:h-[120px]"
                  />
                </div>
                <div className="pl-8">
                  <p className="text-[14px]">Nike Air Force 1 PLT.AF.ORM</p>
                  <p className="text-gray-400 text-[14px]">Mens Shoes</p>
                  <p className="text-gray-400 text-[14px]">
                    Flat Pewter/Light Bone/Black/White
                  </p>
                  <div className="flex gap-12">
                    <p className="text-gray-400 text-[14px]">Size 8</p>
                    <p className="text-gray-400 text-[14px]">Quantity 1</p>
                  </div>
                  <div className="flex mt-5 text-[20px] gap-5 text-gray-700">
                    <FaRegHeart />
                    <ImBin />
                  </div>
                </div>
                <div className="text-[12px] ml-24">
                  <p>MRP: $ 16 995.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[280.54px] h-auto md:h-[236px] mt-5 md:mt-0 md:ml-5">
          <p className="font-semibold pb-5">Summary</p>
          <div className="w-full md:w-[267.74px] h-[22.4px] flex gap-36 text-[13px] pb-1">
            <p>Subtotal</p>
            <p>$ 20 890.00</p>
          </div>
          <div className="w-full md:w-[267.74px] h-[22.4px] flex gap-14 text-[13px]">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <div className="w-full md:w-[268.54px] h-[50.2px] flex border-t border-b mt-5 pt-3 pl-2 gap-36 text-[14px]">
            <p>Total</p>
            <p>$ 20 890.00</p>
          </div>
          <div className="w-full md:w-[301.8px] h-[50.4px] my-5">
            <Link href="checkout">
              <button className="text-[12px] w-full h-full bg-black hover:bg-gray-800 text-white rounded-3xl font-semibold border-gray-200 border-2">
                Member Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
