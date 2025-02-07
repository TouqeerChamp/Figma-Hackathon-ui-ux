import React from "react";
import TopNavbarLogin from "../Components/TopNavbarLogin";
import Header from "../Components/Header";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";

const ProductDetail = () => {
  return (
    <div>
      <TopNavbarLogin />
      <Header />

      {/* Image Section */}
      <div className="w-full container mx-auto">
        <div className="max-h-screen h-auto mt-28 flex flex-col md:flex-row mx-8">
          <div className="w-full md:w-[550px] h-auto md:h-[550px] mx-10">
            <img
              src="/03.png"
              alt="img"
              className="w-full h-auto md:h-full object-contain hvr-shrink"
            />
          </div>

          {/* Heading Section */}
          <div className="w-full md:w-[376px] mx-10 md:mx-28">
            <div className="text-[24px] font-semibold pb-5">
              <h1>
                Nike Air Force 1 <br /> PLT.AF.ORM
              </h1>
            </div>
            <div className="w-full md:w-[300px] h-auto md:h-[96px] text-[13px]">
              <p>
                Turn style on its head with this crafted take on the Air Jordan
                1 Mid. Its inside out inspired construction, including unique
                layering and exposed foam accents, ups the ante on this timeless
                Jordan Brand silhouette. Details like the deco stitching on the
                Swoosh add coveted appeal, while the unexpected shading, rich
                mixture of materials and aged midsole aesthetic give this
                release an artisan finish.
              </p>
            </div>
            <div className="w-full md:w-[374.92px] pt-10 md:pt-28">
              <h1 className="text-[20px] font-semibold">$ 8 695.00</h1>
              <div className="pt-3">
                <Link href="/cart">
                  <button className="bg-black text-white hover:bg-gray-400 text-[10px] px-5 py-2 rounded-2xl flex items-center justify-center gap-1">
                    <IoCartOutline className="text-[14px]" />
                    Add To Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
