"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../action/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Navbar from "../Components/Header";
import TopNavbarLogin from "../Components/TopNavbarLogin";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemoveFromCart = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const product = cartItems.find((item) => item._id === id);
        if (product) {
          removeFromCart(product._id);
        }
        setCartItems(getCartItems());
        Swal.fire("Deleted!", "Your item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

 const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Please review your cart before checkout!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "your order has been confirmed and sent to checkout page");
        setCartItems([]);
        router.push("/checkout");
      }
    });
  };
  
  return (
    <div>
        <TopNavbarLogin />
        <Navbar />
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id} className="flex justify-between items-center border-b py-2">
              <div>
                {
                    item.image && (
                        <Image
                            src={urlFor(item.image).url()}
                            alt={item.productName}
                            width={150}
                            height={500}
                            className="w-full h-auto rounded-md object-cover hvr-shrink"
                        />
                    )
                }
                <h2 className="text-lg font-semibold">{item.productName}</h2>
                <p className="text-gray-500">${item.price}</p>
                <p className="text-gray-500">Quantity: {item.inventory}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => handleDecrement(item._id)} className="px-2 py-1 bg-gray-200 rounded-l">-</button>
                <span className="px-4">{item.inventory}</span>
                <button onClick={() => handleIncrement(item._id)} className="px-2 py-1 bg-gray-200 rounded-r">+</button>
              </div>
              <button onClick={() => handleRemoveFromCart(item._id)} className="hover:bg-text-danger bg-gradient-to-t from-red-700 to-pink-700 font-semibold py-4 px-8 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out text-white text-[10px] mt-2">Remove</button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Total: ${calculatedTotal().toFixed(2)}</h2>
        <button onClick={handleProceed} className="bg-gradient-to-t from-pink-500 to-red-500 font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out text-white text-[15px] hover:text-red-950 mt-2">Proceed to Checkout</button>
      </div>
    </div>
    </div>
  );
};

export default CartPage;
