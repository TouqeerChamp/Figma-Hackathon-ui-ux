"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToCart } from "../action/actions";

const DropMenuBarWithImages = () => {
  const [products, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.productName} Product added to car`,
      showConfirmButton: false,
      timer: 1500,
    });
    addToCart(product);
  };

  return (
    <div>
      {/* Middle (500) Hide Filters & Sort By Section */}
      <div className="flex justify-between container w-full h-[51px] mx-auto items-center mt-20">
        <div className="w-[88px] h-[25px] ml-8">
          <h2>
            <b>New (500)</b>
          </h2>
        </div>
        <div className="flex w-[224.40px] h-[25px] space-x-6 ">
          <p className="flex gap-1">
            {" "}
            Hide Filters <img src="/filter.png" alt="filter" />
          </p>
          <p className="flex">
            {" "}
            Sort By <select name="select" id="sort"></select>
          </p>
        </div>
      </div>

      {/* List Section */}
      <div className="container mx-auto px-4 py-2 flex flex-col lg:flex-row">
        <div className="lg:w-[230px] lg:h-[849px] mb-4 lg:mb-0">
          <ul className="lg:w-[192px] text-sm font-semibold space-y-3">
            {[
              "Shoes",
              "Sports Bras",
              "Tops & T-Shirts",
              "Hoodies & Sweatshirts",
              "Jackets",
              "Trousers & Tights",
              "Shorts",
              "Tracksuits",
              "Jumpsuits & Rompers",
              "Skirts & Dresses",
              "Socks",
              "Accessories & Equipment",
            ].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer text-gray-700 hover:text-white hover:bg-pink-600 hover:scale-105 transition duration-300 rounded-lg px-3 py-2"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Filters Section */}
          <div className="w-[192px] space-y-6">
            {/* Gender Section */}
            <div className="border-b pb-2">
              <div className="flex justify-between items-center font-semibold text-[14px] mb-2">
                <p>Gender</p>
                <select
                  name="gender"
                  className="border px-2 py-1 text-sm rounded"
                >
                  <option value="">Select</option>
                </select>
              </div>
              <div className="text-[12px] space-y-1">
                {["Men", "Women", "Unisex"].map((item, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer hover:text-red-500"
                  >
                    <input type="checkbox" className="accent-red-500" /> {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Kids Section */}
            <div className="border-b pb-2">
              <div className="flex justify-between items-center font-semibold text-[14px] mb-2">
                <p>Kids</p>
                <select
                  name="kids"
                  className="border px-2 py-1 text-sm rounded"
                >
                  <option value="">Select</option>
                </select>
              </div>
              <div className="text-[12px] space-y-1">
                {["Boys", "Girls"].map((item, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer hover:text-red-500"
                  >
                    <input type="checkbox" className="accent-red-500" /> {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Shop By Price Section */}
            <div>
              <div className="flex justify-between items-center font-semibold text-[14px] mb-2">
                <p>Shop By Price</p>
                <select
                  name="price"
                  className="border px-2 py-1 text-sm rounded"
                >
                  <option value="">Select</option>
                </select>
              </div>
              <div className="text-[12px] space-y-1">
                {["Under $2,500.00", "$2,501.00"].map((item, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer hover:text-red-500"
                  >
                    <input type="checkbox" className="accent-red-500" /> {item}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Images Section */}
        <div className="w-full flex flex-wrap gap-5 ml-2">
          <div className="container mx-auto w-full pt-8">
            <div className="flex justify-center items-center text-center hvr-grow">
              <p
                className="font-bold text-5xl pb-8 ml-24 text-red-400 hover:text-pink-600 cursor-pointer font-serif"
                data-aos="zoom-in-down"
              >
                {" "}
                NEW YEAR <span className="text-red-600">SALE</span> COLLECTIONS
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {products.map((product: Product) => (
                <div
                  key={product.productName}
                  className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out"
                >
                  <Link href={`/Components/product/${product.slug.current}`}>
                    {product.image && (
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.productName}
                        width={200}
                        height={200}
                        className="w-full h-auto rounded-md object-cover hvr-shrink"
                      />
                    )}
                    <h1 className="text-lg font-semibold mt-2">
                      {product.productName}
                    </h1>
                    <p className="text-gray-500 mt-2">${product.price}</p>
                    <div className="flex justify-between">
                      <Link href="/carts">
                        <button className="bg-gradient-to-t from-pink-500 to-red-500 font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out text-white text-[10px] hover:text-red-950 mt-2 ml-">
                          View Cart
                        </button>
                      </Link>

                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="bg-gradient-to-t from-pink-500 to-red-500 font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out text-white text-[10px] hover:text-red-950 mt-2 ml-"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {products.map((product: Product) => (
                <div
                  key={product.productName}
                  className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out"
                >
                  <Link href={`/Components/product/${product.slug.current}`}>
                    {product.image && (
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.productName}
                        width={200}
                        height={200}
                        className="w-full h-auto rounded-md object-cover hvr-shrink"
                      />
                    )}
                    <h1 className="text-lg font-semibold mt-2">
                      {product.productName}
                    </h1>
                    <p className="text-gray-500 mt-2">${product.price}</p>
                    <div className="flex justify-between">
                      <Link href="/carts">
                        <button className="bg-gradient-to-t from-pink-500 to-red-500 font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out text-white text-[10px] hover:text-red-950 mt-2 ml-">
                          View Cart
                        </button>
                      </Link>

                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="bg-gradient-to-t from-pink-500 to-red-500 font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out text-white text-[10px] hover:text-red-950 mt-2"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="container mt-32 border-t w-full sm:w-[1000px]">
            <div className="font-semibold mt-[50px]">
              <div>
                <p>Related Categories</p>
              </div>
            </div>
            <div className="flex flex-wrap w-full sm:w-[1090px] gap-2 pt-5">
              <div className="border rounded-2xl text-[9px] py-2 px-3 hover:text-gray-300 cursor-pointer">
                <p>Best Selling Products</p>
              </div>
              <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer">
                <p>Best Shoes</p>
              </div>
              <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer">
                <p>New Basketball Shoes</p>
              </div>
              <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer">
                <p>New Football Shoes</p>
              </div>
              <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer">
                <p>New Mens Shoes</p>
              </div>
              <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer">
                <p>New Running Shoes</p>
              </div>
              <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer">
                <p>Best Mens Shoes</p>
              </div>
              <div className="flex flex-wrap w-full sm:w-[1090px] gap-2">
                <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer">
                  <p>New Jordan Shoes</p>
                </div>
                <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer">
                  <p>Best Womens Shoes</p>
                </div>
                <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer">
                  <p>Best Training & gym</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropMenuBarWithImages;
