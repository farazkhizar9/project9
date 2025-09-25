"use client";
import React from 'react';
import { getProductById } from '../../../lib/products';
import type { Product } from '../../../types';
import Button from '../../../components/Button';
import { useCart } from '../../../context/CartContext';


interface Props { params: { id: string } }


export default function ProductPage({ params }: Props) {
const product: Product | null = getProductById(params.id);
const { addToCart } = useCart();


if (!product) return <div>Product not found</div>;


return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="rounded-lg overflow-hidden bg-white shadow-sm p-4 flex items-center justify-center">
<img src={product.image} alt={product.title} className="w-full h-96 object-cover" />
</div>


<div>
<h1 className="text-2xl font-bold mb-2">{product.title}</h1>
<p className="text-xl text-indigo-600 mb-4">${product.price.toFixed(2)}</p>
<p className="text-slate-700 mb-6">{product.description}</p>


<div className="flex gap-4">
<Button className="bg-indigo-600 text-white" onClick={() => addToCart(product, 1)}>Add to Cart</Button>
<Button className="border">Buy Now</Button>
</div>
</div>
</div>
);
}