"use client";
import React from 'react';
import Link from 'next/link';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import Button from './Button';


export default function ProductCard({ product }: { product: Product }) {
const { addToCart } = useCart();


return (
<article className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
<Link href={`/products/${product.id}`} className="block">
<div className="h-48 bg-slate-50 flex items-center justify-center">
<img src={product.image} alt={product.title} className="h-full w-full object-cover" />
</div>
</Link>


<div className="p-4 flex-1 flex flex-col">
<h3 className="text-lg font-medium mb-1">{product.title}</h3>
<p className="text-sm text-slate-600 mb-3">${product.price.toFixed(2)}</p>
<div className="mt-auto">
<Button className="bg-indigo-600 text-white w-full" onClick={() => addToCart(product)}>
Add to Cart
</Button>
</div>
</div>
</article>
);
}