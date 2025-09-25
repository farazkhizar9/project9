"use client";
import React from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <section>
      {/* Hero Section */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 mb-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">Discover modern essentials</h2>
            <p className="opacity-90 mb-4">
              Quality products for your everyday life — carefully selected.
            </p>
            <Link
              href="/products"
              className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold"
            >
              Shop Now
            </Link>
          </div>
          <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="nnnn.jpeg"
              alt="hero"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <h3 className="text-xl font-semibold mb-4">Featured products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
