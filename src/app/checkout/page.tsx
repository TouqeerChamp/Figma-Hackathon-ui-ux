"use client"
import React, { useEffect, useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import TopNavbarLogin from "../Components/TopNavbarLogin";
import Navbar from "../Components/Header";
import Swal from "sweetalert2";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: ""
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    postalCode: false,
    city: false
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        setCartItems(JSON.parse(savedCart));
    }

    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
        setDiscount(Number(appliedDiscount));
    }
}, []);;

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value
    });
    setFormErrors({
      ...formErrors,
      [id]: !value.trim()
    });
  };
  

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName.trim(),
      lastName: !formValues.lastName.trim(),
      email: !formValues.email.trim(),
      phone: !formValues.phone.trim(),
      address: !formValues.address.trim(),
      postalCode: !formValues.postalCode.trim(),
      city: !formValues.city.trim()
    };
    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) {
      console.log("Form Errors:", formErrors);
      Swal.fire(
        "Error!",
        "Please fill in all required fields before placing the order.",
        "error"
      );
      return;
    } 
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, place order!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been placed successfully.",
          "success"
        );
        localStorage.removeItem("cart");
        localStorage.removeItem("appliedDiscount");
        setCartItems([]);
        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          postalCode: "",
          city: "",
        });
      }
    });
  };
  
  
  

  return (
    <div>
      <TopNavbarLogin />
      <Navbar />
    <div className="min-h-screen bg-gray-50">
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-gray-700">Cart
            <CgChevronRight className="h-4 w-4 text-gray-600" />
            <span className="ml-2 font-semibold">Checkout</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-pink-700">Order Summary</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                <div className="w-16 h-16 rounded overflow-hidden">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.productName}
                      width={100}
                      height={100}
                      className="w-full h-auto rounded-md object-cover"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-800">{item.productName}</h3>
                  <p className="text-xs text-gray-500">Price: ${item.price * item.inventory}</p>
                  <p className="text-xs text-gray-500">Quantity: {item.inventory}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
          <div className="text-right pt-4">
            <p className="text-sm text-pink-700">Subtotal: <span>$ {subTotal.toFixed(2)}</span></p>
            <p className="text-sm text-green-600">Discount: <span>$ {discount}</span></p>
            <p className="text-lg font-semibold text-red-700 bg-blue-300 rounded-sm ml-[340px] pr-1">Total: <span>${(subTotal - discount).toFixed(2)}</span></p>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-pink-700">Billing Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {["firstName", "lastName", "address", "email", "phone", "city", "postalCode"].map((id) => (
    <div key={id}>
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </label>
      <input
        type={id === "email" ? "email" : "text"}
        id={id}
        placeholder={`Enter your ${id}`}
        value={formValues[id as keyof typeof formValues]}
        onChange={handleInputChange}
        className={`mt-1 block w-full rounded-lg border p-3 shadow-sm 
          ${formErrors[id as keyof typeof formErrors] ? "border-red-500" : "border-gray-300"}
          focus:border-blue-500 focus:ring-blue-500`}
      />
      {formErrors[id as keyof typeof formErrors] && (
        <p className="text-red-500 text-xs mt-1">This field is required.</p>
      )}
    </div>
  ))}
</div>


          <button
            onClick={handlePlaceOrder}
            className="w-full mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:text-red-950"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CheckoutPage;