"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import TopNavbarSignIn from "./Components/TopNavbarSignIn";
import Header from "./Components/Header";
import * as React from "react";
import { Product } from "../../types/products";
import { useEffect, useState } from "react";
import { four2 } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "./action/actions";
import Swal from "sweetalert2";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const [products, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProduct: Product[] = await client.fetch(four2);
      setProduct(fetchedProduct);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.productName} Product added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
    addToCart(product);
  };

  return (
    <>
      <div>
        <TopNavbarSignIn />
        <Header />
        <div className="w-full h-[58px] bg-slate-100 flex flex-col items-center justify-center text-center">
          <p className="text-sm font-semibold">Hello Nike App</p>
          <p className="text-xs">
            Download the app to access everything Nike. <u>Get Your Great</u>.
          </p>
        </div>

        {/* Slider */}
        <div className="w-full mx-auto">
          <div className="container mx-auto">
            <Image
              src={"/slideimg.png"}
              alt="slider"
              width={960}
              height={554}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="container mx-auto px-4 pt-10">
          <h2
            className="text-center text-3xl font-bold mb-6"
            data-aos="fade-up"
          >
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product: Product) => (
              <div
                key={product.productName}
                className="bg-white border rounded-xl shadow-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <Link href={`/Components/product/${product.slug.current}`}>
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.productName}
                      width={200}
                      height={200}
                      className="w-full h-52 object-cover rounded-md"
                    />
                  )}
                  <h3 className="text-lg font-semibold mt-3">
                    {product.productName}
                  </h3>
                  <p className="text-gray-500 text-sm">${product.price}</p>
                  <div className="flex justify-between mt-4">
                    <Link href="/carts">
                      <button className="bg-gradient-to-t from-pink-500 to-red-500 font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out text-white text-[10px] hover:text-red-950">
                        View Cart
                      </button>
                    </Link>
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="bg-gradient-to-t from-pink-500 to-red-500 font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out text-white text-[10px] hover:text-red-950"
                    >
                      Add To Cart
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-xl font-semibold mb-4">Featured</h2>
          <Image
            src={"/feature.png"}
            alt=""
            width={1344}
            height={900}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Limited Stocks Section */}
      <div className="container mx-auto px-4 pt-10">
        <h2
          className="text-center text-3xl font-bold mb-6"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Limited Stocks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: Product) => (
            <div
              key={product.productName}
              className="bg-white border rounded-xl shadow-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <Link href={`/Components/product/${product.slug.current}`}>
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    width={200}
                    height={200}
                    className="w-full h-52 object-cover rounded-md"
                  />
                )}
                <h3 className="text-lg font-semibold mt-3">
                  {product.productName}
                </h3>
                <p className="text-gray-500 text-sm">${product.price}</p>
                <div className="flex justify-between mt-4">
                  <Link href="/carts">
                    <button className="bg-gradient-to-t from-pink-500 to-red-500 font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out text-white text-[10px] hover:text-red-950">
                      View Cart
                    </button>
                  </Link>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-gradient-to-t from-pink-500 to-red-500 font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out text-white text-[10px] hover:text-red-950"
                  >
                    Add To Cart
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Dont Miss Section */}
      <div className="container mx-auto w-full pt-12">
        <div className="pt-12">
          <p className="font-semibold text-xl">Dont Miss</p>
          <Image
            src={"/dontmiss.png"}
            alt="image"
            width={1344}
            height={926}
            className="w-auto h-100 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Essential Section */}
      <div className="container mx-auto w-full pt-12">
        <div className="pt-12">
          <p className="font-semibold text-xl">Essential</p>
          <Image
            src={"/essential.png"}
            alt="img"
            width={1356}
            height={541}
            className="w-auto h-100 rounded-3xl object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="w-full mx-auto md:w-[880px] pt-10 py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-[12px] text-gray-600">
          <div>
            <ul className="space-y-3">
              <li className="font-semibold text-black pb-3 ">Icons</li>
              <li className="cursor-pointer hover:text-black ">Air Force 1</li>
              <li className="cursor-pointer hover:text-black ">Huarache</li>
              <li className="cursor-pointer hover:text-black ">Air Max 90</li>
              <li className="cursor-pointer hover:text-black ">Air Max 95</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li className="font-semibold text-black pb-3 ">Shoes</li>
              <li className="cursor-pointer hover:text-black ">All Shoes</li>
              <li className="cursor-pointer hover:text-black ">Custom Shoes</li>
              <li className="cursor-pointer hover:text-black ">Jordan Shoes</li>
              <li className="cursor-pointer hover:text-black ">
                Running Shoes
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li className="font-semibold text-black pb-3 ">Clothing</li>
              <li className="cursor-pointer hover:text-black ">All Clothing</li>
              <li className="cursor-pointer hover:text-black ">Modest Wear</li>
              <li className="cursor-pointer hover:text-black ">
                Hoodies & Pullovers
              </li>
              <li className="cursor-pointer hover:text-black ">
                Shirts & Tops
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li className="font-semibold text-black pb-3 ">Kids</li>
              <li className="cursor-pointer hover:text-black ">
                Infant & Toddler Shoes
              </li>
              <li className="cursor-pointer hover:text-black ">Kids Shoes</li>
              <li className="cursor-pointer hover:text-black ">
                Kids Jordan Shoes
              </li>
              <li className="cursor-pointer hover:text-black ">
                Kids Basketball Shoes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
