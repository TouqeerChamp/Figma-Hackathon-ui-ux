import { client } from "@/sanity/lib/client";
import { Product } from "../../../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import TopNavbarLogin from "../../TopNavbarLogin";
import Header from "../../Header";
import Link from "next/link";
import dynamic from "next/dynamic"; // ✅ Dynamic import

const AddToCartButton = dynamic(() => import("./AddToCartButton"), {
  ssr: false,
}); // ✅ Fix

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(`*[_type == "product" && slug.current == $slug][0]`, {
    slug,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    return (
      <div className="text-center text-red-500 text-xl font-bold">
        ⚠️ Product not found ⚠️
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-200 to-blue-100 min-h-screen">
      <TopNavbarLogin />
      <Header />
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Product Image Section */}
          <div className="lg:w-1/2">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.productName}
                width={600}
                height={600}
                className="rounded-3xl shadow-xl border-4 border-white transform transition-all hover:scale-105"
              />
            )}
          </div>

          {/* Product Info Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-5xl font-extrabold text-pink-400 drop-shadow-md">
              {product.productName}
            </h1>
            <p className="text-3xl text-red-400 font-semibold">
              $ {product.price}
            </p>
            <p className="text-lg text-gray-800">{product.description}</p>
            <AddToCartButton product={product} /> {/* ✅ Fix ho gaya */}
            <Link href="/carts">
              <button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold py-8 rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-95 hover:text-red-950 mt-5">
                View Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
