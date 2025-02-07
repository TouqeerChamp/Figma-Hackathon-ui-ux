"use client";
import { Product } from "../../../../../types/products";
import Swal from "sweetalert2";
import { addToCart } from "@/app/action/actions";

export default function AddToCartButton({ product }: { product: Product }) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
    addToCart(product);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold py-8 rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-95 hover:text-red-950 mt-12"
    >
      Add to Cart
    </button>
  );
}
